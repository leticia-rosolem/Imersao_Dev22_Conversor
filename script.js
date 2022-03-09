function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);
  var valorEmReal2 = valorEmDolarNumerico * 5.54;
  console.log(valorEmReal2);
  var valorEmReal3 = valorEmDolarNumerico * 0.092784;
  console.log(valorEmReal3.toFixed(4));

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "A Conversão de Dólar para real é de R$ " + valorEmReal;
  var elementoValorConvertido1 = document.getElementById("valorConvertido1");
  var valorConvertido1 =
    "A Conversão de Euro para real é de R$ " + valorEmReal2;
  var elementoValorConvertido2 = document.getElementById("valorConvertido2");
  var valorConvertido2 =
    "A Conversão de Bitcoin para real é de R$ " + valorEmReal3;

  elementoValorConvertido.innerHTML = valorConvertido;
  elementoValorConvertido1.innerHTML = valorConvertido1;
  elementoValorConvertido2.innerHTML = valorConvertido2;
}

