function validarPedido(dados) {

  const erros = [];

  // CPF
  if (!dados.clienteCpf) {

    erros.push({
      campo: 'clienteCpf',
      regra: 'R01',
      mensagem: 'CPF obrigatório.'
    });

  } else {

    const cpf = String(dados.clienteCpf).trim();

    if (!/^\d{9}$/.test(cpf)) {

      erros.push({
        campo: 'clienteCpf',
        regra: 'R02',
        mensagem: 'CPF deve possuir 9 números.'
      });
    }
  }

  // Nome cliente
  if (!dados.clienteNome) {

    erros.push({
      campo: 'clienteNome',
      regra: 'R03',
      mensagem: 'Nome obrigatório.'
    });

  } else if (
    dados.clienteNome.trim().length < 5
  ) {

    erros.push({
      campo: 'clienteNome',
      regra: 'R04',
      mensagem: 'Nome deve possuir pelo menos 5 caracteres.'
    });
  }

  // Produto
  if (!dados.produtoNome) {

    erros.push({
      campo: 'produtoNome',
      regra: 'R05',
      mensagem: 'Produto obrigatório.'
    });

  } else if (
    dados.produtoNome.trim().length < 5
  ) {

    erros.push({
      campo: 'produtoNome',
      regra: 'R06',
      mensagem: 'Produto deve possuir pelo menos 5 caracteres.'
    });
  }

  // Preço
  if (dados.produtoPreco === undefined) {

    erros.push({
      campo: 'produtoPreco',
      regra: 'R07',
      mensagem: 'Preço obrigatório.'
    });

  } else if (
    Number(dados.produtoPreco) <= 0
  ) {

    erros.push({
      campo: 'produtoPreco',
      regra: 'R08',
      mensagem: 'Preço deve ser positivo.'
    });
  }

  return erros;
}

function validarCodigo(codigo) {

  const erros = [];

  if (!codigo) {

    erros.push({
      campo: 'codigo',
      regra: 'R01',
      mensagem: 'Código obrigatório.'
    });

  } else if (isNaN(codigo)) {

    erros.push({
      campo: 'codigo',
      regra: 'R02',
      mensagem: 'Código deve ser numérico.'
    });
  }

  return erros;
}

function validarSituacao(situacao) {

  const erros = [];

  const situacoesValidas = [
    'aberto',
    'pago',
    'finalizado'
  ];

  if (!situacao) {

    erros.push({
      campo: 'situacao',
      regra: 'R03',
      mensagem: 'Situação obrigatória.'
    });

  } else if (
    !situacoesValidas.includes(
      situacao.toLowerCase()
    )
  ) {

    erros.push({
      campo: 'situacao',
      regra: 'R04',
      mensagem: 'Situação inválida.'
    });
  }

  return erros;
}

module.exports = {
  validarPedido,
  validarCodigo,
  validarSituacao
};
