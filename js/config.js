/*
  Configurações da ferramenta.

  leadWebhook: endereço que recebe os contatos (nome, e-mail e telefone) de quem
  entra no Criador de Sites. Deixe vazio ('') para só guardar no navegador da pessoa.
  Hoje aponta para o painel da DKC, que guarda o contato e mostra em
  Administração > Seu Site Grátis.

  O token na URL fica à vista neste arquivo, que é público — ele não é um segredo,
  só evita que uma varredura qualquer ache a porta. Quem protege de verdade é a
  validação dos campos e o limite por IP do outro lado.

  af: quem indicou. Vem da URL (?af=SUBID1) e é guardado no navegador, para o
  contato continuar amarrado ao afiliado mesmo que a pessoa volte depois.
*/
const CONFIG = {
  leadWebhook: 'https://adm.paineldkc.com/webhook/site?token=sg-61977226b7bbe4c65bf040050acaf036',

  /* liberarWebhook: o painel responde se a pessoa já tem conta no Squarespace,
     e devolve o link de compra do afiliado que a trouxe. Vazio ('') desliga o
     portão e o download fica livre. */
  liberarWebhook: 'https://adm.paineldkc.com/webhook/site/liberar?token=sg-61977226b7bbe4c65bf040050acaf036',

  /* gratisAte: data e hora REAIS em que a criação gratuita termina, no formato
     'AAAA-MM-DDTHH:MM:SS-03:00' (horário de Brasília). Com data preenchida, a faixa
     do topo mostra o cronômetro; vazio ou data passada, o cronômetro some. */
  gratisAte: '2026-10-07T23:59:59-03:00'
};
