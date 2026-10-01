/* Funções de apoio usadas pelo gerador e pela interface */
const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const digits=s=>String(s||'').replace(/\D/g,'');
function slug(s){return (s||'site').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'site'}
function contrast(hex){
  const h=hex.replace('#','');const n=parseInt(h.length===3?h.split('').map(c=>c+c).join(''):h,16);
  const ch=[n>>16&255,n>>8&255,n&255].map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});
  const L=.2126*ch[0]+.7152*ch[1]+.0722*ch[2];
  return L>.42?'#111111':'#FFFFFF';
}
function waLink(n,nome){let d=digits(n);if(!d)return'';if(!(d.startsWith('55')&&d.length>=12))d='55'+d;
  return 'https://wa.me/'+d+'?text='+encodeURIComponent('Olá! Vim pelo site'+(nome?' da '+nome:'')+' e gostaria de mais informações.')}
function lum(hex){const n=parseInt(hex.slice(1),16);const ch=[n>>16&255,n>>8&255,n&255].map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*ch[0]+.7152*ch[1]+.0722*ch[2]}
function splitLines(s){return (s||'').split('\n').map(l=>l.trim()).filter(Boolean).map(l=>{const [a,...b]=l.split('|');return{a:a.trim(),b:b.join('|').trim()}}).filter(x=>x.a)}

/* Números da empresa: aceita "12 anos | de experiência" e também a linha sem barra,
   como "+ 15 anos de experiência" ou "4,9 de nota no Google", separando sozinho
   o número do texto. Também formata milhares (1000 -> 1.000). */
function separarNumero(n){
  let a=n.a,b=n.b;
  if(!b){
    const m=a.match(/^([+\-]?\s*[\d.,]+\s*(?:mil|mi|k|%|x|\+)?)\s+(.+)$/i);
    if(m){a=m[1];b=m[2]}
  }
  a=a.replace(/^([+\-])\s+/,'$1').replace(/\d{4,}/g,x=>Number(x).toLocaleString('pt-BR'));
  return{a:a.trim(),b:(b||'').trim()};
}
