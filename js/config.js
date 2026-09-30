/*
  Configurações da ferramenta.

  leadWebhook: endereço que recebe os contatos (nome, e-mail e telefone) de quem
  entra no Criador de Sites. Deixe vazio ('') para só guardar no navegador da pessoa.
  O envio segue o formato da DataCrazy: {"data":{"name","email","phone"}},
  com telefone só em dígitos no padrão 55DDDNUMERO.
*/
const CONFIG = {
  leadWebhook: '',

  /* gratisAte: data e hora REAIS em que a criação gratuita termina, no formato
     'AAAA-MM-DDTHH:MM:SS-03:00' (horário de Brasília). Com data preenchida, a faixa
     do topo mostra o cronômetro; vazio ou data passada, o cronômetro some. */
  gratisAte: ''
};
