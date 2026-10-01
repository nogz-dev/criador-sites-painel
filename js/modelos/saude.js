/* Modelo Saúde: claro, acolhedor e confiável. Clínicas, consultórios, fisioterapia, nutrição. */
MODELOS.saude = {
  hero: 'split', fundo: '#F5F9FA',
  nome: 'Saúde',
  fontes: 'family=Figtree:wght@400;500;600;700;800',
  vars: "--bg:#F5F9FA;--ink:#0F2A33;--muted:#58707A;--line:#DDE8EC;--soft:#FFFFFF;--fh:'Figtree',system-ui,sans-serif;--fb:'Figtree',system-ui,sans-serif;--r:24px;--rb:14px;--ls:-.03em;--nh:76px;",
  css: `
.t-saude .ds-top{color:var(--ink)}
.t-saude .ds-top.ds-solid,.t-saude .ds-top.ds-open{background:rgba(255,255,255,.94);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 1px 0 var(--line)}
.t-saude .ds-brand{font-weight:800;letter-spacing:-.03em}
.t-saude .ds-hero{padding:calc(var(--nh) + clamp(40px,6vw,80px)) 0 clamp(64px,8vw,104px);background:radial-gradient(ellipse at 50% -10%,color-mix(in srgb,var(--p) 16%,transparent),transparent 60%)}
.t-saude .ds-hero-in{display:block;text-align:center}
.t-saude .ds-hero-txt{max-width:860px;margin:0 auto}
.t-saude .ds-kicker{background:#fff;border:1px solid var(--line);padding:8px 16px;border-radius:999px;font-size:13.5px;color:var(--ink);box-shadow:0 6px 16px -10px rgba(15,42,51,.25)}
.t-saude .ds-hero h1{font-size:clamp(40px,5.6vw,76px);font-weight:800;letter-spacing:-.04em;line-height:1.03}
.t-saude .ds-lead{color:var(--muted);opacity:1;margin-left:auto;margin-right:auto}
.t-saude .ds-ctas{justify-content:center}
.t-saude .ds-hero .ds-btn-o{background:#fff;border-color:var(--line);color:var(--ink)!important}
.t-saude .ds-hero-nums{justify-content:center;gap:14px}
.t-saude .ds-hero-nums .ds-num{background:#fff;border:1px solid var(--line);border-radius:18px;padding:16px 22px;min-width:150px}
.t-saude .ds-num strong{font-size:28px;font-weight:800;color:var(--pl)}
.t-saude .ds-num span{margin-top:6px}
.t-saude .ds-hero-media{margin:clamp(40px,5vw,64px) auto 0;max-width:1080px}
.t-saude .ds-hero-media>img,.t-saude .ds-hero-ph{aspect-ratio:16/7;border-radius:32px;box-shadow:0 40px 80px -40px rgba(15,42,51,.4)}
.t-saude .ds-hero-ph{font-weight:800}
.t-saude .ds-h2{font-weight:800}
.t-saude .ds-about-sec{background:#fff}
.t-saude .ds-about-media img{border-radius:28px}
.t-saude .ds-svcs{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}
.t-saude .ds-svc{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:28px;display:flex;gap:16px;align-items:flex-start}
.t-saude .ds-svc-ic{display:flex;flex-shrink:0;width:46px;height:46px;border-radius:50%;background:color-mix(in srgb,var(--p) 14%,#fff);align-items:center;justify-content:center}
.t-saude .ds-svc-ic svg{width:20px;height:20px;stroke:var(--pl);fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
.t-saude .ds-svc h3{font-size:19px;font-weight:700;letter-spacing:-.01em;line-height:1.3;padding-top:2px}
.t-saude .ds-svc p{color:var(--muted);font-size:15.5px;margin-top:6px}
.t-saude .ds-gal img{border-radius:20px}
.t-saude .ds-quotes-sec{background:#fff}
.t-saude .ds-q{background:var(--bg);border:1px solid var(--line)}
.t-saude .ds-stars{display:block}
.t-saude .ds-cta{padding:0 0 clamp(72px,9vw,120px)}
.t-saude .ds-cta-panel{background:linear-gradient(135deg,var(--p),var(--pd));color:var(--pc);border-radius:32px;padding:clamp(52px,7vw,96px) 28px}
.t-saude .ds-cta h2{font-weight:800}
.t-saude .ds-cta .ds-btn{background:var(--pc);color:var(--p)!important;border-color:var(--pc)}
.t-saude .ds-contact{padding-top:0}
.t-saude .ds-ci{background:#fff;border:1px solid var(--line)}
.t-saude .ds-ci svg{stroke:var(--pl)}
.t-saude .ds-foot{background:#fff;border-top:1px solid var(--line);color:var(--muted)}
@media (max-width:860px){.t-saude .ds-hero-media>img,.t-saude .ds-hero-ph{aspect-ratio:4/3;border-radius:24px}.t-saude .ds-hero-nums .ds-num{min-width:0;flex:1 1 40%;padding:14px}}`
};
