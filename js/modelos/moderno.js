/* Modelo Moderno: Claro, cartões arredondados. Serviços, lojas, tecnologia. */
MODELOS.moderno = {
  // hero: 'full' = foto de fundo | 'split' = texto + foto ao lado
  hero: 'split', bento: true, selo: true,
  nome: 'Moderno',
  // fontes do Google Fonts (parte depois de "css2?")
  fontes: 'family=Plus+Jakarta+Sans:wght@400;500;600;700;800',
  // cores, fontes e raios do modelo (variáveis CSS)
  vars: "--bg:#FFFFFF;--ink:#0F1419;--muted:#5B6472;--line:#E7EAF0;--soft:color-mix(in srgb,var(--p) 7%,#FFFFFF);--fh:'Plus Jakarta Sans',system-ui,sans-serif;--fb:'Plus Jakarta Sans',system-ui,sans-serif;--r:24px;--rb:999px;--ls:-.035em;--nh:76px;",
  // CSS exclusivo do modelo (tudo começa com .t-moderno)
  css: `
.t-moderno .ds-top{color:var(--ink)}
.t-moderno .ds-top.ds-solid,.t-moderno .ds-top.ds-open{background:rgba(255,255,255,.84);backdrop-filter:saturate(1.6) blur(14px);-webkit-backdrop-filter:saturate(1.6) blur(14px);box-shadow:0 1px 0 var(--line)}
.t-moderno .ds-brand{font-weight:800;letter-spacing:-.035em}
.t-moderno .ds-hero{background:var(--soft);padding:calc(var(--nh) + clamp(48px,7vw,96px)) 0 clamp(72px,9vw,120px)}
.t-moderno .ds-hero::before{content:"";position:absolute;width:760px;height:760px;right:-220px;top:-300px;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--p) 30%,transparent),transparent 65%);pointer-events:none}
.t-moderno .ds-hero::after{content:"";position:absolute;width:520px;height:520px;left:-240px;bottom:-280px;border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--p) 18%,transparent),transparent 65%);pointer-events:none}
.t-moderno .ds-hero-in{position:relative;z-index:1;display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(40px,6vw,88px);align-items:center}
.t-moderno .ds-kicker{background:#fff;border:1px solid var(--line);padding:8px 16px 8px 12px;border-radius:999px;font-size:13.5px;box-shadow:0 4px 12px -6px rgba(15,20,25,.14)}
.t-moderno .ds-dot{width:8px;height:8px;border-radius:50%;background:var(--p);box-shadow:0 0 0 4px color-mix(in srgb,var(--p) 22%,transparent)}
.t-moderno .ds-hero h1{font-size:clamp(40px,5.4vw,74px);font-weight:800;letter-spacing:-.045em;line-height:1.02}
.t-moderno .ds-lead{color:var(--muted);opacity:1}
.t-moderno .ds-hero .ds-btn-o{border-color:var(--line);background:#fff;color:var(--ink)!important}
.t-moderno .ds-hero-nums{display:flex;gap:40px;margin-top:52px;padding-top:30px;border-top:1px solid color-mix(in srgb,var(--ink) 10%,transparent);flex-wrap:wrap}
.t-moderno .ds-num strong{font-size:34px;font-weight:800;letter-spacing:-.035em}
.t-moderno .ds-num span{font-size:13.5px;margin-top:6px}
.t-moderno .ds-hero-media{position:relative}
.t-moderno .ds-hero-media>img,.t-moderno .ds-hero-ph{width:100%;aspect-ratio:4/5;max-height:620px;object-fit:cover;border-radius:32px;box-shadow:0 48px 90px -36px rgba(15,20,25,.4)}
.t-moderno .ds-hero-ph{background:linear-gradient(145deg,var(--p),var(--pd));display:flex;align-items:center;justify-content:center;color:var(--pc);font-size:clamp(140px,18vw,260px);font-weight:800;letter-spacing:-.06em;overflow:hidden;line-height:1}
.t-moderno .ds-float{position:absolute;left:-32px;bottom:40px;background:#fff;border-radius:18px;padding:15px 20px 15px 16px;display:flex;gap:14px;align-items:center;box-shadow:0 24px 48px -18px rgba(15,20,25,.35);font-size:14px;color:var(--ink);line-height:1.35}
.t-moderno .ds-float b{display:block;font-weight:700}.t-moderno .ds-float small{color:var(--muted);font-size:12.5px}
.t-moderno .ds-live{width:10px;height:10px;border-radius:50%;background:#22C55E;box-shadow:0 0 0 5px rgba(34,197,94,.2);flex-shrink:0}
.t-moderno .ds-h2{font-weight:800}
.t-moderno .ds-svcs{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.t-moderno .ds-svc{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:30px;display:flex;flex-direction:column;min-height:236px;transition:transform .25s,box-shadow .25s}
.t-moderno .ds-svc:hover{transform:translateY(-4px);box-shadow:0 28px 50px -28px rgba(15,20,25,.3)}
.t-moderno .ds-svc-ic{display:flex;width:50px;height:50px;border-radius:15px;background:var(--soft);align-items:center;justify-content:center;margin-bottom:auto}
.t-moderno .ds-svc-ic svg{width:22px;height:22px;stroke:var(--p);fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.t-moderno .ds-svc h3{font-size:21px;font-weight:700;letter-spacing:-.02em;line-height:1.25;margin-top:32px}
.t-moderno .ds-svc p{color:var(--muted);font-size:15.5px;line-height:1.6;margin-top:8px}
.t-moderno .ds-svc.s2{grid-column:span 2}.t-moderno .ds-svc.s3{grid-column:span 3}
.t-moderno .ds-svc.feat{background:var(--p);color:var(--pc);border-color:var(--p)}
.t-moderno .ds-svc.feat p{color:inherit;opacity:.85}
.t-moderno .ds-svc.feat .ds-svc-ic{background:color-mix(in srgb,var(--pc) 18%,transparent)}
.t-moderno .ds-svc.feat .ds-svc-ic svg{stroke:var(--pc)}
.t-moderno .ds-svc.feat h3{font-size:clamp(24px,2.4vw,30px)}
.t-moderno .ds-about-media img{border-radius:32px}
.t-moderno .ds-gal img{border-radius:20px}
.t-moderno .ds-quotes-sec{background:var(--soft)}
.t-moderno .ds-q{background:#fff;border:1px solid var(--line)}
.t-moderno .ds-stars{display:block}
.t-moderno .ds-cta{padding:clamp(24px,4vw,48px) 0 clamp(76px,10vw,120px)}
.t-moderno .ds-cta-panel{background:linear-gradient(135deg,var(--p),var(--pd));color:var(--pc);border-radius:36px;padding:clamp(56px,8vw,104px) clamp(28px,5vw,72px)}
.t-moderno .ds-cta-panel::after{content:"";position:absolute;width:560px;height:560px;right:-160px;top:-260px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.22),transparent 65%);z-index:0}
.t-moderno .ds-cta h2{font-weight:800}
.t-moderno .ds-cta .ds-btn{background:var(--pc);color:var(--p)!important;border-color:var(--pc)}
.t-moderno .ds-contact{padding-top:0}
.t-moderno .ds-ci{background:var(--soft)}
.t-moderno .ds-foot{border-top:1px solid var(--line);color:var(--muted)}
.t-moderno .ds-foot .ds-brand{color:var(--ink);font-size:19px}
@media (max-width:860px){.t-moderno .ds-svc{min-height:0;flex-direction:row;gap:16px;align-items:center;padding:22px}.t-moderno .ds-svc-ic{margin:0;flex-shrink:0;width:44px;height:44px}.t-moderno .ds-svc h3,.t-moderno .ds-svc.feat h3{margin-top:2px;font-size:19px}.t-moderno .ds-hero-in{grid-template-columns:1fr}.t-moderno .ds-svcs{grid-template-columns:1fr}.t-moderno .ds-svc.s2,.t-moderno .ds-svc.s3{grid-column:auto}.t-moderno .ds-float{left:14px;bottom:18px}.t-moderno .ds-hero-media>img,.t-moderno .ds-hero-ph{aspect-ratio:4/4.2}.t-moderno .ds-hero-nums{gap:28px}}`
};
