console.log('Hello World!');

// variaveis

var nome = "Bruno";
console.log("Seja bem vindo " + nome);

// recuperar valores de um modules

var valorProduto = 100;
var valorDesconto = 45;

var calcularDesconto = require('../../modules/calcularDesconto');

var TotalDesconto = calcularDesconto(valorProduto,valorDesconto);

console.log('O total do valor com desconto é : R$ ' + TotalDesconto + ",00" )