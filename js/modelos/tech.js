/* Modelo Tecnológico: escuro com brilho e vidro. Tecnologia, agências, assistência técnica, energia solar. */
MODELOS.tech = {
  hero: 'split', fundo: '#070B14',
  nome: 'Tecnológico',
  fontes: 'family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500',
  vars: "--bg:#070B14;--ink:#E7ECF5;--muted:#8D97AB;--line:rgba(255,255,255,.09);--soft:rgba(255,255,255,.04);--fh:'Manrope',system-ui,sans-serif;--fb:'Manrope',system-ui,sans-serif;--r:20px;--rb:12px;--ls:-.04em;--nh:76px;",
  css: `
.t-tech{background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:64px 64px}
.t-tech .ds-top{color:var(--ink)}
.t-tech .ds-top.ds-solid,.t-tech .ds-top.ds-open{background:rgba(7,11,20,.82);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 1px 0 var(--line)}
.t-tech .ds-brand{font-weight:800;letter-spacing:-.03em}
.t-tech .ds-hero{padding:calc(var(--nh) + clamp(48px,7vw,96px)) 0 clamp(72px,9vw,120px)}
.t-tech .ds-hero::before{content:"";position:absolute;width:800px;height:800px;left:50%;top:-420px;transform:translateX(-50%);border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--p) 45%,transparent),transparent 62%);opacity:.55;pointer-events:none}
.t-tech .ds-hero-in{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(40px,6vw,80px);align-items:center}
.t-tech .ds-kicker{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12.5px;font-weight:500;color:var(--pl);border:1px solid var(--line);background:var(--soft);padding:7px 14px;border-radius:8px}
.t-tech .ds-dot{background:var(--pl);box-shadow:0 0 12px var(--pl)}
.t-tech .ds-hero h1{font-size:clamp(42px,5.6vw,80px);font-weight:800;letter-spacing:-.05em;background:linear-gradient(180deg,#fff 30%,#9AA6BD);-webkit-background-clip:text;background-clip:text;color:transparent}
.t-tech .ds-lead{color:var(--muted);opacity:1}
.t-tech .ds-btn{box-shadow:0 0 0 1px color-mix(in srgb,var(--p) 60%,transparent),0 12px 30px -10px color-mix(in srgb,var(--p) 80%,transparent)}
.t-tech .ds-hero .ds-btn-o{background:var(--soft);border-color:var(--line);color:var(--ink)!important;box-shadow:none}
.t-tech .ds-hero-nums{gap:0;border:1px solid var(--line);border-radius:16px;background:var(--soft);margin-top:48px;overflow:hidden}
.t-tech .ds-hero-nums .ds-num{flex:1;min-width:120px;padding:18px 20px}
.t-tech .ds-hero-nums .ds-num+.ds-num{border-left:1px solid var(--line)}
.t-tech .ds-num strong{font-size:28px;font-weight:800}
.t-tech .ds-hero-media{padding:10px;border:1px solid var(--line);border-radius:28px;background:var(--soft);box-shadow:0 40px 100px -30px color-mix(in srgb,var(--p) 50%,transparent)}
.t-tech .ds-hero-media>img,.t-tech .ds-hero-ph{aspect-ratio:4/4.4;border-radius:20px}
.t-tech .ds-hero-ph{background:linear-gradient(145deg,var(--p),#0B1222);font-weight:800}
.t-tech .ds-h2{font-weight:800}
.t-tech .ds-sec{border-top:1px solid var(--line)}
.t-tech .ds-about-media img{border-radius:24px;border:1px solid var(--line)}
.t-tech .ds-svcs{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px}
.t-tech .ds-svc{background:var(--soft);border:1px solid var(--line);border-radius:var(--r);padding:28px;transition:border-color .25s,background .25s}
.t-tech .ds-svc:hover{border-color:color-mix(in srgb,var(--pl) 60%,transparent);background:rgba(255,255,255,.06)}
.t-tech .ds-svc-ic{display:flex;width:44px;height:44px;border-radius:12px;background:color-mix(in srgb,var(--p) 22%,transparent);border:1px solid color-mix(in srgb,var(--pl) 40%,transparent);align-items:center;justify-content:center;margin-bottom:22px}
.t-tech .ds-svc-ic svg{width:20px;height:20px;stroke:var(--pl);fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}
.t-tech .ds-svc h3{font-size:20px;font-weight:700;letter-spacing:-.02em}
.t-tech .ds-svc p{color:var(--muted);margin-top:8px;font-size:15.5px}
.t-tech .ds-gal img{border-radius:16px;border:1px solid var(--line)}
.t-tech .ds-q{background:var(--soft);border:1px solid var(--line)}
.t-tech .ds-stars{display:block}
.t-tech .ds-cta{padding:clamp(40px,6vw,80px) 0 clamp(80px,10vw,130px)}
.t-tech .ds-cta-panel{border:1px solid var(--line);border-radius:32px;padding:clamp(52px,7vw,96px) 28px;background:radial-gradient(ellipse at 50% 0%,color-mix(in srgb,var(--p) 40%,transparent),transparent 70%),var(--soft)}
.t-tech .ds-cta h2{font-weight:800}
.t-tech .ds-ci{background:var(--soft);border:1px solid var(--line)}
.t-tech .ds-ci svg{stroke:var(--pl)}
.t-tech .ds-foot{border-top:1px solid var(--line);color:var(--muted)}
@media (max-width:860px){.t-tech .ds-svc{display:flex;gap:16px;align-items:center;padding:22px}.t-tech .ds-svc-ic{margin:0;flex-shrink:0}.t-tech .ds-hero-in{grid-template-columns:1fr}}`
};
