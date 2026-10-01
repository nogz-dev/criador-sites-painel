/* Modelo Vibrante: cor da marca em destaque, clima alegre. Estética, festas, lojas, escolas. */
MODELOS.vibrante = {
  hero: 'split',
  nome: 'Vibrante',
  fontes: 'family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=DM+Sans:wght@400;500;700',
  vars: "--bg:#FFFFFF;--ink:#16121F;--muted:#5E5A6B;--line:#ECE9F2;--soft:color-mix(in srgb,var(--p) 9%,#FFFFFF);--fh:'Bricolage Grotesque',system-ui,sans-serif;--fb:'DM Sans',system-ui,sans-serif;--r:28px;--rb:999px;--ls:-.035em;--nh:80px;",
  css: `
.t-vibrante .ds-top{color:var(--pc)}
.t-vibrante .ds-top.ds-solid,.t-vibrante .ds-top.ds-open{background:var(--p);color:var(--pc);box-shadow:0 10px 30px -20px rgba(0,0,0,.5)}
.t-vibrante .ds-brand{font-weight:800;letter-spacing:-.03em;font-size:24px}
.t-vibrante .ds-top .ds-btn{background:var(--pc);color:var(--p)!important;border-color:var(--pc)}
.t-vibrante .ds-hero{background:var(--p);color:var(--pc);padding:calc(var(--nh) + clamp(36px,5vw,72px)) 0 clamp(80px,10vw,140px);border-radius:0 0 48px 48px}
.t-vibrante .ds-hero::before{content:"";position:absolute;width:520px;height:520px;right:-140px;bottom:-220px;border-radius:50%;background:color-mix(in srgb,var(--pc) 12%,transparent)}
.t-vibrante .ds-hero::after{content:"";position:absolute;width:170px;height:170px;left:5%;bottom:36px;border-radius:40px;background:color-mix(in srgb,var(--pc) 8%,transparent);transform:rotate(18deg)}
.t-vibrante .ds-hero-in{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(40px,6vw,80px);align-items:center;position:relative;z-index:1}
.t-vibrante .ds-kicker{background:color-mix(in srgb,var(--pc) 16%,transparent);padding:8px 16px;border-radius:999px;font-weight:700}
.t-vibrante .ds-dot{background:var(--pc)}
.t-vibrante .ds-hero h1{font-size:clamp(44px,6.4vw,92px);font-weight:800;letter-spacing:-.045em;line-height:.98}
.t-vibrante .ds-lead{opacity:.9}
.t-vibrante .ds-hero .ds-btn{background:var(--pc);color:var(--p)!important;border-color:var(--pc)}
.t-vibrante .ds-hero .ds-btn-o{background:transparent;color:var(--pc)!important;border-color:color-mix(in srgb,var(--pc) 55%,transparent)}
.t-vibrante .ds-hero .ds-num strong{font-size:40px;font-weight:800}
.t-vibrante .ds-hero .ds-num span{color:inherit;opacity:.8}
.t-vibrante .ds-hero-media>img,.t-vibrante .ds-hero-ph{aspect-ratio:1/1;border-radius:36px;transform:rotate(3deg);box-shadow:0 40px 80px -30px rgba(0,0,0,.45);border:8px solid var(--pc)}
.t-vibrante .ds-hero-ph{background:color-mix(in srgb,var(--pc) 16%,var(--p));font-weight:800}
.t-vibrante .ds-h2{font-weight:800}
.t-vibrante .ds-svcs{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px}
.t-vibrante .ds-svc{border-radius:var(--r);padding:32px 28px;background:var(--soft);transition:transform .25s}
.t-vibrante .ds-svc:hover{transform:translateY(-4px) rotate(-1deg)}
.t-vibrante .ds-svc:nth-child(3n+2){background:color-mix(in srgb,var(--p) 22%,#FFFFFF)}
.t-vibrante .ds-svc:nth-child(3n){background:var(--p);color:var(--pc)}
.t-vibrante .ds-svc:nth-child(3n) p{color:inherit;opacity:.85}
.t-vibrante .ds-svc-ic{display:flex;width:48px;height:48px;border-radius:16px;background:#fff;align-items:center;justify-content:center;margin-bottom:24px}
.t-vibrante .ds-svc-ic svg{width:22px;height:22px;stroke:var(--ink);fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
.t-vibrante .ds-svc h3{font-family:var(--fh);font-size:24px;font-weight:800;letter-spacing:-.02em;line-height:1.15}
.t-vibrante .ds-svc p{color:var(--muted);margin-top:8px}
.t-vibrante .ds-about-media img{border-radius:36px;transform:rotate(-2deg)}
.t-vibrante .ds-gal img{border-radius:24px}
.t-vibrante .ds-q{background:var(--soft)}
.t-vibrante .ds-stars{display:block}
.t-vibrante .ds-cta{padding:0 0 clamp(72px,9vw,120px)}
.t-vibrante .ds-cta-panel{background:var(--ink);color:#fff;border-radius:40px;padding:clamp(52px,7vw,96px) 28px}
.t-vibrante .ds-cta h2{font-weight:800}
.t-vibrante .ds-ci{background:var(--soft)}
.t-vibrante .ds-foot{background:var(--ink);color:#B9B5C6}
.t-vibrante .ds-foot .ds-brand{color:#fff}
@media (max-width:860px){.t-vibrante .ds-svc{display:flex;gap:16px;align-items:center;padding:22px}.t-vibrante .ds-svc-ic{margin:0;flex-shrink:0;width:44px;height:44px}.t-vibrante .ds-svc h3{font-size:20px}.t-vibrante .ds-hero-in{grid-template-columns:1fr}.t-vibrante .ds-hero-media{max-width:360px;margin:0 auto;width:92%}.t-vibrante .ds-hero{border-radius:0 0 32px 32px}}`
};
