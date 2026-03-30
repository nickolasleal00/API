const produtoRepo = require('./repository/produto_repository')



produtoRepo.inserir("Mouse","Periféricos",150.00);
produtoRepo.inserir( "Monitor","Periféricos",600.00);
produtoRepo.inserir("Teclado","Periféricos",300.00);
produtoRepo.inserir("Placa mãe","Hardware",900.00);
produtoRepo.inserir("Processador","Hardware",700.00);
produtoRepo.inserir("Placa de vídeo","Hardware", 1200.00);
//produtoRepo.listarProdutos();
//produtoRepo.buscarProduto(1);
//produtoRepo.atualizarProduto(1, {preco: 400});
//produtoRepo.atualizarProduto(3, {nome: "Gabinete", preco: 500});
//produtoRepo.listarProdutos();
//produtoRepo.deletarProduto(2);
//console.log(produtoRepo.pesquisaCategoria("Periféricos"));
//console.log(produtoRepo.pesquisaNome("Tec"))
