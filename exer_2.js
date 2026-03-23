const prompt = require("prompt-sync")();

const senha = "Senac2026@";

let senhaUsuario = prompt("Digite uma senha: ");

if (senhaUsuario != senha) {
    console.log("Senha inválida!")
} else {
    console.log("Senha correta!")
}