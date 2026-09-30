/* Página inicial: cronômetro, pesquisa animada e botões que abrem o criador */
(function(){
  const lp=document.getElementById('lp');if(!lp)return;
  lp.querySelectorAll('[data-cta]').forEach(b=>b.addEventListener('click',()=>window.abrirCriador&&window.abrirCriador()));

  /* cronômetro: só aparece com uma data REAL de encerramento em CONFIG.gratisAte */
  const fim=Date.parse((window.CONFIG||CONFIG).gratisAte||'');
  const box=document.getElementById('lpTimer');
  if(!isNaN(fim)&&fim>Date.now()){
    box.hidden=false;const el=box.querySelector('[data-timer]'),pad=n=>String(n).padStart(2,'0');
    const tick=()=>{let s=Math.max(0,Math.floor((fim-Date.now())/1000));if(!s){box.hidden=true;return}
      const d=Math.floor(s/86400);s%=86400;const h=Math.floor(s/3600);s%=3600;const m=Math.floor(s/60);s%=60;
      el.textContent=(d?d+'d ':'')+pad(h)+':'+pad(m)+':'+pad(s)};
    tick();setInterval(tick,1000);
  }

  /* pesquisa "digitando" */
  const q=document.getElementById('lpQuery');
  const termos=['dentista em salvador','barbearia perto de mim','advogado trabalhista','fisioterapeuta no paiva','salão de beleza aberto agora','eletricista 24 horas'];
  if(q&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    let wi=0,ci=q.textContent.length,del=true;
    (function loop(){const w=termos[wi];ci+=del?-1:1;q.textContent=w.slice(0,ci);let wait=del?30:65;
      if(!del&&ci===w.length){del=true;wait=1800}else if(del&&ci===0){del=false;wi=(wi+1)%termos.length;wait=250}
      setTimeout(loop,wait)})();
  }
})();
