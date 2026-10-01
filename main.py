"""
Seu Site Grátis — servidor do Criador de Sites.

Serve a ferramenta (arquivos estáticos) e guarda as fotos que o cliente envia,
devolvendo um LINK público para cada uma. O Squarespace só exibe imagem por link,
por isso o código gerado usa esses endereços em vez de imagem embutida.

Variáveis de ambiente (Railway):
  DATA_DIR    pasta persistente das fotos (montar um Volume do Railway nela). Padrão: /data
  PUBLIC_URL  endereço público usado nos links. Ex.: https://app.seusitegratis.com
"""
import io, os, time, uuid, logging
from pathlib import Path
from collections import defaultdict, deque

from fastapi import FastAPI, UploadFile, File, Form, Request, HTTPException
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from PIL import Image, ImageOps, UnidentifiedImageError

log = logging.getLogger("criador")
logging.basicConfig(level=logging.INFO)

BASE = Path(__file__).resolve().parent
DATA_DIR = Path(os.getenv("DATA_DIR", "/data"))
FOTOS = DATA_DIR / "fotos"
try:
    FOTOS.mkdir(parents=True, exist_ok=True)
    (FOTOS / ".teste").write_text("ok")
    # só é permanente se a pasta estiver dentro de um Volume do Railway
    _vol = os.getenv("RAILWAY_VOLUME_MOUNT_PATH", "")
    PERSISTENTE = bool(_vol) and str(FOTOS.resolve()).startswith(str(Path(_vol).resolve()))
    if not PERSISTENTE:
        log.warning("[FOTOS] Nenhum Volume do Railway em %s: as fotos somem a cada deploy.", DATA_DIR)
except Exception:
    FOTOS = BASE / "_fotos_tmp"
    FOTOS.mkdir(parents=True, exist_ok=True)
    PERSISTENTE = False
    log.warning("[FOTOS] DATA_DIR sem permissão de escrita; usando pasta temporária (some a cada deploy). Monte um Volume em %s", DATA_DIR)

MAX_BYTES = 12 * 1024 * 1024          # arquivo recebido
MAX_LADO = {"logo": 800, "foto": 1800}  # lado maior depois de reduzir
LIMITE_POR_HORA = 80                   # envios por IP
_envios = defaultdict(deque)

Image.MAX_IMAGE_PIXELS = 60_000_000

app = FastAPI(docs_url=None, redoc_url=None, openapi_url=None)


def _ip(req: Request) -> str:
    fwd = req.headers.get("x-forwarded-for", "")
    return fwd.split(",")[0].strip() if fwd else (req.client.host if req.client else "?")


def _base_publica(req: Request) -> str:
    env = os.getenv("PUBLIC_URL", "").rstrip("/")
    if env:
        return env
    proto = req.headers.get("x-forwarded-proto", req.url.scheme)
    host = req.headers.get("x-forwarded-host", req.headers.get("host", ""))
    return f"{proto}://{host}"


@app.get("/saude")
def saude():
    return {"ok": True, "fotos_persistentes": PERSISTENTE}


@app.post("/api/fotos")
async def enviar_foto(request: Request, arquivo: UploadFile = File(...), tipo: str = Form("foto")):
    ip = _ip(request)
    agora = time.time()
    fila = _envios[ip]
    while fila and agora - fila[0] > 3600:
        fila.popleft()
    if len(fila) >= LIMITE_POR_HORA:
        raise HTTPException(429, "Muitos envios. Tente novamente mais tarde.")

    dados = await arquivo.read(MAX_BYTES + 1)
    if not dados or len(dados) > MAX_BYTES:
        raise HTTPException(413, "Imagem muito grande (máximo 12 MB).")
    try:
        img = Image.open(io.BytesIO(dados))
        img.load()
    except (UnidentifiedImageError, OSError):
        raise HTTPException(415, "Arquivo não é uma imagem válida.")

    img = ImageOps.exif_transpose(img)  # corrige foto de celular "deitada" e descarta o EXIF
    tipo = "logo" if tipo == "logo" else "foto"
    lado = MAX_LADO[tipo]
    img.thumbnail((lado, lado), Image.LANCZOS)

    tem_transparencia = img.mode in ("RGBA", "LA", "P") and (
        "transparency" in img.info or img.mode in ("RGBA", "LA"))
    pasta = FOTOS / time.strftime("%Y%m")
    pasta.mkdir(parents=True, exist_ok=True)
    nome = uuid.uuid4().hex[:20]
    saida = io.BytesIO()
    if tipo == "logo" and tem_transparencia:
        img.convert("RGBA").save(saida, "PNG", optimize=True)
        ext = "png"
    else:
        if img.mode != "RGB":
            fundo = Image.new("RGB", img.size, (255, 255, 255))
            fundo.paste(img.convert("RGBA"), mask=img.convert("RGBA").getchannel("A"))
            img = fundo
        img.save(saida, "JPEG", quality=84, optimize=True, progressive=True)
        ext = "jpg"
    destino = pasta / f"{nome}.{ext}"
    destino.write_bytes(saida.getvalue())
    fila.append(agora)
    rel = f"{pasta.name}/{destino.name}"
    log.info("[FOTOS] %s %s %d KB ip=%s", tipo, rel, len(saida.getvalue()) // 1024, ip)
    return {"url": f"{_base_publica(request)}/f/{rel}", "largura": img.width, "altura": img.height}


@app.get("/f/{mes}/{arquivo}")
def ver_foto(mes: str, arquivo: str):
    if not (mes.isdigit() and len(mes) == 6) or "/" in arquivo or ".." in arquivo:
        raise HTTPException(404)
    caminho = FOTOS / mes / arquivo
    if not caminho.is_file():
        raise HTTPException(404)
    return FileResponse(caminho, headers={
        "Cache-Control": "public, max-age=31536000, immutable",
        "Access-Control-Allow-Origin": "*",
    })


# arquivos da ferramenta — montado POR ÚLTIMO (o mount em "/" engole rotas registradas depois dele)
class Estaticos(StaticFiles):
    BLOQUEADOS = {"main.py", "requirements.txt", "railway.toml", "README.md"}

    async def get_response(self, path, scope):
        if path in self.BLOQUEADOS or path.startswith("_fotos_tmp") or (path.startswith(".") and path != "."):
            raise HTTPException(404)
        resp = await super().get_response(path, scope)
        if path in ("", ".", "index.html") or path.endswith(".html"):
            resp.headers["Cache-Control"] = "no-cache"
        return resp


app.mount("/", Estaticos(directory=BASE, html=True), name="site")
