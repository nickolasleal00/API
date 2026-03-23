const prompt = require("prompt-sync")();

let nota = prompt("Digite uma nota de 0 a 10: ")

if (nota >=9) {
   console.log("Conceito final: A");
} else if (nota >= 7) {
   console.log("Conceito final: B");
} else if (nota >= 5) {
   console.log("Conceito final: C");
} else if (nota < 5) {
   console.log("Conceito final: D");
}
