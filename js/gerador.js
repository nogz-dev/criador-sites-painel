/*
  Gerador do site: monta o HTML final a partir dos dados do formulário.
  Modos: 'full' = arquivo completo com fotos embutidas (prévia)
         'sqs'  = formato Code Block do Squarespace, com COLE-AQUI-URL-... no lugar das fotos
*/
const BASE_CSS=`
.ds-site{font-family:var(--fb);color:var(--ink);background:var(--bg);line-height:1.65;font-size:17px;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;overflow-x:clip;text-align:left}
.ds-site *,.ds-site *::before,.ds-site *::after{box-sizing:border-box;margin:0;padding:0}
.ds-site img{max-width:100%;display:block}
.ds-site a{color:inherit;text-decoration:none}
.ds-site ul{list-style:none}
.ds-site button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}
.ds-site :focus-visible{outline:3px solid var(--p);outline-offset:3px}
.ds-wrap{width:100%;max-width:1200px;margin:0 auto;padding:0 28px}
.ds-top{position:sticky;top:0;z-index:30;height:var(--nh);margin-bottom:calc(var(--nh) * -1);transition:background .3s,box-shadow .3s,color .3s}
.ds-nav{height:var(--nh);display:flex;align-items:center;justify-content:space-between;gap:24px}
.ds-brand{display:flex;align-items:center;font-family:var(--fh);font-size:22px;line-height:1;white-space:nowrap}
.ds-brand img{height:42px;width:auto;max-width:190px;object-fit:contain}
.ds-links{display:flex;gap:32px;font-size:15px;font-weight:500}
.ds-links a{opacity:.8;transition:opacity .2s}.ds-links a:hover{opacity:1}
.ds-nav-r{display:flex;align-items:center;gap:8px}
.ds-burger{display:none;width:44px;height:44px;align-items:center;justify-content:center}
.ds-burger span,.ds-burger span::before,.ds-burger span::after{display:block;width:22px;height:2px;background:currentColor;position:relative}
.ds-burger span::before,.ds-burger span::after{content:"";position:absolute;left:0}
.ds-burger span::before{top:-7px}.ds-burger span::after{top:7px}
.ds-mnav{display:none}
.ds-top.ds-open{background:var(--bg);color:var(--ink)}
.ds-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:var(--p);color:var(--pc)!important;padding:16px 28px;border-radius:var(--rb);font-weight:600;font-size:16px;line-height:1;border:1.5px solid var(--p);transition:transform .2s,box-shadow .2s;white-space:nowrap;font-family:var(--fb)}
.ds-btn:hover{transform:translateY(-2px);box-shadow:0 12px 28px -10px color-mix(in srgb,var(--p) 70%,transparent)}
.ds-btn svg{width:18px;height:18px;fill:currentColor;flex-shrink:0}
.ds-btn-sm{padding:12px 20px;font-size:14px}
.ds-btn-o{background:transparent;color:inherit!important;border-color:currentColor}
.ds-btn-o:hover{box-shadow:none}
.ds-hero{position:relative;overflow:hidden}
.ds-hero h1{font-family:var(--fh);line-height:1.02}
.ds-kicker{display:inline-flex;align-items:center;gap:12px;font-size:14px;font-weight:600;margin-bottom:24px}
.ds-lead{font-size:clamp(18px,1.8vw,21px);max-width:32em;margin-top:24px;opacity:.86}
.ds-ctas{display:flex;flex-wrap:wrap;gap:12px;margin-top:38px}
.ds-hero-txt>*{animation:dsUp .9s cubic-bezier(.2,.7,.2,1) both}
.ds-hero-txt>*:nth-child(2){animation-delay:.08s}.ds-hero-txt>*:nth-child(3){animation-delay:.16s}.ds-hero-txt>*:nth-child(4){animation-delay:.24s}.ds-hero-txt>*:nth-child(5){animation-delay:.32s}
.ds-hero-media{animation:dsIn 1.1s .15s cubic-bezier(.2,.7,.2,1) both}
@keyframes dsUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@keyframes dsIn{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:none}}
@keyframes dsZoom{from{transform:scale(1.08)}to{transform:scale(1)}}
.ds-sec{padding:clamp(76px,10vw,136px) 0}
.ds-head{margin-bottom:clamp(40px,5vw,64px);max-width:760px}
.ds-h2{font-family:var(--fh);font-size:clamp(34px,4.6vw,58px);line-height:1.06;letter-spacing:var(--ls)}
.ds-num strong{display:block;font-family:var(--fh);line-height:1}
.ds-num span{display:block;font-size:14px;color:var(--muted);margin-top:10px;line-height:1.4}
.ds-about{display:grid;gap:clamp(40px,6vw,96px);align-items:center}
.ds-about.has-img{grid-template-columns:1fr 1.1fr}
.ds-about-txt p{color:var(--muted);margin-top:18px;max-width:36em}
.ds-about-txt p.ds-big{font-size:clamp(19px,1.9vw,23px);color:var(--ink);line-height:1.55;margin-top:28px}
.ds-about-media{position:relative;isolation:isolate}
.ds-about-media img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:var(--r)}
.ds-svc-ic{display:none}
.ds-hero-media{position:relative;isolation:isolate}
.ds-hero-media>img,.ds-hero-ph{width:100%;display:block;object-fit:cover}
.ds-hero-ph{display:flex;align-items:center;justify-content:center;background:var(--p);color:var(--pc);font-family:var(--fh);font-size:clamp(120px,16vw,240px);line-height:1;aspect-ratio:4/5;overflow:hidden}
.ds-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--p);flex-shrink:0}
.ds-hero-nums{display:flex;flex-wrap:wrap;gap:36px;margin-top:44px}
.ds-float{display:none}
.ds-gal{display:grid;grid-template-columns:repeat(var(--gc,4),1fr);grid-auto-rows:clamp(150px,18vw,250px);gap:12px}
.ds-gal img{width:100%;height:100%;object-fit:cover;border-radius:var(--r)}
.ds-gal.big img:first-child{grid-column:span 2;grid-row:span 2}
.ds-gal.g1{grid-auto-rows:clamp(240px,40vw,520px)}
.ds-gal.g2{grid-auto-rows:clamp(220px,30vw,420px)}
.ds-quotes{display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:20px}
.ds-q{padding:36px;border-radius:var(--r);display:flex;flex-direction:column;gap:24px;justify-content:space-between}
.ds-q blockquote{font-size:18px;line-height:1.6}
.ds-q figcaption{display:flex;align-items:center;gap:12px;font-weight:600;font-size:15px}
.ds-av{width:44px;height:44px;border-radius:50%;background:var(--p);color:var(--pc);display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0}
.ds-stars{display:none;color:#F5B301;letter-spacing:3px;font-size:16px}
.ds-cta{text-align:center}
.ds-cta-panel{position:relative;overflow:hidden}
.ds-cta-panel>*{position:relative;z-index:1}
.ds-cta h2{font-family:var(--fh);font-size:clamp(38px,5.4vw,72px);line-height:1.02;letter-spacing:var(--ls)}
.ds-cta p{font-size:clamp(17px,1.7vw,20px);max-width:32em;margin:20px auto 36px;opacity:.88}
.ds-cgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
@media (max-width:980px){.ds-cgrid{grid-template-columns:1fr 1fr}}
@media (max-width:600px){.ds-cgrid{grid-template-columns:1fr}}
.ds-ci{padding:30px;border-radius:var(--r);display:flex;flex-direction:column;gap:8px}
.ds-ci svg{width:24px;height:24px;stroke:var(--p);fill:none;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;margin-bottom:10px}
.ds-ci dt{font-size:13px;font-weight:600;color:var(--muted)}
.ds-ci dd{font-size:17px;line-height:1.5;overflow-wrap:anywhere}
.ds-ci dd li+li{margin-top:2px}
.ds-lk{display:inline-block;margin-top:8px;font-weight:600;font-size:15px;border-bottom:1.5px solid currentColor}
.ds-foot{padding:36px 0;font-size:14px}
.ds-foot-in{display:flex;justify-content:space-between;align-items:center;gap:16px 32px;flex-wrap:wrap}
.ds-wa{position:fixed;right:22px;bottom:22px;width:62px;height:62px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 28px -6px rgba(0,0,0,.35);z-index:40;transition:transform .2s}
.ds-wa:hover{transform:scale(1.07)}
.ds-wa svg{width:32px;height:32px;fill:#fff}
.ds-wa::before{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid #25D366;animation:dsPulse 2.4s ease-out infinite}
@keyframes dsPulse{from{transform:scale(1);opacity:.7}to{transform:scale(1.55);opacity:0}}
@media (max-width:860px){
 .ds-links,.ds-nav-r>.ds-btn{display:none}
 .ds-burger{display:inline-flex}
 .ds-top.ds-open{height:auto;box-shadow:0 24px 40px -24px rgba(0,0,0,.35)}
 .ds-top.ds-open .ds-mnav{display:flex;flex-direction:column;padding:4px 28px 28px}
 .ds-mnav a{padding:14px 0;font-size:18px;font-weight:600;border-bottom:1px solid var(--line)}
 .ds-mnav .ds-btn{margin-top:18px;border-bottom:0;font-size:16px}
 .ds-about.has-img{grid-template-columns:1fr}
 .ds-gal{grid-template-columns:1fr 1fr!important}.ds-gal.g1{grid-template-columns:1fr!important}
 .ds-wrap{padding:0 22px}
 .ds-site .ds-nums-in,.ds-site .ds-hero-nums{display:grid!important;grid-auto-flow:column;grid-auto-columns:1fr;grid-template-columns:none!important;gap:10px}
 .ds-site .ds-num{min-width:0!important}
 .ds-site .ds-num strong{font-size:clamp(20px,5.8vw,28px)!important;letter-spacing:-.02em}
 .ds-site .ds-num span{font-size:11.5px!important;letter-spacing:.01em!important;line-height:1.3}
 .ds-sec{padding:64px 0}
 .ds-wa{width:54px;height:54px;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px))}
 .ds-wa svg{width:28px;height:28px}
}
@media (max-width:600px){
 .ds-ctas{flex-direction:column;align-items:stretch}
 .ds-ctas .ds-btn{width:100%}
 .ds-hero h1{overflow-wrap:break-word}
}
@media (prefers-reduced-motion:reduce){.ds-site *,.ds-site *::before{animation:none!important;transition:none!important}}`;

const WA_SVG='<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.7l-.4-.3-3.8 1.2 1.2-3.7-.3-.4c-1.2-1.8-1.9-3.9-1.9-6 0-5.9 4.9-10.7 11-10.7S27 9.9 27 15.8s-4.9 10.6-11 10.6zm6-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.8 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>';
const IC={
  pin:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  wa:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 12a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.2-4.2A8.5 8.5 0 1 1 20.5 12z"/></svg>',
  phone:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  mail:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6 8.5-6"/></svg>',
  ig:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>',
  clock:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  check:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>'
};
function buildSite(d,mode,imgs){
  const SQ=mode==='sqs'||mode==='sqsfotos';
  const U=imgs.urls||{};
  const I=mode==='sqs'?{logo:imgs.logo?(U.logo||'COLE-AQUI-URL-logo.png'):null,hero:imgs.hero?(U.hero||'COLE-AQUI-URL-foto-principal.jpg'):null,gal:imgs.gal.map((_,i)=>(U.gal&&U.gal[i])||'COLE-AQUI-URL-galeria-'+(i+1)+'.jpg')}:imgs;
  let t=d.template==='classico'?'elegante':d.template;
  if(!MODELOS[t])t='moderno';
  const P=/^#[0-9a-f]{6}$/i.test(d.cor)?d.cor:'#1F5EFF';
  const PL=lum(P)<.12?`color-mix(in srgb,${P} 45%,#FFFFFF)`:P;
  const nome=(d.nome||'').trim()||'Nome da empresa';
  const wa=waLink(d.whatsapp,d.nome);
  const svcs=splitLines(d.servicos);
  const nums=splitLines(d.numeros).slice(0,4).map(separarNumero);
  const quotes=splitLines(d.depoimentos).slice(0,6);
  const about=(d.sobre||'').trim().split(/\n\s*\n/).map(p=>p.trim()).filter(Boolean);
  const hors=(d.horarios||'').split('\n').map(l=>l.trim()).filter(Boolean);
  const ig=(d.instagram||'').trim().replace(/^@/,'').replace(/^https?:\/\/(www\.)?instagram\.com\//,'').replace(/[/?].*$/,'');
  const tel=digits(d.telefone);
  const email=(d.email||'').trim();
  const seg=(d.segmento||'').trim(), cid=(d.cidade||'').trim();
  const segLine=[seg,cid].filter(Boolean).join(' em ');
  const svcTitle=(d.tituloServicos||'').trim()||'Nossos serviços';
  const aboutImg=I.gal[0]||null;
  const gal=I.gal.slice(1);
  const hasContact=wa||tel||email||ig||d.endereco||hors.length;
  const M=MODELOS[t];const isImp=!!M.impacto;const split=M.hero==='split';
  const headline=(!isImp&&d.slogan)?d.slogan.trim():nome;
  const kicker=isImp?segLine:(d.slogan?[nome,segLine].filter(Boolean).join(', '):segLine);
  const lead=(d.apoio||'').trim()||(isImp?(d.slogan||'').trim():'');
  const heroImg=I.hero;
  const links=[];
  if(about.length)links.push(['#sobre','Sobre']);
  if(svcs.length)links.push(['#servicos',svcTitle.replace(/^(nossos|nossas)\s+/i,'').replace(/^./,c=>c.toUpperCase())]);
  if(gal.length)links.push(['#galeria','Galeria']);
  if(quotes.length)links.push(['#depoimentos','Depoimentos']);
  if(hasContact)links.push(['#contato','Contato']);
  const waBtn=(label,cls='')=>`<a class="ds-btn ${cls}" href="${wa}" target="_blank" rel="noopener">${WA_SVG}${label}</a>`;
  const ext=' target="_blank" rel="noopener"';

  let h='';
  /* topo */
  h+=`<header class="ds-top"><div class="ds-wrap ds-nav"><a class="ds-brand" href="#inicio">${I.logo?`<img src="${I.logo}" alt="${esc(nome)}">`:esc(nome)}</a>`;
  if(links.length)h+=`<nav class="ds-links" aria-label="Menu">${links.map(l=>`<a href="${l[0]}">${esc(l[1])}</a>`).join('')}</nav>`;
  h+=`<div class="ds-nav-r">${wa?waBtn('Fale conosco','ds-btn-sm'):''}${links.length||wa?`<button class="ds-burger" type="button" aria-label="Abrir menu" onclick="this.closest('.ds-top').classList.toggle('ds-open')"><span></span></button>`:''}</div></div>`;
  h+=`<div class="ds-mnav">${links.map(l=>`<a href="${l[0]}">${esc(l[1])}</a>`).join('')}${wa?waBtn('Falar no WhatsApp'):''}</div></header>`;

  /* hero */
  const ctas=[];
  if(wa)ctas.push(waBtn(isImp?'Fale com a gente':'Falar no WhatsApp'));
  else if(hasContact)ctas.push(`<a class="ds-btn" href="#contato">Entrar em contato</a>`);
  if(svcs.length)ctas.push(`<a class="ds-btn ds-btn-o" href="#servicos">Ver ${esc(svcTitle.replace(/^(nossos|nossas)\s+/i,'').toLowerCase())}</a>`);
  h+=`<section class="ds-hero ${heroImg?'has-img':'no-img'}" id="inicio">`;
  if(!split&&heroImg)h+=`<div class="ds-hero-bg"><img src="${heroImg}" alt=""></div>`;
  if(isImp&&!heroImg)h+=`<div class="ds-ghost" aria-hidden="true">${esc(nome)}</div>`;
  h+=`<div class="ds-wrap ds-hero-in"><div class="ds-hero-txt">`;
  if(kicker)h+=`<p class="ds-kicker">${split?'<span class="ds-dot"></span>':''}${esc(kicker)}</p>`;
  h+=`<h1>${esc(headline)}</h1>`;
  if(lead)h+=`<p class="ds-lead">${esc(lead)}</p>`;
  if(ctas.length)h+=`<div class="ds-ctas">${ctas.join('')}</div>`;
  if(split&&nums.length)h+=`<div class="ds-hero-nums">${nums.map(n=>`<div class="ds-num"><strong>${esc(n.a)}</strong><span>${esc(n.b)}</span></div>`).join('')}</div>`;
  h+=`</div>`;
  if(split){
    h+=`<div class="ds-hero-media">${heroImg?`<img src="${heroImg}" alt="${esc(nome)}">`:`<div class="ds-hero-ph" aria-hidden="true">${esc(nome.charAt(0).toUpperCase())}</div>`}`;
    if(wa&&M.selo)h+=`<div class="ds-float"><span class="ds-live"></span><div><b>Atendimento pelo WhatsApp</b><small>Resposta rápida em horário comercial</small></div></div>`;
    h+=`</div>`;
  }
  h+=`</div></section>`;

  /* faixa de serviços (impacto) */
  if(isImp&&svcs.length){const items=svcs.map(s=>`<span>${esc(s.a)}</span>`).join('');let rep=items;while(rep.split('<span>').length-1<8)rep+=items;h+=`<div class="ds-marq" aria-hidden="true"><div class="ds-marq-in">${rep}${rep}</div></div>`}

  /* números */
  if(!split&&nums.length)h+=`<section class="ds-nums"><div class="ds-wrap"><div class="ds-nums-in">${nums.map(n=>`<div class="ds-num"><strong>${esc(n.a)}</strong><span>${esc(n.b)}</span></div>`).join('')}</div></div></section>`;

  /* sobre */
  if(about.length){
    h+=`<section class="ds-sec ds-about-sec" id="sobre"><div class="ds-wrap ds-about${aboutImg?' has-img':''}">`;
    if(aboutImg)h+=`<div class="ds-about-media"><img src="${aboutImg}" alt="${esc(nome)}" loading="lazy"></div>`;
    h+=`<div class="ds-about-txt"><h2 class="ds-h2">Quem somos</h2>${about.map((p,i)=>`<p${i===0?' class="ds-big"':''}>${esc(p).replace(/\n/g,'<br>')}</p>`).join('')}</div></div></section>`;
  }

  /* serviços */
  if(svcs.length){
    const n=svcs.length;
    const span=i=>{if(!M.bento)return'';if(n===1)return' s3';if(n%3===2&&i===0)return' s2';if(n%3===1&&(i===0||i===n-1))return' s2';return''};
    h+=`<section class="ds-sec ds-svc-sec" id="servicos"><div class="ds-wrap"><div class="ds-head"><h2 class="ds-h2">${esc(svcTitle)}</h2></div><div class="ds-svcs">`;
    h+=svcs.map((s,i)=>`<article class="ds-svc${span(i)}${M.bento&&i===0&&n>1?' feat':''}"><span class="ds-svc-ic">${IC.check}</span><div><h3>${esc(s.a)}</h3>${s.b?`<p>${esc(s.b)}</p>`:''}</div></article>`).join('');
    h+=`</div></div></section>`;
  }

  /* galeria */
  if(gal.length)h+=`<section class="ds-sec ds-gal-sec" id="galeria"><div class="ds-wrap"><div class="ds-head"><h2 class="ds-h2">Galeria</h2></div><div class="ds-gal g${gal.length}${gal.length===3||gal.length===5?' big':''}" style="--gc:${({1:1,2:2,3:3,4:2,5:4})[gal.length]}">${gal.map((g,i)=>`<img src="${g}" alt="${esc(nome)}, foto ${i+1}" loading="lazy">`).join('')}</div></div></section>`;

  /* depoimentos */
  if(quotes.length)h+=`<section class="ds-sec ds-quotes-sec" id="depoimentos"><div class="ds-wrap"><div class="ds-head"><h2 class="ds-h2">O que dizem nossos clientes</h2></div><div class="ds-quotes">${quotes.map(q=>`<figure class="ds-q"><div><div class="ds-stars" aria-label="5 estrelas">★★★★★</div><blockquote>${esc(q.a)}</blockquote></div>${q.b?`<figcaption><span class="ds-av">${esc(q.b.charAt(0).toUpperCase())}</span>${esc(q.b)}</figcaption>`:''}</figure>`).join('')}</div></div></section>`;

  /* chamada final */
  if(wa||tel){
    h+=`<section class="ds-cta"><div class="ds-wrap"><div class="ds-cta-panel"><h2>Vamos conversar?</h2><p>Tire suas dúvidas, peça um orçamento ou agende direto com a nossa equipe.</p>${wa?waBtn('Chamar no WhatsApp'):`<a class="ds-btn" href="tel:+55${tel}">Ligar agora</a>`}</div></div></section>`;
  }

  /* contato */
  if(hasContact){
    const it=[];
    if(d.endereco)it.push(`<div class="ds-ci">${IC.pin}<dt>Endereço</dt><dd>${esc(d.endereco)}<br><a class="ds-lk" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.endereco)}"${ext}>Ver no mapa</a></dd></div>`);
    if(wa)it.push(`<div class="ds-ci">${IC.wa}<dt>WhatsApp</dt><dd>${esc(d.whatsapp)}<br><a class="ds-lk" href="${wa}"${ext}>Enviar mensagem</a></dd></div>`);
    if(tel)it.push(`<div class="ds-ci">${IC.phone}<dt>Telefone</dt><dd><a href="tel:+55${tel}">${esc(d.telefone)}</a></dd></div>`);
    if(email)it.push(`<div class="ds-ci">${IC.mail}<dt>E-mail</dt><dd><a href="mailto:${esc(email)}">${esc(email)}</a></dd></div>`);
    if(ig)it.push(`<div class="ds-ci">${IC.ig}<dt>Instagram</dt><dd><a href="https://instagram.com/${esc(ig)}"${ext}>@${esc(ig)}</a></dd></div>`);
    if(hors.length)it.push(`<div class="ds-ci">${IC.clock}<dt>Horário de funcionamento</dt><dd><ul>${hors.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></dd></div>`);
    h+=`<section class="ds-sec ds-contact" id="contato"><div class="ds-wrap"><div class="ds-head"><h2 class="ds-h2">${d.endereco?'Onde estamos':'Contato'}</h2></div><dl class="ds-cgrid">${it.join('')}</dl></div></section>`;
  }

  /* rodapé */
  h+=`<footer class="ds-foot"><div class="ds-wrap ds-foot-in"><span class="ds-brand">${esc(nome)}</span><span>© ${new Date().getFullYear()} ${esc(nome)}. Todos os direitos reservados.${d.credito?' Site por DK Marketing Digital.':''}</span></div></footer>`;
  if(wa)h+=`<a class="ds-wa" href="${wa}"${ext} aria-label="Falar no WhatsApp">${WA_SVG}</a>`;

  const PD=lum(P)>.4?`color-mix(in srgb,${P} 88%,#FFFFFF)`:`color-mix(in srgb,${P} 58%,#0F1419)`;
  const css=`.ds-site{--p:${P};--pc:${contrast(P)};--pl:${PL};--pd:${PD};${MODELOS[t].vars}}`+BASE_CSS+MODELOS[t].css;
  const fontLink=`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?${MODELOS[t].fontes}&display=swap" rel="stylesheet">`;
  const js=`<script>(function(){var r=document.querySelectorAll('.ds-site');r=r[r.length-1];if(!r)return;var h=r.querySelector('.ds-top');if(!h)return;function f(){h.classList.toggle('ds-solid',window.scrollY>30)}f();window.addEventListener('scroll',f,{passive:true});r.querySelectorAll('.ds-mnav a').forEach(function(a){a.addEventListener('click',function(){h.classList.remove('ds-open')})})})();<\/script>`;
  const body=`<div class="ds-site t-${t}">${h}</div>`;
  const desc=esc(d.slogan||segLine||nome);
  if(SQ){
    const title=esc(nome)+(seg?' | '+esc(seg)+(cid?' em '+esc(cid):''):'');
    const sqCss=`
/* ---- ajustes Squarespace: página cheia, sem cabeçalho/rodapé do template ---- */
html{scroll-behavior:smooth;scroll-padding-top:90px}
#header,#footer-sections,.header-announcement-bar-wrapper,.Header,.Footer{display:none!important}
.page-section,.content-wrapper,.content,#page,main{padding:0!important;margin:0!important;max-width:none!important;min-height:0!important}
.sqs-block-code,.sqs-block-code .sqs-block-content,.fluid-engine{padding:0!important;margin:0!important}
.ds-full{width:100vw;margin-left:calc(50% - 50vw);overflow-x:clip;background:${M.fundo||'#FFFFFF'}}
.ds-site{color-scheme:light}
.ds-site h1,.ds-site h2,.ds-site h3,.ds-site p,.ds-site blockquote,.ds-site figure,.ds-site dl,.ds-site dd{margin:0}
.ds-site h1,.ds-site h2,.ds-site h3{text-transform:none;font-style:normal}
.ds-site.t-impacto h1,.ds-site.t-impacto h2,.ds-site.t-impacto h3,.ds-site.t-impacto .ds-brand{text-transform:uppercase}`;
    const imgList=[I.logo&&I.logo.startsWith('COLE')&&'  - COLE-AQUI-URL-logo.png  -> fotos/logo.png',I.hero&&I.hero.startsWith('COLE')&&'  - COLE-AQUI-URL-foto-principal.jpg  -> fotos/foto-principal.jpg',...I.gal.map((g,i)=>g.startsWith('COLE')&&`  - COLE-AQUI-URL-galeria-${i+1}.jpg  -> fotos/galeria-${i+1}.jpg`)].filter(Boolean);
    const comLink=[I.logo,I.hero,...I.gal].some(x=>x&&/^https?:/.test(x));
    const note=`<!--
  ${nome.replace(/--/g,'-')} — pronto para Code Block do Squarespace
  Como usar: Página em branco > Adicionar bloco > Código > desligar "Exibir fonte" > colar TUDO isto.
  Antes de publicar:${mode==='sqsfotos'?`
  (1) as fotos já estão dentro deste código, não precisa trocar nada.`:imgList.length?`
  (1) trocar cada COLE-AQUI-URL-... pela URL da imagem enviada ao Squarespace:
${imgList.join('\n')}`:`
  (1) ${comLink?'as fotos já estão com link, não precisa trocar nada.':'este site não usa imagens enviadas.'}`}
  (2) título/descrição da página: Configurações da página > SEO.
      Título sugerido: ${title.replace(/--/g,'-')}
      Descrição sugerida: ${desc.replace(/--/g,'-')}
-->`;
    return `${note}\n${fontLink}\n<style>${css}${sqCss}\n</style>\n<div class="ds-full">${body}</div>\n${js}\n`;
  }
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(nome)}${seg?' | '+esc(seg)+(cid?' em '+esc(cid):''):''}</title>
<meta name="description" content="${desc}">
<meta property="og:title" content="${esc(nome)}">
<meta property="og:description" content="${desc}">
<meta name="theme-color" content="${P}">
${I.logo?`<link rel="icon" href="${I.logo}">`:''}
${fontLink}
<style>html{scroll-behavior:smooth;scroll-padding-top:90px}body{margin:0;background:${M.fundo||'#FFFFFF'}}${css}</style>
</head>
<body>
${body}
${js}
</body>
</html>`;
}
