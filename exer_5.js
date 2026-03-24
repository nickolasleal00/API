const prompt = require("prompt-sync")();

const lista = [];
let totalCompra = 0;

for (let i = 0; i < 3; i++) {
   console.log(`\n--- Produto ${i + 1} ---`);
   let nome = prompt("Digite o nome do produto: ");
   let preco = parseFloat(prompt("Digite o preço do produto: "));
   let quant = parseInt(prompt("Digite a quantidade: "));
  
   let subtotal = preco * quant;
   totalCompra += subtotal;
   
   lista.push({ nome, preco, quant });
}  

console.log("\nEscolha a forma de pagamento:");
console.log(`
1 - À Vista em Dinheiro ou Pix (15% desconto)
2 - À Vista no cartão de crédito (10% desconto)
3 - Parcelado em 2x (Preço normal)
4 - Parcelado em 3x ou mais (10% juros)
0 - Sair
`);

let escolha = prompt("Escolha sua opção: ");
let preco_final = 0;
let labelPagamento = "";

if (escolha == '1') {
    preco_final = totalCompra * 0.85;
    labelPagamento = "Pagamento à vista no Dinheiro/Pix";
} else if (escolha == '2') {
    preco_final = totalCompra * 0.90;
    labelPagamento = "Pagamento à vista no cartão de crédito";
} else if (escolha == '3') {
    preco_final = totalCompra;
    labelPagamento = "Pagamento parcelado em 2x";
} else if (escolha == '4') {
    preco_final = totalCompra * 1.10;
    labelPagamento = "Pagamento parcelado 3x+ (com juros)";
}

if (escolha !== '0') {
    console.log("\n--- RESUMO DA COMPRA ---");
    

    lista.forEach((item, index) => {
        console.log(`Produto ${index + 1} - R$ ${item.preco.toFixed(2)} - ${item.quant} unidades`);
    });


    console.log(`Total: R$ ${totalCompra.toFixed(2)}`);
    console.log(`> ${labelPagamento}`);
    console.log(`Valor Final: R$ ${preco_final.toFixed(2)}`);
}
