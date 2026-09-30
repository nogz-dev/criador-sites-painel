/* Modelo Impacto: Escuro, letras gigantes. Academias, barbearias, eventos. */
MODELOS.impacto = {
  nome: 'Impacto',
  // fontes do Google Fonts (parte depois de "css2?")
  fontes: 'family=Anton&family=Inter:wght@400;500;600;700',
  // cores, fontes e raios do modelo (variáveis CSS)
  vars: "--bg:#0D0E10;--ink:#F4F4F1;--muted:#9C9EA4;--line:#26282D;--soft:#16171A;--fh:'Anton',Impact,'Arial Narrow',sans-serif;--fb:'Inter',system-ui,sans-serif;--r:0px;--rb:0px;--ls:0;--nh:80px;",
  // CSS exclusivo do modelo (tudo começa com .t-impacto)
  css: `
.t-impacto .ds-top{color:#fff}
.t-impacto .ds-top.ds-solid,.t-impacto .ds-top.ds-open{background:rgba(13,14,16,.92);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 1px 0 var(--line);color:#fff}
.t-impacto .ds-brand{text-transform:uppercase;font-size:28px;letter-spacing:.01em}
.t-impacto .ds-links{text-transform:uppercase;font-size:13px;letter-spacing:.1em;font-weight:600}
.t-impacto .ds-btn{text-transform:uppercase;letter-spacing:.08em;font-weight:700;font-size:14px;padding:18px 30px}
.t-impacto .ds-btn-sm{padding:13px 20px;font-size:13px}
.t-impacto .ds-hero{min-height:min(100vh,980px);display:flex;align-items:flex-end;background:radial-gradient(circle at 78% 28%,color-mix(in srgb,var(--p) 38%,transparent),transparent 55%),#0D0E10}
.t-impacto .ds-hero-bg{position:absolute;inset:0;overflow:hidden}
.t-impacto .ds-hero-bg img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.12) brightness(.9);animation:dsZoom 12s ease-out both}
.t-impacto .ds-hero-bg::before{content:"";position:absolute;inset:0;background:var(--p);mix-blend-mode:multiply;opacity:.5;z-index:1}
.t-impacto .ds-hero-bg::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(13,14,16,.55),rgba(13,14,16,.1) 35%,#0D0E10 98%);z-index:2}
.t-impacto .ds-ghost{position:absolute;top:calc(var(--nh) + 4vh);left:-1vw;font-family:var(--fh);font-size:24vw;line-height:.85;text-transform:uppercase;white-space:nowrap;color:transparent;-webkit-text-stroke:1.5px rgba(255,255,255,.07);pointer-events:none;user-select:none}
.t-impacto .ds-hero-in{position:relative;z-index:3;padding-top:calc(var(--nh) + 96px);padding-bottom:clamp(56px,8vw,100px)}
.t-impacto .ds-hero h1{font-size:clamp(60px,12.5vw,196px);text-transform:uppercase;line-height:.88;font-weight:400;color:#fff;max-width:11ch}
.t-impacto .ds-kicker{color:var(--pl);text-transform:uppercase;letter-spacing:.16em;font-size:13px;font-weight:700}
.t-impacto .ds-kicker::before{content:"";width:32px;height:3px;background:var(--pl)}
.t-impacto .ds-lead{color:#D8D8D4;opacity:1;font-size:clamp(18px,2vw,22px)}
.t-impacto .ds-hero .ds-btn-o{color:#fff!important;border-color:rgba(255,255,255,.4)}
.t-impacto .ds-marq{background:var(--p);color:var(--pc);overflow:hidden;padding:20px 0}
.t-impacto .ds-marq-in{display:flex;width:max-content;animation:dsMarq 32s linear infinite}
.t-impacto .ds-marq span{font-family:var(--fh);text-transform:uppercase;font-size:clamp(22px,2.6vw,34px);line-height:1;white-space:nowrap;display:flex;align-items:center}
.t-impacto .ds-marq span::after{content:"\\2726";font-size:.6em;margin:0 36px;opacity:.75}
@keyframes dsMarq{to{transform:translateX(-50%)}}
.t-impacto .ds-nums{padding:clamp(64px,8vw,104px) 0 0}
.t-impacto .ds-nums-in{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1px;background:var(--line);border:1px solid var(--line)}
.t-impacto .ds-num{background:var(--bg);padding:40px 32px}
.t-impacto .ds-num strong{font-size:clamp(58px,6.4vw,92px);color:var(--pl);font-weight:400}
.t-impacto .ds-num span{text-transform:uppercase;letter-spacing:.08em;font-size:12.5px;font-weight:600}
.t-impacto .ds-h2{text-transform:uppercase;font-size:clamp(46px,7vw,100px);line-height:.92;font-weight:400}
.t-impacto .ds-about-media img{filter:grayscale(1) contrast(1.05)}
.t-impacto .ds-about-media::after{content:"";position:absolute;left:-16px;bottom:-16px;width:45%;height:45%;background:var(--p);z-index:-1}
.t-impacto .ds-about-txt p.ds-big{color:#fff}
.t-impacto .ds-svcs{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line)}
.t-impacto .ds-svc{padding:44px 36px;border-bottom:1px solid var(--line);transition:background .25s,color .25s}
.t-impacto .ds-svc:nth-child(odd){border-right:1px solid var(--line)}
.t-impacto .ds-svc:hover{background:var(--p);color:var(--pc)}
.t-impacto .ds-svc h3{font-family:var(--fh);text-transform:uppercase;font-size:clamp(30px,3.2vw,44px);font-weight:400;line-height:1}
.t-impacto .ds-svc p{color:var(--muted);margin-top:14px;max-width:30em}
.t-impacto .ds-svc:hover p{color:inherit;opacity:.85}
.t-impacto .ds-gal img{filter:grayscale(1);transition:filter .4s}
.t-impacto .ds-gal img:hover{filter:none}
.t-impacto .ds-q{background:var(--soft);border-left:4px solid var(--p)}
.t-impacto .ds-q blockquote{color:#E6E6E2}
.t-impacto .ds-cta{background:var(--p);color:var(--pc);padding:clamp(80px,11vw,150px) 0}
.t-impacto .ds-cta h2{font-size:clamp(58px,10vw,150px);text-transform:uppercase;line-height:.9;font-weight:400}
.t-impacto .ds-cta .ds-btn{background:#0D0E10;color:#fff!important;border-color:#0D0E10}
.t-impacto .ds-ci{background:var(--soft);border:1px solid var(--line)}
.t-impacto .ds-ci svg{stroke:var(--pl)}
.t-impacto .ds-ci dt{text-transform:uppercase;letter-spacing:.08em;font-size:12px}
.t-impacto .ds-foot{border-top:1px solid var(--line);color:var(--muted)}
.t-impacto .ds-foot .ds-brand{color:#fff}
@media (max-width:860px){.t-impacto .ds-svcs{grid-template-columns:1fr}.t-impacto .ds-svc{padding:34px 24px}.t-impacto .ds-svc:nth-child(odd){border-right:0}.t-impacto .ds-about-media::after{left:-10px;bottom:-10px}}`
};
