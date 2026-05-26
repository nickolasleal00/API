const pedidos = require('../store/pedidoStore');
const {
  validarPedido,
  validarCodigo,
  validarSituacao
} = require('../utils/validacoes');

function criarPedido(req, res) {
  const dados = req.body;

  const erros = validarPedido(dados);

  if (erros.length > 0) {
    return res.status(422).json({ erros });
  }

  const novoPedido = {
    codigo: pedidos.length + 1,
    dataHora: new Date(),

    clienteCpf: dados.clienteCpf.trim(),
    clienteNome: dados.clienteNome.trim(),

    produtoNome: dados.produtoNome.trim(),

    produtoPreco: Number(dados.produtoPreco),

    situacao: 'aberto'
  };

  pedidos.push(novoPedido);

  return res.status(201).json({
    mensagem: 'Pedido criado com sucesso.',
    pedido: novoPedido
  });
}

function listarPedidos(req, res) {

  const { situacao } = req.query;

  let lista = pedidos;

  if (situacao) {

    const erros = validarSituacao(situacao);

    if (erros.length > 0) {
      return res.status(422).json({ erros });
    }

    lista = pedidos.filter(
      (p) => p.situacao === situacao.toLowerCase()
    );
  }

  const resposta = lista.map((pedido) => ({
    codigo: pedido.codigo,
    dataHora: pedido.dataHora,
    clienteNome: pedido.clienteNome,
    produtoNome: pedido.produtoNome,
    situacao: pedido.situacao,
    valorTotal: pedido.produtoPreco
  }));

  return res.status(200).json(resposta);
}

function buscarPedido(req, res) {

  const codigo = Number(req.params.codigo);

  const erros = validarCodigo(codigo);

  if (erros.length > 0) {
    return res.status(422).json({ erros });
  }

  const pedido = pedidos.find((p) => p.codigo === codigo);

  if (!pedido) {
    return res.status(404).json({
      mensagem: 'Pedido não encontrado.'
    });
  }

  return res.status(200).json({
    codigo: pedido.codigo,
    dataHora: pedido.dataHora,
    clienteCpf: pedido.clienteCpf,
    clienteNome: pedido.clienteNome,
    produtoNome: pedido.produtoNome,
    situacao: pedido.situacao,
    valorTotal: pedido.produtoPreco
  });
}

function atualizarPedido(req, res) {

  const codigo = Number(req.params.codigo);

  const errosCodigo = validarCodigo(codigo);

  if (errosCodigo.length > 0) {
    return res.status(422).json({ erros: errosCodigo });
  }

  const pedido = pedidos.find((p) => p.codigo === codigo);

  if (!pedido) {
    return res.status(404).json({
      mensagem: 'Pedido não encontrado.'
    });
  }

  const { situacao } = req.body;

  const errosSituacao = validarSituacao(situacao);

  if (errosSituacao.length > 0) {
    return res.status(422).json({
      erros: errosSituacao
    });
  }

  pedido.situacao = situacao.toLowerCase();

  return res.status(200).json({
    mensagem: 'Situação atualizada com sucesso.',
    pedido
  });
}

function excluirPedido(req, res) {

  const codigo = Number(req.params.codigo);

  const erros = validarCodigo(codigo);

  if (erros.length > 0) {
    return res.status(422).json({ erros });
  }

  const indice = pedidos.findIndex(
    (p) => p.codigo === codigo
  );

  if (indice === -1) {
    return res.status(404).json({
      mensagem: 'Pedido não encontrado.'
    });
  }

  pedidos.splice(indice, 1);

  return res.status(200).json({
    mensagem: 'Pedido excluído com sucesso.'
  });
}

module.exports = {
  criarPedido,
  listarPedidos,
  buscarPedido,
  atualizarPedido,
  excluirPedido
};
