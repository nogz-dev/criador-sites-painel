/* Interface do Criador de Sites: passos, prévia, fotos, cores, rascunho e download */
(function(){
const f=document.getElementById('f');
const frame=document.getElementById('frame');
const PRESETS=['#1F5EFF','#0E9F6E','#E4572E','#7C3AED','#C8102E','#0F766E','#D4A017','#111111'];
const imgs={logo:null,hero:null,gal:[]};
const LS='dk-criador-sites-v2';
const STEPS=[{l:'Empresa',a:'#inicio'},{l:'Textos',a:'#sobre'},{l:'Contato',a:'#contato'},{l:'Fotos',a:'#inicio'},{l:'Estilo',a:'#inicio'},{l:'Baixar',a:'#inicio'}];
let cur=0,maxReached=0;
function data(){const o={};new FormData(f).forEach((v,k)=>{if(typeof v==='string')o[k]=v});o.credito=f.credito.checked;return o}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('on');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('on'),3000)}

/* ---------- prévia ---------- */
let tm,pendingAnchor=null;
function render(anchor){
  if(anchor)pendingAnchor=anchor;
  clearTimeout(tm);
  tm=setTimeout(()=>{
    let y=0;try{y=frame.contentWindow.scrollY}catch(e){}
    const a=pendingAnchor;pendingAnchor=null;
    frame.onload=()=>{try{
      const w=frame.contentWindow;
      if(a){const el=w.document.querySelector(a)||w.document.querySelector('#inicio');if(el)w.scrollTo({top:a==='#inicio'?0:el.offsetTop-70,behavior:'instant'})}
      else w.scrollTo(0,y);
    }catch(e){}};
    const up=document.getElementById('urlPill');if(up){const nm=data().nome.trim();up.textContent=(nm?slug(nm):'seusite')+'.com.br'}
    frame.srcdoc=buildSite(data(),'full',imgs);
    save();
  },200);
}

/* ---------- passos ---------- */
const stepsEl=document.getElementById('steps');
STEPS.forEach((s,i)=>{const li=document.createElement('li');li.innerHTML=`<button type="button" title="${s.l}"><b>${i+1}</b><span>${s.l}</span></button>`;li.querySelector('button').onclick=()=>go(i);stepsEl.appendChild(li)});
function validate(i){
  if(i===0){const box=document.getElementById('fNome');const ok=!!f.nome.value.trim();box.classList.toggle('bad',!ok);if(!ok){f.nome.focus();return false}}
  return true;
}
function go(n){
  if(n>cur){for(let i=cur;i<n;i++){if(!validate(i)){if(cur!==i)show(i);return}}}
  show(n);
}
function show(n){
  cur=n;maxReached=Math.max(maxReached,n);
  document.querySelectorAll('.step').forEach(s=>s.classList.toggle('on',+s.dataset.step===n));
  [...stepsEl.children].forEach((li,i)=>{li.classList.toggle('on',i===n);li.classList.toggle('done',i<n||(i<=maxReached&&i!==n));li.querySelector('b').textContent=(i!==n&&i<=maxReached&&i<5&&stepDone(i))?'✓':i+1});
  const sc=document.getElementById('stepCount');if(sc)sc.textContent='Passo '+(n+1)+' de '+STEPS.length;
  stepsEl.children[n].scrollIntoView({block:'nearest',inline:'center'});
  document.getElementById('prog').style.width=(n/(STEPS.length-1)*100)+'%';
  const back=document.getElementById('bBack'),next=document.getElementById('bNext');
  back.style.display=n===0?'none':'';
  next.style.display=n===STEPS.length-1?'none':'';
  if(n<STEPS.length-1)next.textContent=n===STEPS.length-2?'Finalizar':'Próximo: '+STEPS[n+1].l;
  f.scrollTop=0;
  if(n===STEPS.length-1)drawCheck();
  render(STEPS[n].a);
}
function stepDone(i){const d=data();return [!!d.nome.trim(),!!(d.sobre.trim()||d.servicos.trim()),!!(d.whatsapp.trim()||d.telefone.trim()||d.email.trim()),!!(imgs.logo||imgs.hero||imgs.gal.length),true][i]}
document.getElementById('bNext').onclick=()=>go(cur+1);
document.getElementById('bBack').onclick=()=>show(Math.max(0,cur-1));
f.nome.addEventListener('input',()=>{if(f.nome.value.trim())document.getElementById('fNome').classList.remove('bad')});

/* ---------- conferência final ---------- */
function drawCheck(){
  const d=data();const n=s=>(s||'').split('\n').filter(l=>l.trim()).length;
  const items=[
    [!!d.nome.trim(),'Nome da empresa',0],
    [!!d.slogan.trim(),'Frase principal',0],
    [!!d.sobre.trim(),'Texto "Quem somos"',1],
    [n(d.servicos)>0,n(d.servicos)?`${n(d.servicos)} serviço${n(d.servicos)>1?'s':''}`:'Serviços ou produtos',1],
    [n(d.depoimentos)>0,n(d.depoimentos)?`${n(d.depoimentos)} depoimento${n(d.depoimentos)>1?'s':''}`:'Depoimentos de clientes',1],
    [!!digits(d.whatsapp),'WhatsApp',2],
    [!!d.endereco.trim(),'Endereço',2],
    [!!imgs.logo,'Logo',3],
    [!!imgs.hero,'Foto principal',3],
    [imgs.gal.length>0,imgs.gal.length?`${imgs.gal.length} foto${imgs.gal.length>1?'s':''} na galeria`:'Fotos da galeria',3]
  ];
  const ul=document.getElementById('check');ul.innerHTML='';
  items.forEach(([ok,label,step])=>{const li=document.createElement('li');li.className=ok?'y':'n';li.innerHTML=`<i>${ok?'✓':''}</i><span>${esc(label)}</span>${ok?'':'<button type="button">Adicionar</button>'}`;if(!ok)li.querySelector('button').onclick=()=>show(step);ul.appendChild(li)});
}

/* ---------- rascunho ---------- */
function save(){
  try{localStorage.setItem(LS,JSON.stringify({d:data(),step:cur,max:maxReached}))}catch(e){}
  try{localStorage.setItem(LS+'-img',JSON.stringify(imgs))}catch(e){try{localStorage.removeItem(LS+'-img')}catch(_){}}
}
function load(){
  try{const raw=localStorage.getItem(LS);if(!raw)return false;const o=JSON.parse(raw);fill(o.d||{});maxReached=o.max||0;cur=Math.min(o.step||0,5);
    try{const im=JSON.parse(localStorage.getItem(LS+'-img')||'null');if(im){imgs.logo=im.logo||null;imgs.hero=im.hero||null;imgs.gal=Array.isArray(im.gal)?im.gal:[]}}catch(e){}
    return true}catch(e){return false}
}
function fill(d){
  if(d.template==='classico')d.template='elegante';
  [...f.elements].forEach(el=>{
    if(!el.name||el.type==='file')return;
    if(el.type==='radio'){if(d[el.name])el.checked=(d[el.name]===el.value)}
    else if(el.type==='checkbox')el.checked=!!d[el.name];
    else if(d[el.name]!==undefined)el.value=d[el.name];
  });
  syncSwatches();
}

/* ---------- cores ---------- */
const colorInput=f.cor;
function makeSw(c,box){const b=document.createElement('button');b.type='button';b.className='sw';b.style.background=c;b.dataset.c=c;b.setAttribute('aria-label','Usar a cor '+c);b.onclick=()=>{colorInput.value=c;syncSwatches();render()};box.appendChild(b)}
PRESETS.forEach(c=>makeSw(c,document.getElementById('colors')));
function syncSwatches(){document.querySelectorAll('.sw').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.c.toLowerCase()===colorInput.value.toLowerCase())))}
colorInput.addEventListener('input',syncSwatches);
function logoColors(src){
  return new Promise(res=>{const im=new Image();im.onload=()=>{
    const c=document.createElement('canvas');const s=Math.min(1,80/Math.max(im.width,im.height));c.width=Math.max(1,Math.round(im.width*s));c.height=Math.max(1,Math.round(im.height*s));
    const x=c.getContext('2d');x.drawImage(im,0,0,c.width,c.height);let px;try{px=x.getImageData(0,0,c.width,c.height).data}catch(e){return res([])}
    const bins={};
    for(let i=0;i<px.length;i+=4){const [r,g,b,a]=[px[i],px[i+1],px[i+2],px[i+3]];if(a<200)continue;const mx=Math.max(r,g,b),mn=Math.min(r,g,b);if(mx>240&&mn>225)continue;if(mx<25)continue;const sat=mx?(mx-mn)/mx:0;if(sat<.22&&mx>60)continue;
      const k=(r>>5)+','+(g>>5)+','+(b>>5);const o=bins[k]||(bins[k]={n:0,r:0,g:0,b:0});o.n++;o.r+=r;o.g+=g;o.b+=b}
    const top=Object.values(bins).sort((a,b)=>b.n-a.n).slice(0,4).map(o=>'#'+[o.r,o.g,o.b].map(v=>Math.round(v/o.n).toString(16).padStart(2,'0')).join('').toUpperCase());
    res(top)};im.onerror=()=>res([]);im.src=src});
}
async function refreshLogoColors(autoPick){
  const box=document.getElementById('logoColors');box.innerHTML='';
  const cols=imgs.logo?await logoColors(imgs.logo):[];
  document.getElementById('logoColorsBox').hidden=!cols.length;
  cols.forEach(c=>makeSw(c,box));
  if(autoPick&&cols.length){colorInput.value=cols[0];toast('Usamos a cor da sua logo no site. Você pode trocar no passo Estilo.');render()}
  syncSwatches();
}

/* ---------- imagens ---------- */
function readImg(file,max,keepPng){
  return new Promise((res,rej)=>{
    const r=new FileReader();r.onerror=rej;
    r.onload=()=>{const im=new Image();im.onerror=rej;im.onload=()=>{
      const s=Math.min(1,max/Math.max(im.width,im.height));
      const c=document.createElement('canvas');c.width=Math.round(im.width*s);c.height=Math.round(im.height*s);
      const x=c.getContext('2d');
      if(!keepPng){x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height)}
      x.drawImage(im,0,0,c.width,c.height);
      res(keepPng?c.toDataURL('image/png'):c.toDataURL('image/jpeg',.8));
    };im.src=r.result};
    r.readAsDataURL(file);
  });
}
function drawThumbs(){
  const mk=(box,list,onDel)=>{box.innerHTML='';list.forEach((src,i)=>{const fg=document.createElement('figure');fg.innerHTML=`<img src="${src}" alt=""><button type="button" aria-label="Remover imagem">×</button>`;fg.querySelector('button').onclick=()=>{onDel(i);drawThumbs();render()};box.appendChild(fg)})};
  mk(document.getElementById('tLogo'),imgs.logo?[imgs.logo]:[],()=>{imgs.logo=null;refreshLogoColors(false)});
  mk(document.getElementById('tHero'),imgs.hero?[imgs.hero]:[],()=>imgs.hero=null);
  mk(document.getElementById('tGal'),imgs.gal,i=>imgs.gal.splice(i,1));
}
const bad=()=>toast('Não foi possível abrir essa imagem. Tente uma foto em JPG ou PNG.');
document.getElementById('upLogo').onchange=async e=>{const fl=e.target.files[0];e.target.value='';if(!fl)return;try{imgs.logo=await readImg(fl,480,true);drawThumbs();render();refreshLogoColors(true)}catch(_){bad()}};
document.getElementById('upHero').onchange=async e=>{const fl=e.target.files[0];e.target.value='';if(!fl)return;try{imgs.hero=await readImg(fl,1600,false);drawThumbs();render('#inicio')}catch(_){bad()}};
document.getElementById('upGal').onchange=async e=>{
  const all=[...e.target.files];e.target.value='';
  const files=all.slice(0,6-imgs.gal.length);
  if(all.length>files.length)toast('A galeria aceita até 6 fotos. Remova alguma para adicionar outras.');
  for(const fl of files){try{imgs.gal.push(await readImg(fl,1100,false))}catch(_){bad()}}
  drawThumbs();render(imgs.gal.length>1?'#galeria':'#sobre');
};

/* ---------- exemplo / recomeçar / boas-vindas ---------- */
const welcome=document.getElementById('welcome');
function example(){
  fill({nome:'Clínica Sorriso da Barra',segmento:'Odontologia',cidade:'Salvador',slogan:'Seu sorriso cuidado por quem entende',apoio:'Tratamentos completos com hora marcada, equipe especializada e atendimento sem pressa.',
  sobre:'Há 12 anos cuidamos dos sorrisos da Barra e região. Nossa equipe reúne especialistas em clínica geral, ortodontia e implantes.\n\nAtendemos com hora marcada, em consultórios equipados e com planos de pagamento facilitados.',
  tituloServicos:'Nossos serviços',servicos:'Limpeza e prevenção | Remoção de tártaro, polimento e avaliação completa\nClareamento | Resultado visível em até 3 sessões\nOrtodontia | Aparelho fixo e alinhadores transparentes\nImplantes | Planejamento digital e acompanhamento',
  numeros:'12 anos | cuidando de sorrisos\n+8 mil | pacientes atendidos\n4,9 | de nota no Google',
  depoimentos:'Fui atendida no horário, sem espera, e o resultado do clareamento ficou lindo. | Mariana Souza\nEquipe atenciosa do início ao fim. Meu filho perdeu o medo de dentista aqui. | Carlos Ribeiro\nExplicaram cada etapa do implante e os valores sem surpresa. Recomendo. | Ana Paula Lima',
  whatsapp:'(71) 99999-0000',telefone:'(71) 3333-0000',email:'contato@sorrisodabarra.com.br',instagram:'@sorrisodabarra',endereco:'Av. Oceânica, 100, Barra, Salvador - BA',horarios:'Seg a Sex: 8h às 19h\nSábado: 8h às 12h',
  template:'moderno',cor:'#0E9F6E',credito:false});
  maxReached=5;show(5);
  toast('Exemplo carregado. Use "Recomeçar" para preencher com os dados da sua empresa.');
}
document.getElementById('wStart').onclick=()=>{welcome.close();show(0);setTimeout(()=>f.nome.focus(),50)};
document.getElementById('wExample').onclick=()=>{welcome.close();example()};
document.getElementById('bHelp').onclick=()=>welcome.showModal();
document.getElementById('bClear').onclick=()=>{
  if(!confirm('Apagar tudo o que foi preenchido e começar de novo?'))return;
  f.reset();imgs.logo=null;imgs.hero=null;imgs.gal=[];maxReached=0;drawThumbs();refreshLogoColors(false);syncSwatches();show(0);
};

/* ---------- baixar ---------- */
let downloads=null;
(async()=>{try{if(window.claude&&window.claude.use)downloads=await window.claude.use('downloads')}catch(e){}})();
async function copy(text){
  try{await navigator.clipboard.writeText(text);return true}catch(e){}
  try{const ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();const ok=document.execCommand('copy');ta.remove();return ok}catch(e){return false}
}
async function saveFile(name,data,okMsg){
  if(downloads){
    try{await downloads.save({filename:name,data});toast(okMsg);return true}
    catch(e){if(e&&e.code==='declined')return true;if(e&&e.code==='rate_limited'){toast('Já existe um download aberto. Aguarde um instante.');return true}}
  }
  try{const blob=data instanceof Blob?data:new Blob([data],{type:'text/html'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000);
    toast('Se o download não começar, use "Ver ou copiar o código".');return true}catch(e){return false}
}
function b64(dataUrl){return dataUrl.split(',')[1]}
function readme(d){
  const sq=buildSite(d,'sqs',imgs);const nome=d.nome.trim();
  const fotos=[imgs.logo&&'- fotos/logo.png  ->  troque COLE-AQUI-URL-logo.png',imgs.hero&&'- fotos/foto-principal.jpg  ->  troque COLE-AQUI-URL-foto-principal.jpg',...imgs.gal.map((_,i)=>`- fotos/galeria-${i+1}.jpg  ->  troque COLE-AQUI-URL-galeria-${i+1}.jpg`)].filter(Boolean);
  const seg=(d.segmento||'').trim(),cid=(d.cidade||'').trim();
  const L=getLead();
  return `SITE: ${nome}
Gerado pelo Seu Site Grátis (criador de sites)
${L?`Criado por: ${L.nome} | ${L.email} | ${maskTel(L.tel)}
`:''}
ARQUIVOS
- ${slug(nome)}-squarespace.html  ->  código para colar no Squarespace
- ${slug(nome)}-previa.html  ->  prévia completa, abre com dois cliques no navegador
${fotos.length?'- pasta fotos/  ->  imagens do site\n':''}
COMO PUBLICAR NO SQUARESPACE
1. Crie uma página em branco no site.
${fotos.length?`2. Envie as fotos da pasta "fotos" para o Squarespace e copie a URL de cada uma.
3. Abra o arquivo "${slug(nome)}-squarespace.html" num editor de texto e troque cada marcador pela URL da foto correspondente:
${fotos.map(f=>'   '+f).join('\n')}
4.`:'2.'} Na página em branco: Adicionar bloco > Código > desligue "Exibir fonte" > cole TODO o conteúdo do arquivo.
${fotos.length?'5.':'3.'} Em Configurações da página > SEO, preencha:
   Título: ${nome}${seg?' | '+seg+(cid?' em '+cid:''):''}
   Descrição: ${(d.slogan||[seg,cid].filter(Boolean).join(' em ')||nome).trim()}
${fotos.length?'6.':'4.'} Salve e confira no computador e no celular.

OBSERVAÇÕES
- O código já esconde o cabeçalho e o rodapé padrão do template nesta página e ocupa a largura toda.
- O bloco de código com scripts só funciona nos planos do Squarespace que permitem código personalizado.
`;
}
document.getElementById('bDownload').onclick=async()=>{
  const d=data();
  if(!d.nome.trim()){show(0);validate(0);return}
  const base=slug(d.nome);
  if(!window.JSZip){await saveFile(base+'-squarespace.html',buildSite(d,'sqs',imgs),'Código para Squarespace salvo.');return}
  try{
    const z=new JSZip();
    z.file(base+'-squarespace.html',buildSite(d,'sqs',imgs));
    z.file(base+'-previa.html',buildSite(d,'full',imgs));
    z.file('LEIA-ME.txt',readme(d));
    if(imgs.logo)z.file('fotos/logo.png',b64(imgs.logo),{base64:true});
    if(imgs.hero)z.file('fotos/foto-principal.jpg',b64(imgs.hero),{base64:true});
    imgs.gal.forEach((g,i)=>z.file(`fotos/galeria-${i+1}.jpg`,b64(g),{base64:true}));
    const blob=await z.generateAsync({type:'blob'});
    await saveFile(base+'.zip',blob,'Pronto! Seu site foi salvo como '+base+'.zip');
  }catch(e){openCode('sqs')}
};
document.getElementById('bPreview').onclick=async()=>{
  const d=data();if(!d.nome.trim()){show(0);validate(0);return}
  await saveFile(slug(d.nome)+'-previa.html',buildSite(d,'full',imgs),'Prévia salva. Dê dois cliques no arquivo para abrir.');
};
const dlg=document.getElementById('dlg');let codeMode='sqs';
const hints={sqs:'Formato para colar no bloco de código do Squarespace. As imagens aparecem como COLE-AQUI-URL-...: troque pelas URLs das fotos enviadas ao Squarespace.',
  full:'Documento HTML completo, com as fotos dentro do arquivo. Serve para visualizar no computador.'};
function openCode(m){codeMode=m||codeMode;updateCode();if(!dlg.open)dlg.showModal()}
function updateCode(){
  document.getElementById('code').value=buildSite(data(),codeMode,imgs);
  document.getElementById('dlgHint').textContent=hints[codeMode];
  dlg.querySelectorAll('.seg button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.m===codeMode)));
}
dlg.querySelectorAll('.seg button').forEach(b=>b.onclick=()=>{codeMode=b.dataset.m;updateCode()});
document.getElementById('bCode').onclick=()=>openCode('sqs');
document.getElementById('dlgClose').onclick=()=>dlg.close();
document.getElementById('bCopy').onclick=async()=>{
  const ta=document.getElementById('code');
  if(await copy(ta.value))toast('Código copiado.');else{ta.focus();ta.select();toast('Código selecionado. Use Ctrl+C para copiar.')}
};

/* ---------- prévia: dispositivo e celular ---------- */
document.querySelectorAll('.dev button').forEach(b=>b.onclick=()=>{
  document.getElementById('stage').classList.toggle('mobile',b.dataset.d==='mobile');
  document.querySelectorAll('.dev button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
});
document.getElementById('bPv').onclick=()=>document.body.classList.add('show-prev');
document.getElementById('bPvClose').onclick=()=>document.body.classList.remove('show-prev');

f.addEventListener('input',()=>render());
f.addEventListener('change',e=>{if(e.target.type!=='file')render()});

/* ---------- início ---------- */
/* ---------- cadastro antes de começar ---------- */
const LEAD_KEY='dk-criador-lead';
function getLead(){try{return JSON.parse(localStorage.getItem(LEAD_KEY)||'null')}catch(e){return null}}
/* quem indicou: ?af=SUBID1 na URL. Guardado no navegador para o contato continuar
   amarrado ao afiliado mesmo que a pessoa feche e volte depois por outro caminho. */
const REF_KEY='csp-ref';
function quemIndicou(){
  try{
    const u=new URLSearchParams(location.search).get('af')||'';
    const limpo=u.trim().replace(/[^A-Za-z0-9._-]/g,'').slice(0,60);
    if(limpo){localStorage.setItem(REF_KEY,limpo);return limpo}
    return localStorage.getItem(REF_KEY)||'';
  }catch(e){return ''}
}
try{quemIndicou()}catch(e){}
function maskTel(v){const d=digits(v).replace(/^55(?=\d{10,11}$)/,'').slice(0,11);if(d.length<=2)return d.length?'('+d:'';if(d.length<=6)return`(${d.slice(0,2)}) ${d.slice(2)}`;if(d.length<=10)return`(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`;return`(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`}
function enviarLead(l){
  if(!CONFIG.leadWebhook)return;
  const body=JSON.stringify({data:{name:l.nome,email:l.email,phone:'55'+l.tel,ref:quemIndicou(),origem:location.href.slice(0,180)}});
  try{fetch(CONFIG.leadWebhook,{method:'POST',mode:'no-cors',keepalive:true,headers:{'Content-Type':'text/plain'},body})}catch(e){}
}
const gate=document.getElementById('gate'),gf=document.getElementById('gateForm'),appEl=document.querySelector('.app');
gf.ltel.addEventListener('input',()=>{gf.ltel.value=maskTel(gf.ltel.value)});
gf.addEventListener('input',e=>{const box=e.target.closest('.f,.chk');if(box)box.classList.remove('bad');if(e.target.name==='lok')document.getElementById('gOkErr').style.display='none'});
gf.addEventListener('submit',e=>{
  e.preventDefault();
  const nome=gf.lnome.value.trim(),email=gf.lemail.value.trim(),tel=digits(gf.ltel.value).replace(/^55(?=\d{10,11}$)/,'');
  const okNome=nome.length>=2,okEmail=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email),okTel=/^[1-9]{2}9?\d{8}$/.test(tel),ok=gf.lok.checked;
  document.getElementById('gNome').classList.toggle('bad',!okNome);
  document.getElementById('gEmail').classList.toggle('bad',!okEmail);
  document.getElementById('gTel').classList.toggle('bad',!okTel);
  document.getElementById('gOkErr').style.display=ok?'none':'block';
  if(!(okNome&&okEmail&&okTel&&ok)){const first=gf.querySelector('.bad input')||(ok?null:gf.lok);if(first)first.focus();return}
  const lead={nome,email,tel,em:new Date().toISOString()};
  try{localStorage.setItem(LEAD_KEY,JSON.stringify(lead))}catch(e){}
  enviarLead(lead);
  gate.hidden=true;appEl.inert=false;
  if(!had)welcome.showModal();
});

const had=load();
drawThumbs();refreshLogoColors(false);syncSwatches();
show(had?cur:0);
/* ---------- página inicial > cadastro > criador ---------- */
const lp=document.getElementById('lp');
function abrirCriador(){
  lp.hidden=true;
  try{history.replaceState(null,'','#criar')}catch(e){}
  if(!getLead()){gate.hidden=false;appEl.inert=true;setTimeout(()=>gf.lnome.focus(),50)}
  else{appEl.inert=false;if(!had&&!welcome.open)welcome.showModal()}
}
window.abrirCriador=abrirCriador;
document.getElementById('bHome').onclick=()=>{lp.hidden=false;appEl.inert=true;lp.scrollTop=0;try{history.replaceState(null,'',location.pathname)}catch(e){}};
if(location.hash==='#criar')abrirCriador();
else{appEl.inert=true;if(getLead()||had)lp.querySelectorAll('[data-cta]').forEach(b=>{if(b.textContent.includes('Criar meu site'))b.textContent='Continuar meu site'})}
})();
