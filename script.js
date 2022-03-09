function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico / 5;
  console.log(valorEmReal);
  var valorEmReal2 = valorEmDolarNumerico / 5.54;
  var valorEmReal2 = valorEmReal2.toFixed(2)
  console.log(valorEmReal2);
  var valorEmReal3 = valorEmDolarNumerico / 0.092784;
  var valorEmReal3 = valorEmReal3.toFixed(4)
  console.log(valorEmReal3);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "É o equivalente a U$" + valorEmReal;
  var elementoValorConvertido1 = document.getElementById("valorConvertido1");
  var valorConvertido1 = "É o equivalente a € " + valorEmReal2;
  var elementoValorConvertido2 = document.getElementById("valorConvertido2");
  var valorConvertido2 = "É o equivalente a ฿  " + valorEmReal3;

  elementoValorConvertido.innerHTML = valorConvertido;
  elementoValorConvertido1.innerHTML = valorConvertido1;
  elementoValorConvertido2.innerHTML = valorConvertido2;
}

