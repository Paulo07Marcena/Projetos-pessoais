function exibirCaixadeinformacao(n) {
  caixaDeInformacao.style.display = "block";
  document.getElementById("valor").innerHTML = "";
  document.getElementById("valor").innerHTML = n;
  valor.value = n;
}

function inserirInformacoes() {
  var nomejogador = nome.value;
  var numeroDaCamisa = numero.value;
  var n = valor.value;
  document.getElementById("nome-jogador" + n).innerHTML = nomejogador;
  document.getElementById("numero-jogador" + n).innerHTML = numeroDaCamisa;
  caixaDeInformacao.style.display = "none";
}

function limparInformacoes(n) {
  document.getElementById("nome-jogador" + n).innerHTML = "";
  document.getElementById("numero-jogador" + n).innerHTML = "";
}
