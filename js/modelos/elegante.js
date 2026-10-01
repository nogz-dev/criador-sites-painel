/* Modelo Elegante: Foto em tela cheia, serifa refinada. Clínicas, estética, escritórios. */
MODELOS.elegante = {
  // hero: 'full' = foto de fundo | 'split' = texto + foto ao lado
  hero: 'full',
  nome: 'Elegante',
  // fontes do Google Fonts (parte depois de "css2?")
  fontes: 'family=Cormorant:wght@500;600;700&family=Jost:wght@300;400;500;600',
  // cores, fontes e raios do modelo (variáveis CSS)
  vars: "--bg:#FFFFFF;--ink:#191816;--muted:#6B6760;--line:#E8E4DD;--soft:#F7F4EF;--fh:'Cormorant',Georgia,serif;--fb:'Jost',system-ui,sans-serif;--r:2px;--rb:2px;--ls:-.01em;--nh:84px;",
  // CSS exclusivo do modelo (tudo começa com .t-elegante)
  css: `
.t-elegante .ds-top{color:#fff}
.t-elegante .ds-top.ds-solid,.t-elegante .ds-top.ds-open{background:rgba(255,255,255,.96);color:var(--ink);box-shadow:0 1px 0 var(--line);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
.t-elegante .ds-brand{font-weight:600;font-size:27px;letter-spacing:.005em}
.t-elegante .ds-links{font-weight:400;letter-spacing:.02em}
.t-elegante .ds-hero{min-height:min(94vh,920px);display:flex;align-items:flex-end;color:#fff;background:radial-gradient(ellipse at 85% 10%,color-mix(in srgb,var(--p) 55%,transparent),transparent 60%),linear-gradient(165deg,color-mix(in srgb,var(--p) 28%,#141312),#141312 70%)}
.t-elegante .ds-hero-bg{position:absolute;inset:0;overflow:hidden}
.t-elegante .ds-hero-bg img{width:100%;height:100%;object-fit:cover;animation:dsZoom 12s ease-out both}
.t-elegante .ds-hero-bg::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(12,11,10,.45) 0%,rgba(12,11,10,.12) 38%,rgba(12,11,10,.82) 100%)}
.t-elegante .ds-hero-in{position:relative;padding-top:calc(var(--nh) + 96px);padding-bottom:clamp(64px,9vw,120px)}
.t-elegante .ds-hero h1{font-size:clamp(46px,7vw,104px);font-weight:500;max-width:13em;letter-spacing:-.015em;line-height:1}
.t-elegante .ds-kicker{font-weight:400;letter-spacing:.06em;font-size:15px}
.t-elegante .ds-kicker::before{content:"";width:44px;height:1px;background:var(--pl)}
.t-elegante .ds-hero .ds-btn-o{color:#fff!important;border-color:rgba(255,255,255,.55)}
.t-elegante .ds-btn{font-weight:500;letter-spacing:.03em}
.t-elegante .ds-nums{border-bottom:1px solid var(--line)}
.t-elegante .ds-nums-in{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr))}
.t-elegante .ds-num{padding:48px 32px;border-left:1px solid var(--line)}
.t-elegante .ds-num:first-child{border-left:0;padding-left:0}
.t-elegante .ds-num strong{font-size:clamp(46px,5vw,68px);font-weight:500;color:var(--p)}
.t-elegante .ds-h2{font-weight:500}
.t-elegante .ds-about-media::before{content:"";position:absolute;inset:28px -28px -28px 28px;border:1px solid var(--p);z-index:-1}
.t-elegante .ds-svcs{border-top:1px solid var(--ink)}
.t-elegante .ds-svc>div{display:grid;grid-template-columns:1fr 1.25fr;gap:32px;align-items:baseline}
.t-elegante .ds-svc{padding:36px 0;border-bottom:1px solid var(--line);transition:padding .35s}
.t-elegante .ds-svc:hover{padding-left:18px}
.t-elegante .ds-svc h3{font-family:var(--fh);font-size:clamp(25px,2.5vw,34px);font-weight:600;line-height:1.1}
.t-elegante .ds-svc p{color:var(--muted);padding-top:6px}
.t-elegante .ds-quotes-sec{background:var(--soft)}
.t-elegante .ds-q{padding:0;gap:28px}
.t-elegante .ds-q::before{content:"\\201C";font-family:var(--fh);font-size:96px;line-height:.6;height:36px;color:var(--p)}
.t-elegante .ds-q blockquote{font-family:var(--fh);font-size:clamp(22px,2.1vw,27px);line-height:1.35;font-weight:500}
.t-elegante .ds-cta{background:var(--p);color:var(--pc);padding:clamp(80px,10vw,130px) 0}
.t-elegante .ds-cta h2{font-weight:500}
.t-elegante .ds-cta .ds-btn{background:var(--pc);color:var(--p)!important;border-color:var(--pc)}
.t-elegante .ds-contact{background:#161513;color:#F3F0EA;--muted:#A39E95;--line:#34312D}
.t-elegante .ds-ci{border-top:1px solid var(--line);border-radius:0;padding:28px 0 0}
.t-elegante .ds-ci svg{stroke:var(--pl)}
.t-elegante .ds-foot{background:#161513;color:#A39E95;border-top:1px solid #34312D}
@media (max-width:860px){.t-elegante .ds-svc>div{grid-template-columns:1fr;gap:6px}.t-elegante .ds-num{padding:28px 10px}.t-elegante .ds-num:first-child{padding-left:0}.t-elegante .ds-about-media::before{inset:16px -12px -16px 12px}}`
};
