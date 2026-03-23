const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número de apenas 3 dígitos: "));

numero_string = String(numero).padStart(3, '0');

console.log("Centena:", numero_string[0]);
console.log("Dezena:", numero_string[1]);
console.log("Unidade:", numero_string[2]);