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
export const getCategoriaPersonalizada = async () => {
  const response = await api.get("/CategoriaPersonalizada");
  return response.data;
};
export const getCategoriaPersonalizadaById = async (id: string | number) => {
  const response = await api.get(`/CategoriaPersonalizada/${id}`);
  return response.data;
};

export default api;
