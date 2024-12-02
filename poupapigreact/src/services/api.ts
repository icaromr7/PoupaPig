import axios from "axios";

// Configuração do Axios
const api = axios.create({
  baseURL: "http://localhost:5145/api",
  headers: {
    "Content-Type": "application/json",
  },
});

//ASSINATURAS:
export const getAssinaturas = async () => {
  try {
    const response = await api.get("/Assinatura");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar assinaturas:", error);
    throw error;
  }
};
// export const getAssinaturaById = async (id: string | number) => {
//   const response = await api.get(`/Assinatura/${id}`);
//   return response.data;
// };

//BANCOS:
export const getBancos = async () => {
  try {
    const response = await api.get("/Banco");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar bancos:", error);
    throw error;
  }
};
export const getBancoById = async (id: number) => {
  try {
    const response = await api.get(`/Banco/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar banco:", error);
    throw error;
  }
};

//CARTÕES:
export const getCartoes = async () => {
  const response = await api.get("/Cartao");
  return response.data;
};
// export const getCartaoById = async (id: string | number) => {
//   const response = await api.get(`/Cartao/${id}`);
//   return response.data;
// };

//CATEGORIA:
export const postCategoria = async (dados: any) => {
  try {
    const response = await api.post("/Categoria", dados, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao postar categoria:", error);
    throw error;
  }
};
export const putCategoria = async (dados: any) => {
  console.log("dados", dados);
  try {
    const response = await api.put("/Categoria", dados, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao editar categoria:", error);
    throw error;
  }
};
export const deleteCategoria = async (id: number) => {
  try {
    const response = await api.delete(`/Categoria/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir categoria:", error);
    throw error;
  }
};
export const getCategoriaById = async (id: number) => {
  try {
    const response = await api.get(`/Categoria/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar categoria:", error);
    throw error;
  }
};
export const getCategoriasUsuario = async (id: number) => {
  try {
    const response = await api.get(`/Categoria/usuario/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    throw error;
  }
};

//CLASSE:
// export const getClasse = async () => {
//   const response = await api.get("/Classe");
//   return response.data;
// };
// export const getClasseById = async (id: string | number) => {
//   const response = await api.get(`/Classe/${id}`);
//   return response.data;
// };

//LOGIN:
export const getLogin = async (dados: { email: string; senha: string }) => {
  try {
    console.log("entrei", dados);
    const response = await api.post("/login", dados);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};

//META_INVESTIMENTO
export const postMetaInvestimento = async (dados: any) => {
  try {
    const response = await api.post("/MetaInvestimento", dados, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer postar investimento/meta", error);
    throw error;
  }
};
export const putMetaInvestimento = async (dados: any) => {
  try {
    const response = await api.put("/MetaInvestimento", dados, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao postar investimento/meta", error);
    throw error;
  }
};
export const getMetaInvestimento = async () => {
  try {
    const response = await api.get("/MetaInvestimento");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar investimento/meta", error);
    throw error;
  }
};
export const deleteMetaInvestimento = async (id: number) => {
  try {
    const response = await api.delete(`/MetaInvestimento/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar investimento/meta", error);
    throw error;
  }
};
export const getMetaInvestimentoById = async (id: number) => {
  try {
    const response = await api.get(`/MetaInvestimento/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar investimento/meta", error);
    throw error;
  }
};
export const getMetaInvestimentoDetalhes = async (id: number) => {
  try {
    const response = await api.get(`/MetaInvestimento/detalhes/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar investimento/meta", error);
    throw error;
  }
};

//NOME TIPO INVESTIMENTO:
export const getNomeTipoInvestimento = async () => {
  try {
    const response = await api.get("/NomeTipoInvestimento");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar tipos de investimentos", error);
    throw error;
  }
};
export const getNomeTipoInvestimentoById = async (id: number) => {
  try {
    const response = await api.get(`/NomeTipoInvestimento/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar tipo de investimento", error);
    throw error;
  }
};

//NOME TIPO OBJETIVO:
export const getNomeTipoObjetivo = async () => {
  try {
    const response = await api.get("/NomeTipoObjetivo");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar tipos de objetivos", error);
    throw error;
  }
};
export const getNomeTipoObjetivoById = async (id: number) => {
  try {
    const response = await api.get(`/NomeTipoObjetivo/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar tipo de objetivo", error);
    throw error;
  }
};

//PERIDIOCIDADE TRANSACAO
export const getPeriodicidadeTransacao = async () => {
  try {
    const response = await api.get("/PeriodicidadeTransacao");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar tipos de objetivos", error);
    throw error;
  }
};
export const getPeriodicidadeTransacaoById = async (id: number) => {
  try {
    const response = await api.get(`/PeriodicidadeTransacao/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar tipo de objetivo", error);
    throw error;
  }
};

//QUESTIONARIO
export const postQuestionario = async (dados: any) => {
  try {
    const response = await api.post("/Questionario", dados, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao postar o questionário:", error);
    throw error;
  }
};
export const putQuestionario = async (dados: any) => {
  try {
    const response = await api.put("/Questionario", dados, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao postar o questionário:", error);
    throw error;
  }
};
// export const getQuestionario = async () => {
//   const response = await api.get("/Questionario");
//   return response.data;
// };
// export const deleteQuestionario = async (id: string | number) => {
//   const response = await api.delete(`/Questionario/${id}`);
//   return response.data;
// };
export const getQuestionarioById = async (id: number) => {
  try {
    const response = await api.get(`/Questionario/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};

//RECORRENCIA:
export const getRecorrencia = async () => {
  try {
    const response = await api.get("/Recorrencia");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar recorrências:", error);
    throw error;
  }
};
export const getRecorrenciaById = async (id: number) => {
  try {
    const response = await api.get(`/Recorrencia/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar recorrência:", error);
    throw error;
  }
};

//SENTIMENTO TRANSACAO:
export const getSentimentoTransacao = async () => {
  try {
    const response = await api.get("/SentimentoTransacao");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
export const getSentimentoTransacaoById = async (id: number) => {
  try {
    const response = await api.get(`/SentimentoTransacao/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dado:", error);
    throw error;
  }
};

//SITUACAO TRANSACAO:
export const getSituacaoTransacao = async () => {
  try {
    const response = await api.get("/SituacaoTransacao");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
export const getSituacaoTransacaoById = async (id: number) => {
  try {
    const response = await api.get(`/SituacaoTransacao/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dado:", error);
    throw error;
  }
};

//TIPO PAGAMENTO:
export const getTipoPagamento = async () => {
  try {
    const response = await api.get("/TipoPagamento");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
export const getTipoPagamentoById = async (id: number) => {
  try {
    const response = await api.get(`/TipoPagamento/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};

//TIPO TRANSACAO:
export const getTipoTransacao = async () => {
  try {
    const response = await api.get("/TipoTransacao");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
export const getTipoTransacaoById = async (id: number) => {
  try {
    const response = await api.get(`/TipoTransacao/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};

//TRANSACAO
export const postTransacao = async (dados: any) => {
  try {
    const response = await api.post("/Transacao", dados, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao postar dados:", error);
    throw error;
  }
};
// export const getTransacao = async () => {
//   const response = await api.get("/Transacao");
//   return response.data;
// };
// export const getTransacaoById = async (id: number) => {
//   const response = await api.get(`/Transacao/${id}`);
//   return response.data;
// };
export const putTransacao = async (id: number) => {
  try {
    const response = await api.put(`/Transacao/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao editar dados:", error);
    throw error;
  }
};
export const deleteTransacao = async (id: number) => {
  try {
    const response = await api.delete(`/Transacao/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir dados:", error);
    throw error;
  }
};
// export const getTransacaoById = async (id: string | number) => {
//   const response = await api.get(`/Transacao/${id}`);
//   return response.data;
// };
export const getSaldo = async (id: number) => {
  try {
    const response = await api.get(`/Transacao/saldo/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
// export const getGastosPorCategoria = async (id: number) => {
//   const response = await api.get(`/Transacao/gastos-por-categorias/${id}`);
//   return response.data;
// };
export const getGanhosVsGastos = async (id: number) => {
  try {
    const response = await api.get(`/Transacao/ganhos-vs-gastos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
// export const getDespesasFixasVsVariaveis = async (id: number) => {
//   const response = await api.get(
//     `/Transacao/despesas-fixas-vs-variaveis/${id}`
//   );
//   return response.data;
// };
// export const getGastosPorDiaDaSemana = async (id: number) => {
//   const response = await api.get(`/Transacao/gastos-por-dias-da-semana/${id}`);
//   return response.data;
// };
// export const getGastosCartaoCreditoVsDinheiro = async (id: number) => {
//   const response = await api.get(
//     `/Transacao/gastos-cartao-credito-vs-dinheiro/${id}`
//   );
//   return response.data;
// };
// // export const getGastosPorMes = async (id: number) => {
//   const response = await api.get(`/Transacao/gastos-por-mes/${id}`);
//   return response.data;
// };
// export const getSaldoAcumulado = async (id: number) => {
//   const response = await api.get(`/Transacao/saldo-acumulado/${id}`);
//   return response.data;
// };
// export const getEvolucaoMetasInvestimentos = async (id: number) => {
//   const response = await api.get(
//     `/Transacao/evolucao-metas-investimentos/${id}`
//   );
//   return response.data;
// };
// export const getComparacaoGastosMensairAnuais = async (id: number) => {
//   const response = await api.get(
//     `/Transacao/comparacao-gastos-mensais-anuais/${id}`
//   );
//   return response.data;
// };
// export const getGastosTotaisPeriodo = async (id: number) => {
//   const response = await api.get(`/Transacao/gastos-totais-periodo/${id}`);
//   return response.data;
// };
// export const getReceitasTotais = async (id: number) => {
//   const response = await api.get(`/Transacao/receitas-totais/${id}`);
//   return response.data;
// };
// export const getProgressoMetasFinanceiras = async (id: number) => {
//   const response = await api.get(
//     `/Transacao/progresso-metas-financeiras/${id}`
//   );
//   return response.data;
// };
// export const getRetornosInvestimentos = async (id: number) => {
//   const response = await api.get(
//     `/Transacao/retornos-investimentos/${id}`
//   );
//   return response.data;
// };
// export const getHistoricoTransacoes = async (id: number) => {
//   const response = await api.get(
//     `/Transacao/historico-transacoes/${id}`
//   );
//   return response.data;
// };
// export const getPrevisoesGastos = async (id: number) => {
//   const response = await api.get(
//     `/Transacao/previsoes-gastos/${id}`
//   );
//   return response.data;
// };
// export const getComparacaoAnual = async (id: number) => {
//   const response = await api.get(
//     `/Transacao/comparacao-anual/${id}`
//   );
//   return response.data;
// };
export const getValorOrcado = async (id: number) => {
  try {
    const response = await api.get(`/Transacao/valor-orcado/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
export const getOrcamentos = async (id: number) => {
  try {
    const response = await api.get(`/Transacao/orcamento/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
export const getLancamentos = async (id: number) => {
  try {
    const response = await api.get(`/Transacao/lancamento/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
export const getLancamentosCompletos = async (id: number) => {
  try {
    const response = await api.get(`/Transacao/lancamentos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
export const getInvestimentos = async (id: number) => {
  try {
    const response = await api.get(`/Transacao/investimento/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
export const getRetornoInvestimentos = async (id: number) => {
  try {
    const response = await api.get(`/Transacao/retornos-investimentos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};

//TRANSACAO META INVESTIMENTO
// export const postTransacaoMetaInvestimento = async () => {
//   const response = await api.post("/TransacaoMetaInvestimento");
//   return response.data;
// };
// export const putTransacaoMetaInvestimento = async () => {
//   const response = await api.put("/TransacaoMetaInvestimento");
//   return response.data;
// };
// export const getTransacaoMetaInvestimento = async () => {
//   const response = await api.get("/TransacaoMetaInvestimento");
//   return response.data;
// };
// export const deleteTransacaoMetaInvestimento = async (id: string | number) => {
//   const response = await api.delete(`/TransacaoMetaInvestimento/${id}`);
//   return response.data;
// };
// export const getTransacaoMetaInvestimentoById = async (id: string | number) => {
//   const response = await api.get(`/TransacaoMetaInvestimento/${id}`);
//   return response.data;
// };

//USUARIO
export const postUsuario = async (dados: {
  nome_completo: string;
  email: string;
  senha: string;
  // foto_perfil: string;
}) => {
  try {
    const response = await api.post("/Usuario", dados);
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};
export const putUsuario = async (dados: any, id: number) => {
  try {
    const response = await api.put(`/Usuario/${id}`, dados, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao editar dados de usuário:", error);
    throw error;
  }
};
// export const getUsuario = async () => {
//   const response = await api.get("/Usuario");
//   return response.data;
// };
// export const deleteUsuario = async (id: string | number) => {
//   const response = await api.delete(`/Usuario/${id}`);
//   return response.data;
// };
export const getUsuarioById = async (id: number) => {
  try {
    const response = await api.get(`/Usuario/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    throw error;
  }
};

//USUARIO ASSINATURA
export const postUsuarioAssinatura = async (dados: any) => {
  try {
    const response = await api.post("/UsuarioAssinatura", dados, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao salvar assinatura:", error);
    throw error;
  }
};
// export const putUsuarioAssinatura = async () => {
//   const response = await api.put("/UsuarioAssinatura");
//   return response.data;
// };
// export const getUsuarioAssinatura = async () => {
//   const response = await api.get("/UsuarioAssinatura");
//   return response.data;
// };
// export const deleteUsuarioAssinatura = async (id: string | number) => {
//   const response = await api.delete(`/UsuarioAssinatura/${id}`);
//   return response.data;
// };
// export const getUsuarioAssinaturaById = async (id: string | number) => {
//   const response = await api.get(`/UsuarioAssinatura/${id}`);
//   return response.data;
// };

//USUARIO BANCO
export const postUsuarioBanco = async (dados: any) => {
  try {
    const response = await api.post("/UsuarioBanco", dados, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao salvar cartão:", error);
    throw error;
  }
};
// export const putUsuarioBanco = async () => {
//   const response = await api.put("/UsuarioBanco");
//   return response.data;
// };
// export const getUsuarioBanco = async () => {
//   const response = await api.get("/UsuarioBanco");
//   return response.data;
// };
// export const deleteUsuarioBanco = async (id: string | number) => {
//   const response = await api.delete(`/UsuarioBanco/${id}`);
//   return response.data;
// };
// export const getUsuarioBancoById = async (id: string | number) => {
//   const response = await api.get(`/UsuarioBanco/${id}`);
//   return response.data;
// };

//USUARIO CARTAO
export const postUsuarioCartao = async (dados: any) => {
  try {
    const response = await api.post("/UsuarioCartao", dados, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao salvar cartão:", error);
    throw error;
  }
};
// export const putUsuarioCartao = async () => {
//   const response = await api.put("/UsuarioCartao");
//   return response.data;
// };
// export const getUsuarioCartao = async () => {
//   const response = await api.get("/UsuarioCartao");
//   return response.data;
// };
// export const deleteUsuarioCartao = async (id: string | number) => {
//   const response = await api.delete(`/UsuarioCartao/${id}`);
//   return response.data;
// };
// export const getUsuarioCartaoById = async (id: string | number) => {
//   const response = await api.get(`/UsuarioCartao/${id}`);
//   return response.data;
// };

//USUÁRIO CLASSE
export const getUsuarioClasse = async (id: number) => {
  try {
    const response = await api.get(`/UsuarioClasse/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
// export const getUsuarioClasseById = async (id: string | number) => {
//   const response = await api.get(`/UsuarioClasse/${id}`);
//   return response.data;
// };

export default api;
