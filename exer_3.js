const prompt = require("prompt-sync")();

let ano = prompt("Digite um ano: ");

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
   console.log("É ano bissexto");
} else {
    console.log("Não é ano bissexto!")
}
