let produtos = [];
let proximoId = 1;

function inserir (nome, categoria, preco){
    const novoProduto = {
        id: proximoId++,
        nome: nome,
        categoria: categoria,
        preco: preco
    };
    
    produtos.push(novoProduto);
}

function listarProdutos() {
    console.log("Lista de produtos: ");
    console.table(produtos);
    return produtos;
}

function buscarProduto(id){
    let idEncontrado = produtos.findIndex(p => p.id === id);
    if (idEncontrado !== -1) {
        console.log(`Produto encontrado na posição: ${idEncontrado}`);
        console.log(produtos[idEncontrado]); 
    } else {
        console.log("Produto não encontrado.");
    }
}


function atualizarProduto(id, novoDados) {
    const index = produtos.findIndex(p => p.id === id);
    if (index !== -1){
    produtos[index] = {...produtos[index], ...novoDados};
    console.log(`Produto ${id}`, produtos[index]);
    } else {
        console.log(`Produto ${id} não encontrado!`);
    }
}

function deletarProduto(indiceDeletavel) {
    const remover = produtos.splice(indiceDeletavel,1);
    console.log(`Produto removido com sucesso!`);
    console.table(produtos)
}

function pesquisaCategoria(categoria) {
    return produtos.filter(p => p.categoria === categoria);

}


function pesquisaNome(palavraChave) {
    const termo = palavraChave;
    return produtos.filter(p => {
    return p.nome.includes(termo);
    });
}

module.exports = {
    inserir,
    listarProdutos,
    buscarProduto,
    atualizarProduto,
    deletarProduto,
    pesquisaCategoria,
    pesquisaNome
};