/* Modelo Luxo: escuro, centralizado, refinado. Estética premium, joalherias, imóveis de alto padrão. */
MODELOS.luxo = {
  hero: 'full', fundo: '#0E0D0B',
  nome: 'Luxo',
  fontes: 'family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400&family=Mulish:wght@300;400;600;700',
  vars: "--bg:#0E0D0B;--ink:#F1ECE3;--muted:#A79F93;--line:#2A2722;--soft:#161512;--fh:'Bodoni Moda',Didot,Georgia,serif;--fb:'Mulish',system-ui,sans-serif;--r:0px;--rb:0px;--ls:-.01em;--nh:84px;",
  css: `
.t-luxo .ds-top{color:#F1ECE3}
.t-luxo .ds-top.ds-solid,.t-luxo .ds-top.ds-open{background:rgba(14,13,11,.94);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 1px 0 var(--line)}
.t-luxo .ds-brand{font-weight:400;font-size:24px;letter-spacing:.14em;text-transform:uppercase}
.t-luxo .ds-links{text-transform:uppercase;letter-spacing:.18em;font-size:11.5px;font-weight:600}
.t-luxo .ds-btn{text-transform:uppercase;letter-spacing:.16em;font-size:12px;font-weight:700;padding:18px 30px}
.t-luxo .ds-btn-sm{padding:13px 20px;font-size:11px}
.t-luxo .ds-hero{min-height:min(96vh,940px);display:flex;align-items:center;text-align:center;background:radial-gradient(ellipse at 50% 30%,color-mix(in srgb,var(--p) 22%,transparent),transparent 60%),#0E0D0B}
.t-luxo .ds-hero-bg{position:absolute;inset:0;overflow:hidden}
.t-luxo .ds-hero-bg img{width:100%;height:100%;object-fit:cover;animation:dsZoom 14s ease-out both}
.t-luxo .ds-hero-bg::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,13,11,.55),rgba(14,13,11,.45) 50%,#0E0D0B)}
.t-luxo .ds-hero-in{position:relative;padding-top:calc(var(--nh) + 60px);padding-bottom:80px}
.t-luxo .ds-hero-txt{max-width:900px;margin:0 auto}
.t-luxo .ds-kicker{justify-content:center;color:var(--pl);text-transform:uppercase;letter-spacing:.32em;font-size:11.5px;font-weight:600;gap:16px}
.t-luxo .ds-kicker::before,.t-luxo .ds-kicker::after{content:"";width:42px;height:1px;background:var(--pl)}
.t-luxo .ds-hero h1{font-size:clamp(46px,7vw,108px);font-weight:400;line-height:1;letter-spacing:-.02em;color:#fff}
.t-luxo .ds-lead{margin-left:auto;margin-right:auto;color:#CFC7BA;opacity:1;font-weight:300}
.t-luxo .ds-ctas{justify-content:center}
.t-luxo .ds-hero .ds-btn-o{color:#fff!important;border-color:rgba(255,255,255,.4)}
.t-luxo .ds-nums{padding:clamp(56px,7vw,88px) 0 0}
.t-luxo .ds-nums-in{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));border-block:1px solid var(--line)}
.t-luxo .ds-num{padding:40px 20px;text-align:center}
.t-luxo .ds-num+.ds-num{border-left:1px solid var(--line)}
.t-luxo .ds-num strong{font-size:clamp(44px,5vw,64px);font-weight:400;color:var(--pl);font-style:italic}
.t-luxo .ds-num span{text-transform:uppercase;letter-spacing:.2em;font-size:11px}
.t-luxo .ds-head{margin-left:auto;margin-right:auto;text-align:center}
.t-luxo .ds-h2{font-weight:400;font-size:clamp(36px,4.8vw,64px)}
.t-luxo .ds-about-txt .ds-h2{text-align:left}
.t-luxo .ds-about-txt p.ds-big{font-family:var(--fh);font-style:italic;font-size:clamp(21px,2.1vw,26px);line-height:1.45}
.t-luxo .ds-about-media::before{content:"";position:absolute;inset:-16px;border:1px solid var(--pl);opacity:.5;z-index:-1}
.t-luxo .ds-svcs{display:grid;grid-template-columns:1fr 1fr;gap:0 64px;max-width:1000px;margin:0 auto}
.t-luxo .ds-svc{padding:30px 0;border-bottom:1px solid var(--line);text-align:center}
.t-luxo .ds-svc h3{font-family:var(--fh);font-size:clamp(24px,2.4vw,30px);font-weight:400;font-style:italic}
.t-luxo .ds-svc p{color:var(--muted);margin-top:8px;font-weight:300}
.t-luxo .ds-gal img{filter:saturate(.85)}
.t-luxo .ds-q{border:1px solid var(--line);text-align:center;align-items:center}
.t-luxo .ds-q blockquote{font-family:var(--fh);font-style:italic;font-size:22px;line-height:1.45}
.t-luxo .ds-av{background:transparent;border:1px solid var(--pl);color:var(--pl)}
.t-luxo .ds-cta{border-top:1px solid var(--line);padding:clamp(88px,11vw,150px) 0}
.t-luxo .ds-cta h2{font-weight:400;font-style:italic;font-size:clamp(44px,6vw,88px)}
.t-luxo .ds-cta p{color:var(--muted);opacity:1}
.t-luxo .ds-contact{background:#0A0908}
.t-luxo .ds-ci{border-top:1px solid var(--line);padding:26px 0 0;text-align:center;align-items:center}
.t-luxo .ds-ci svg{stroke:var(--pl)}
.t-luxo .ds-ci dt{text-transform:uppercase;letter-spacing:.2em;font-size:11px}
.t-luxo .ds-foot{background:#0A0908;color:var(--muted);border-top:1px solid var(--line)}
.t-luxo .ds-foot .ds-brand{font-size:18px;color:#F1ECE3}
@media (max-width:860px){.t-luxo .ds-svcs{grid-template-columns:1fr}}`
};
