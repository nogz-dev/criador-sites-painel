/* Modelo Minimalista: editorial, muito espaço em branco. Arquitetos, fotógrafos, consultores. */
MODELOS.minimal = {
  hero: 'split',
  nome: 'Minimalista',
  fontes: 'family=Inter+Tight:wght@400;500;600&family=Inter:wght@400;500;600',
  vars: "--bg:#FFFFFF;--ink:#0B0B0C;--muted:#6B6B70;--line:#E6E6E8;--soft:#F5F5F6;--fh:'Inter Tight','Inter',system-ui,sans-serif;--fb:'Inter',system-ui,sans-serif;--r:0px;--rb:0px;--ls:-.045em;--nh:72px;",
  css: `
.t-minimal .ds-top{color:var(--ink);background:#fff;box-shadow:0 1px 0 var(--line)}
.t-minimal .ds-top.ds-solid{background:rgba(255,255,255,.96);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.t-minimal .ds-brand{font-weight:600;letter-spacing:-.03em;font-size:20px}
.t-minimal .ds-links{font-weight:400;font-size:14px}
.t-minimal .ds-btn{font-weight:500;padding:15px 24px}
.t-minimal .ds-hero{padding:calc(var(--nh) + clamp(56px,8vw,120px)) 0 0}
.t-minimal .ds-hero-in{display:block}
.t-minimal .ds-kicker{font-weight:500;color:var(--muted);text-transform:uppercase;letter-spacing:.14em;font-size:12px}
.t-minimal .ds-hero h1{font-size:clamp(48px,8.4vw,132px);font-weight:500;letter-spacing:-.055em;line-height:.95;max-width:11em}
.t-minimal .ds-lead{color:var(--muted);opacity:1;max-width:30em}
.t-minimal .ds-hero .ds-btn-o{border-color:var(--ink)}
.t-minimal .ds-hero-nums{gap:0;margin-top:64px;border-top:1px solid var(--ink)}
.t-minimal .ds-hero-nums .ds-num{flex:1;min-width:150px;padding:22px 24px 0 0}
.t-minimal .ds-num strong{font-size:44px;font-weight:500;letter-spacing:-.045em}
.t-minimal .ds-hero-media{margin-top:clamp(48px,6vw,80px)}
.t-minimal .ds-hero-media>img,.t-minimal .ds-hero-ph{aspect-ratio:21/9}
.t-minimal .ds-hero-ph{font-weight:500;letter-spacing:-.06em;font-size:clamp(140px,22vw,320px)}
.t-minimal .ds-h2{font-weight:500}
.t-minimal .ds-sec{border-top:1px solid var(--line)}
.t-minimal .ds-svcs{border-top:1px solid var(--ink);counter-reset:sv}
.t-minimal .ds-svc{counter-increment:sv;display:grid;grid-template-columns:80px 1fr;gap:16px;padding:30px 0;border-bottom:1px solid var(--line)}
.t-minimal .ds-svc::before{content:counter(sv,decimal-leading-zero);font-size:14px;color:var(--pl);font-weight:600;padding-top:10px}
.t-minimal .ds-svc>div{display:grid;grid-template-columns:1fr 1.2fr;gap:24px;align-items:baseline}
.t-minimal .ds-svc h3{font-family:var(--fh);font-size:clamp(24px,2.6vw,34px);font-weight:500;letter-spacing:-.035em;line-height:1.1}
.t-minimal .ds-svc p{color:var(--muted)}
.t-minimal .ds-about-media img{aspect-ratio:4/5}
.t-minimal .ds-q{border-top:2px solid var(--ink);padding:26px 0 0}
.t-minimal .ds-q blockquote{font-family:var(--fh);font-size:22px;letter-spacing:-.02em;line-height:1.4}
.t-minimal .ds-av{background:var(--soft);color:var(--ink)}
.t-minimal .ds-cta{border-top:1px solid var(--line);padding:clamp(80px,11vw,150px) 0;text-align:left}
.t-minimal .ds-cta h2{font-size:clamp(48px,7vw,110px);font-weight:500;letter-spacing:-.055em;line-height:.95}
.t-minimal .ds-cta p{margin-left:0;color:var(--muted);opacity:1}
.t-minimal .ds-ci{border-top:1px solid var(--ink);padding:22px 0 0}
.t-minimal .ds-ci svg{display:none}
.t-minimal .ds-ci dt{text-transform:uppercase;letter-spacing:.12em;font-size:11.5px}
.t-minimal .ds-foot{border-top:1px solid var(--line);color:var(--muted)}
@media (max-width:860px){.t-minimal .ds-svc{grid-template-columns:44px 1fr}.t-minimal .ds-svc>div{grid-template-columns:1fr;gap:6px}.t-minimal .ds-hero-media>img,.t-minimal .ds-hero-ph{aspect-ratio:4/3}}`
};
