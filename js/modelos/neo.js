/* Modelo Neo: bordas grossas, sombras sólidas e muita personalidade. Lanchonetes, food trucks, lojas jovens, estúdios. */
MODELOS.neo = {
  hero: 'split', fundo: '#FFFDF7',
  nome: 'Neo',
  fontes: 'family=Archivo:wght@500;700;800;900',
  vars: "--bg:#FFFDF7;--ink:#111111;--muted:#4A4A4A;--line:#111111;--soft:#FFF3C4;--fh:'Archivo',system-ui,sans-serif;--fb:'Archivo',system-ui,sans-serif;--r:16px;--rb:12px;--ls:-.035em;--nh:80px;",
  css: `
.t-neo .ds-top{color:var(--ink)}
.t-neo .ds-top.ds-solid,.t-neo .ds-top.ds-open{background:var(--bg);box-shadow:0 3px 0 var(--ink)}
.t-neo .ds-brand{font-weight:900;letter-spacing:-.04em;font-size:24px}
.t-neo .ds-links{font-weight:700}
.t-neo .ds-btn{border:3px solid var(--ink);box-shadow:5px 5px 0 var(--ink);font-weight:800;transition:transform .12s,box-shadow .12s}
.t-neo .ds-btn:hover{transform:translate(-2px,-2px);box-shadow:7px 7px 0 var(--ink)}
.t-neo .ds-btn-o{background:#fff;color:var(--ink)!important}
.t-neo .ds-hero{padding:calc(var(--nh) + clamp(36px,5vw,72px)) 0 clamp(72px,9vw,120px);border-bottom:3px solid var(--ink)}
.t-neo .ds-hero-in{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(40px,6vw,80px);align-items:center}
.t-neo .ds-kicker{background:var(--soft);border:3px solid var(--ink);padding:6px 14px;border-radius:999px;font-weight:800;transform:rotate(-2deg);box-shadow:3px 3px 0 var(--ink)}
.t-neo .ds-dot{background:var(--p);border:2px solid var(--ink);width:12px;height:12px}
.t-neo .ds-hero h1{font-size:clamp(44px,6.2vw,92px);font-weight:900;letter-spacing:-.05em;line-height:.95}
.t-neo .ds-lead{color:var(--muted);opacity:1;font-weight:500}
.t-neo .ds-hero-nums{gap:14px}
.t-neo .ds-hero-nums .ds-num{border:3px solid var(--ink);border-radius:14px;background:#fff;padding:12px 18px;box-shadow:4px 4px 0 var(--ink)}
.t-neo .ds-num strong{font-size:28px;font-weight:900}
.t-neo .ds-num span{color:var(--ink);font-weight:600}
.t-neo .ds-hero-media>img,.t-neo .ds-hero-ph{aspect-ratio:4/4.6;border:3px solid var(--ink);border-radius:24px;box-shadow:10px 10px 0 var(--ink);transform:rotate(2deg)}
.t-neo .ds-hero-ph{font-weight:900}
.t-neo .ds-hero-media::after{content:"★";position:absolute;top:-18px;left:-18px;width:74px;height:74px;border-radius:50%;background:var(--soft);border:3px solid var(--ink);display:flex;align-items:center;justify-content:center;font-size:30px;transform:rotate(-12deg);box-shadow:4px 4px 0 var(--ink)}
.t-neo .ds-h2{font-weight:900}
.t-neo .ds-about-media img{border:3px solid var(--ink);border-radius:20px;box-shadow:8px 8px 0 var(--ink);transform:rotate(-1.5deg)}
.t-neo .ds-svc-sec{background:var(--soft);border-block:3px solid var(--ink)}
.t-neo .ds-svcs{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px}
.t-neo .ds-svc{background:#fff;border:3px solid var(--ink);border-radius:var(--r);padding:26px;box-shadow:6px 6px 0 var(--ink);transition:transform .12s,box-shadow .12s}
.t-neo .ds-svc:nth-child(even){transform:rotate(1deg)}
.t-neo .ds-svc:nth-child(odd){transform:rotate(-.8deg)}
.t-neo .ds-svc:hover{transform:translate(-2px,-2px) rotate(0);box-shadow:9px 9px 0 var(--ink)}
.t-neo .ds-svc-ic{display:flex;width:44px;height:44px;border-radius:12px;background:var(--p);border:3px solid var(--ink);align-items:center;justify-content:center;margin-bottom:18px}
.t-neo .ds-svc-ic svg{width:20px;height:20px;stroke:var(--pc);fill:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
.t-neo .ds-svc h3{font-size:21px;font-weight:900;letter-spacing:-.02em}
.t-neo .ds-svc p{color:var(--muted);margin-top:6px;font-weight:500}
.t-neo .ds-gal img{border:3px solid var(--ink);border-radius:16px}
.t-neo .ds-q{background:#fff;border:3px solid var(--ink);box-shadow:6px 6px 0 var(--ink)}
.t-neo .ds-q blockquote{font-weight:600}
.t-neo .ds-av{border:2px solid var(--ink)}
.t-neo .ds-stars{display:block;color:var(--ink)}
.t-neo .ds-cta{padding:clamp(40px,6vw,72px) 0 clamp(80px,10vw,120px)}
.t-neo .ds-cta-panel{background:var(--p);color:var(--pc);border:3px solid var(--ink);border-radius:28px;box-shadow:12px 12px 0 var(--ink);padding:clamp(48px,7vw,88px) 28px}
.t-neo .ds-cta h2{font-weight:900}
.t-neo .ds-cta .ds-btn{background:#fff;color:var(--ink)!important}
.t-neo .ds-ci{background:#fff;border:3px solid var(--ink);box-shadow:5px 5px 0 var(--ink)}
.t-neo .ds-ci svg{stroke:var(--ink);stroke-width:2.2}
.t-neo .ds-lk{border-bottom-width:3px}
.t-neo .ds-foot{border-top:3px solid var(--ink);font-weight:600}
@media (max-width:860px){.t-neo .ds-svc{display:flex;gap:14px;align-items:center;padding:20px}.t-neo .ds-svc-ic{margin:0;flex-shrink:0}.t-neo .ds-hero-in{grid-template-columns:1fr}.t-neo .ds-hero-nums .ds-num{padding:10px 10px}.t-neo .ds-hero-nums .ds-num strong{font-size:clamp(17px,5vw,22px)!important}.t-neo .ds-hero-media{max-width:380px;margin:0 auto;width:90%}}`
};
