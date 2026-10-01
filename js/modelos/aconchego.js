/* Modelo Aconchego: tons quentes e formas orgânicas. Cafés, restaurantes, confeitarias, pet shops. */
MODELOS.aconchego = {
  hero: 'split', fundo: '#FBF6EF',
  nome: 'Aconchego',
  fontes: 'family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=DM+Sans:wght@400;500;700',
  vars: "--bg:#FBF6EF;--ink:#2B211C;--muted:#6F625A;--line:#E9DFD3;--soft:#F3E9DC;--fh:'Fraunces',Georgia,serif;--fb:'DM Sans',system-ui,sans-serif;--r:22px;--rb:999px;--ls:-.02em;--nh:80px;",
  css: `
.t-aconchego .ds-top{color:var(--ink)}
.t-aconchego .ds-top.ds-solid,.t-aconchego .ds-top.ds-open{background:rgba(251,246,239,.95);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 1px 0 var(--line)}
.t-aconchego .ds-brand{font-weight:600;font-size:26px;font-style:italic}
.t-aconchego .ds-hero{padding:calc(var(--nh) + clamp(40px,6vw,80px)) 0 clamp(64px,8vw,110px)}
.t-aconchego .ds-hero-in{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(40px,6vw,90px);align-items:center}
.t-aconchego .ds-kicker{color:var(--pl);font-weight:700;font-size:15px}
.t-aconchego .ds-dot{width:10px;height:10px}
.t-aconchego .ds-hero h1{font-size:clamp(44px,6vw,84px);font-weight:500;letter-spacing:-.025em;line-height:1.02}
.t-aconchego .ds-lead{color:var(--muted);opacity:1}
.t-aconchego .ds-hero .ds-btn-o{border-color:var(--line);color:var(--ink)!important;background:#fff}
.t-aconchego .ds-hero-nums{border-top:1px dashed var(--line);padding-top:26px}
.t-aconchego .ds-num strong{font-family:var(--fh);font-size:38px;font-weight:500;color:var(--pl)}
.t-aconchego .ds-hero-media>img,.t-aconchego .ds-hero-ph{aspect-ratio:4/5;border-radius:999px 999px 28px 28px;max-height:620px}
.t-aconchego .ds-hero-media::before{content:"";position:absolute;top:-22px;left:-22px;width:130px;height:130px;border-radius:50%;background:var(--p);opacity:.2;z-index:-1}
.t-aconchego .ds-hero-media::after{content:"";position:absolute;bottom:-18px;right:-18px;width:90px;height:90px;border-radius:50%;border:2px solid var(--p);opacity:.45;z-index:-1}
.t-aconchego .ds-h2{font-weight:500}
.t-aconchego .ds-about-media img{border-radius:200px 200px 24px 24px}
.t-aconchego .ds-svc-sec{background:var(--soft)}
.t-aconchego .ds-svcs{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:18px}
.t-aconchego .ds-svc{background:var(--bg);border-radius:var(--r);padding:30px;border:1px solid var(--line)}
.t-aconchego .ds-svc-ic{display:flex;width:44px;height:44px;border-radius:50%;background:color-mix(in srgb,var(--p) 16%,transparent);align-items:center;justify-content:center;margin-bottom:22px}
.t-aconchego .ds-svc-ic svg{width:20px;height:20px;stroke:var(--pl);fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.t-aconchego .ds-svc h3{font-family:var(--fh);font-size:24px;font-weight:500;line-height:1.2}
.t-aconchego .ds-svc p{color:var(--muted);margin-top:8px}
.t-aconchego .ds-gal img{border-radius:18px}
.t-aconchego .ds-q{background:#fff;border:1px solid var(--line)}
.t-aconchego .ds-q blockquote{font-family:var(--fh);font-size:21px;font-style:italic;line-height:1.45}
.t-aconchego .ds-stars{display:block;color:var(--pl)}
.t-aconchego .ds-cta{padding:0 0 clamp(72px,9vw,120px)}
.t-aconchego .ds-cta-panel{background:var(--p);color:var(--pc);border-radius:40px;padding:clamp(52px,7vw,96px) 28px}
.t-aconchego .ds-cta h2{font-weight:500;font-style:italic}
.t-aconchego .ds-cta .ds-btn{background:var(--pc);color:var(--p)!important;border-color:var(--pc)}
.t-aconchego .ds-ci{background:#fff;border:1px solid var(--line)}
.t-aconchego .ds-ci svg{stroke:var(--pl)}
.t-aconchego .ds-foot{border-top:1px solid var(--line);color:var(--muted)}
@media (max-width:860px){.t-aconchego .ds-svc{display:flex;gap:16px;align-items:center;padding:22px}.t-aconchego .ds-svc-ic{margin:0;flex-shrink:0}.t-aconchego .ds-svc h3{font-size:21px}.t-aconchego .ds-hero-in{grid-template-columns:1fr}.t-aconchego .ds-hero-media{max-width:420px;margin:0 auto;width:100%}}`
};
