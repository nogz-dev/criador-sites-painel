# Criador de Sites — DK Marketing Digital

Ferramenta em que o cliente preenche os dados da empresa em 5 passos, escolhe um modelo
e baixa um pacote `.zip` com o site pronto para o **Code Block do Squarespace**.

Roda no **Railway** com um servidor pequeno em Python (`main.py`, FastAPI) que entrega a ferramenta
e recebe as fotos do cliente, devolvendo um **link público** para cada uma
(o Squarespace só mostra imagem por link).

### Configuração no Railway
- **Volume** montado em `/data` (as fotos ficam em `/data/fotos`). Sem Volume, as fotos somem a cada deploy.
- Variável `PUBLIC_URL` = `https://app.seusitegratis.com` (endereço usado nos links das fotos).
- Início e verificação de saúde já estão no `railway.toml` (`/saude` mostra se as fotos estão num lugar persistente).

## Estrutura

```
index.html                 Página da ferramenta (formulário em passos + prévia)
css/app.css                Visual da ferramenta (não afeta os sites gerados)
js/utils.js                Funções de apoio (textos, WhatsApp, cores)
js/modelos/registro.js    Lista de modelos (MODELOS)
js/modelos/elegante.js     Modelo Elegante
js/modelos/moderno.js      Modelo Moderno
js/modelos/impacto.js      Modelo Impacto
js/modelos/aconchego.js    Modelo Aconchego
js/modelos/minimal.js      Modelo Minimalista
js/modelos/vibrante.js     Modelo Vibrante
js/gerador.js              Monta o HTML do site (estrutura comum + formato Squarespace)
js/app.js                  Interface: passos, fotos, cores da logo, rascunho, download
```

## Onde mexer

- **Visual de um modelo** (cores, fontes, espaçamentos): `js/modelos/<modelo>.js`
- **Estrutura das seções** (ordem, textos fixos, novas seções): `js/gerador.js`
- **Campos e passos do formulário**: `index.html` + `js/app.js`
- **Formato para o Squarespace** (ajustes que escondem cabeçalho/rodapé do template): `js/gerador.js`, bloco `if(SQ)`

## Modelo novo

1. Copie `js/modelos/moderno.js` para `js/modelos/novo.js` e troque `MODELOS.moderno` por `MODELOS.novo`.
2. Ajuste `hero` ('full' = foto de fundo, 'split' = texto + foto ao lado), `fontes`, `vars` e `css` (as regras do modelo começam com `.t-novo`).
3. Inclua `<script src="js/modelos/novo.js"></script>` no `index.html`, antes de `gerador.js`.
4. Adicione o cartão do modelo no passo "Estilo" do `index.html` (`value="novo"`).

## O que o cliente baixa

- `empresa-squarespace.html` — código para colar em Página em branco > Bloco Código ("Exibir fonte" desligado)
- `empresa-previa.html` — prévia completa, abre no navegador
- `fotos/` — imagens com os mesmos nomes dos marcadores `COLE-AQUI-URL-...`
- `LEIA-ME.txt` — passo a passo de publicação no Squarespace

## Publicação

Cada commit na `main` do repositório ligado ao serviço do Railway publica a nova versão em 1 a 2 minutos.

## Contatos de quem entra

O portão de entrada pede nome, e-mail e WhatsApp antes de abrir a ferramenta.
Esses contatos são enviados para o painel da DKC (`CONFIG.leadWebhook` em
`js/config.js`) e aparecem em **Administração > Seu Site Grátis**.

Com `leadWebhook` vazio, o contato fica só no navegador da própria pessoa e
**não chega a lugar nenhum** — foi assim até 30/09/2026.

O link de cada afiliado leva `?af=SUBID1`. O valor é guardado no navegador e
mandado junto com o contato, para o painel saber quem trouxe a pessoa. Quem
trouxe é decidido na primeira vez: voltar por outro link não muda o dono.
