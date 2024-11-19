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
  const response = await api.get("/Assinatura");
  return response.data;
};
export const getAssinaturaById = async (id: string | number) => {
  const response = await api.get(`/Assinatura/${id}`);
  return response.data;
};

//BANCOS:
export const getBancos = async () => {
  const response = await api.get("/Banco");
  return response.data;
};
export const getBancoById = async (id: string | number) => {
  const response = await api.get(`/Banco/${id}`);
  return response.data;
};

//CARTÕES:
export const getCartoes = async () => {
  const response = await api.get("/Cartao");
  return response.data;
};
export const getCartaoById = async (id: string | number) => {
  const response = await api.get(`/Cartao/${id}`);
  return response.data;
};

//CATEGORIA PADRÃO:
export const getCategoriaPadrao = async () => {
  const response = await api.get("/CategoriaPadrao");
  return response.data;
};
export const getCategoriaPadraoById = async (id: string | number) => {
  const response = await api.get(`/CategoriaPadrao/${id}`);
  return response.data;
};

//CATEGORIA PERSONALIZADA:
export const postCategoriaPersonalizada = async () => {
  const response = await api.post("/CategoriaPersonalizada");
  return response.data;
};
export const putCategoriaPersonalizada = async () => {
  const response = await api.put("/CategoriaPersonalizada");
  return response.data;
};
export const getCategoriaPersonalizada = async () => {
  const response = await api.get("/CategoriaPersonalizada");
  return response.data;
};
export const deleteCategoriaPersonalizada = async (id: string | number) => {
  const response = await api.delete(`/CategoriaPersonalizada/${id}`);
  return response.data;
};
export const getCategoriaPersonalizadaById = async (id: string | number) => {
  const response = await api.get(`/CategoriaPersonalizada/${id}`);
  return response.data;
};

//CLASSE:
export const getClasse = async () => {
  const response = await api.get("/Classe");
  return response.data;
};
export const getClasseById = async (id: string | number) => {
  const response = await api.get(`/Classe/${id}`);
  return response.data;
};

//LOGIN:
export const getLogin = async (dados: { email: string; senha: string }) => {
  try {
    const response = await axios.get("/login", {
      params: dados,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};
//META_INVESTIMENTO
export const postMetaInvestimento = async () => {
  const response = await api.post("/MetaInvestimento");
  return response.data;
};
export const putMetaInvestimento = async () => {
  const response = await api.put("/MetaInvestimento");
  return response.data;
};
export const getMetaInvestimento = async () => {
  const response = await api.get("/MetaInvestimento");
  return response.data;
};
export const deleteMetaInvestimento = async (id: string | number) => {
  const response = await api.delete(`/MetaInvestimento/${id}`);
  return response.data;
};
export const getMetaInvestimentoById = async (id: string | number) => {
  const response = await api.get(`/MetaInvestimento/${id}`);
  return response.data;
};

//NOME CATEGORIA PADRÃO:
export const getNomeCategoriaPadrao = async () => {
  const response = await api.get("/NomeCategoriaPadrao");
  return response.data;
};
export const getNomeCategoriaPadraoById = async (id: string | number) => {
  const response = await api.get(`/NomeCategoriaPadrao/${id}`);
  return response.data;
};

//NOME TIPO INVESTIMENTO:
export const getNomeTipoInvestimento = async () => {
  const response = await api.get("/NomeTipoInvestimento");
  return response.data;
};
export const getNomeTipoInvestimentoById = async (id: string | number) => {
  const response = await api.get(`/NomeTipoInvestimento/${id}`);
  return response.data;
};

//NOME TIPO OBJETIVO:
export const getNomeTipoObjetivo = async () => {
  const response = await api.get("/NomeTipoObjetivo");
  return response.data;
};
export const getNomeTipoObjetivoById = async (id: string | number) => {
  const response = await api.get(`/NomeTipoObjetivo/${id}`);
  return response.data;
};

//CLASSE:
export const getPeriodicidadeTransacao = async () => {
  const response = await api.get("/PeriodicidadeTransacao");
  return response.data;
};
export const getPeriodicidadeTransacaoById = async (id: string | number) => {
  const response = await api.get(`/PeriodicidadeTransacao/${id}`);
  return response.data;
};

//QUESTIONARIO
export const postQuestionario = async () => {
  const response = await api.post("/Questionario");
  return response.data;
};
export const putQuestionario = async () => {
  const response = await api.put("/Questionario");
  return response.data;
};
export const getQuestionario = async () => {
  const response = await api.get("/Questionario");
  return response.data;
};
export const deleteQuestionario = async (id: string | number) => {
  const response = await api.delete(`/Questionario/${id}`);
  return response.data;
};
export const getQuestionarioById = async (id: string | number) => {
  const response = await api.get(`/Questionario/${id}`);
  return response.data;
};

//RECORRENCIA:
export const getRecorrencia = async () => {
  const response = await api.get("/Recorrencia");
  return response.data;
};
export const getRecorrenciaById = async (id: string | number) => {
  const response = await api.get(`/Recorrencia/${id}`);
  return response.data;
};

//SENTIMENTO TRANSACAO:
export const getSentimentoTransacao = async () => {
  const response = await api.get("/SentimentoTransacao");
  return response.data;
};
export const getSentimentoTransacaoById = async (id: string | number) => {
  const response = await api.get(`/SentimentoTransacao/${id}`);
  return response.data;
};

//SITUACAO TRANSACAO:
export const getSituacaoTransacao = async () => {
  const response = await api.get("/SituacaoTransacao");
  return response.data;
};
export const getSituacaoTransacaoById = async (id: string | number) => {
  const response = await api.get(`/SituacaoTransacao/${id}`);
  return response.data;
};

//TIPO TRANSACAO:
export const getTipoTransacao = async () => {
  const response = await api.get("/TipoTransacao");
  return response.data;
};
export const getTipoTransacaoById = async (id: string | number) => {
  const response = await api.get(`/TipoTransacao/${id}`);
  return response.data;
};

//TRANSACAO
export const postTransacao = async () => {
  const response = await api.post("/Transacao");
  return response.data;
};
export const putTransacao = async () => {
  const response = await api.put("/Transacao");
  return response.data;
};
export const getTransacao = async () => {
  const response = await api.get("/Transacao");
  return response.data;
};
export const deleteTransacao = async (id: string | number) => {
  const response = await api.delete(`/Transacao/${id}`);
  return response.data;
};
export const getTransacaoById = async (id: string | number) => {
  const response = await api.get(`/Transacao/${id}`);
  return response.data;
};

//TRANSACAO META INVESTIMENTO
export const postTransacaoMetaInvestimento = async () => {
  const response = await api.post("/TransacaoMetaInvestimento");
  return response.data;
};
export const putTransacaoMetaInvestimento = async () => {
  const response = await api.put("/TransacaoMetaInvestimento");
  return response.data;
};
export const getTransacaoMetaInvestimento = async () => {
  const response = await api.get("/TransacaoMetaInvestimento");
  return response.data;
};
export const deleteTransacaoMetaInvestimento = async (id: string | number) => {
  const response = await api.delete(`/TransacaoMetaInvestimento/${id}`);
  return response.data;
};
export const getTransacaoMetaInvestimentoById = async (id: string | number) => {
  const response = await api.get(`/TransacaoMetaInvestimento/${id}`);
  return response.data;
};

//USUARIO
export const postUsuario = async (dados: {
  nome_completo: string;
  email: string;
  senha: string;
  foto_perfil: string;
}) => {
  try {
    const response = await api.post("/Usuario", { params: dados });
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};
export const putUsuario = async () => {
  const response = await api.put("/Usuario");
  return response.data;
};
export const getUsuario = async () => {
  const response = await api.get("/Usuario");
  return response.data;
};
export const deleteUsuario = async (id: string | number) => {
  const response = await api.delete(`/Usuario/${id}`);
  return response.data;
};
export const getUsuarioById = async (id: string | number) => {
  const response = await api.get(`/Usuario/${id}`);
  return response.data;
};

//USUARIO ASSINATURA
export const postUsuarioAssinatura = async () => {
  const response = await api.post("/UsuarioAssinatura");
  return response.data;
};
export const putUsuarioAssinatura = async () => {
  const response = await api.put("/UsuarioAssinatura");
  return response.data;
};
export const getUsuarioAssinatura = async () => {
  const response = await api.get("/UsuarioAssinatura");
  return response.data;
};
export const deleteUsuarioAssinatura = async (id: string | number) => {
  const response = await api.delete(`/UsuarioAssinatura/${id}`);
  return response.data;
};
export const getUsuarioAssinaturaById = async (id: string | number) => {
  const response = await api.get(`/UsuarioAssinatura/${id}`);
  return response.data;
};

//USUARIO BANCO
export const postUsuarioBanco = async () => {
  const response = await api.post("/UsuarioBanco");
  return response.data;
};
export const putUsuarioBanco = async () => {
  const response = await api.put("/UsuarioBanco");
  return response.data;
};
export const getUsuarioBanco = async () => {
  const response = await api.get("/UsuarioBanco");
  return response.data;
};
export const deleteUsuarioBanco = async (id: string | number) => {
  const response = await api.delete(`/UsuarioBanco/${id}`);
  return response.data;
};
export const getUsuarioBancoById = async (id: string | number) => {
  const response = await api.get(`/UsuarioBanco/${id}`);
  return response.data;
};

//USUARIO CARTAO
export const postUsuarioCartao = async () => {
  const response = await api.post("/UsuarioCartao");
  return response.data;
};
export const putUsuarioCartao = async () => {
  const response = await api.put("/UsuarioCartao");
  return response.data;
};
export const getUsuarioCartao = async () => {
  const response = await api.get("/UsuarioCartao");
  return response.data;
};
export const deleteUsuarioCartao = async (id: string | number) => {
  const response = await api.delete(`/UsuarioCartao/${id}`);
  return response.data;
};
export const getUsuarioCartaoById = async (id: string | number) => {
  const response = await api.get(`/UsuarioCartao/${id}`);
  return response.data;
};

//USUÁRIO CLASSE
export const getUsuarioClasse = async () => {
  const response = await api.get("/UsuarioClasse");
  return response.data;
};
export const getUsuarioClasseById = async (id: string | number) => {
  const response = await api.get(`/UsuarioClasse/${id}`);
  return response.data;
};

export default api;
