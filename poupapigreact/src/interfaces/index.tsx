export interface TransactionData {
  value: number;
  name: string;
  date: string;
  type: string;
}

export interface GenericData {
  id: number;
  nome: string;
}

export interface UserInt {
  id: number;
  nome_completo: string;
  email: string;
  data_criacao?: string;
  senha?: string;
}

export interface CategoriaInt {
  id: number;
  nome_id: string;
  icone?: string;
  valor_minimo?: number;
  valor_maximo?: number;
}

export interface TransacaoInt {
  id: number;
  nome: string;
  valor: number;
  categoria_id: number;
  banco_id?: number;
  nome_meta_investimento_id?: number;
  tipo_pagamento_id: number;
  recorrencia_id?: number;
  data_transacao?: string;
  quantidade_parcela?: number;
  tipo_id: number;
  situacao_id: number;
  periodicidade_id: number;
  sentimento_id?: number;
  observacao: string;
}

export interface InvestimentoMetaInt {
  id: number;
  nome: string;
  valor_desejado: number;
  data_resgate?: string;
  tipo_objetivo_id: number;
  tipo_investimento_id?: number;
  banco_id: number;
  recorrencia_pretendida_id: number;
  porcentagem_rendimento?: number;
  tipo_taxa_juros_id?: number;
  observacao?: string;
}

// export interface TransacaoInt {
//   id: number;
//   nome: string;
//   valor: number;
//   //categoria
//   categoria_id?: number;
//   nome_categoria: string;
//   //banco
//   banco_id?: number;
//   nome_banco: string;
//   //investimento ou meta
//   nome_meta_investimento_id?: number;
//   nome_meta_investimento: string;
//   //tipo pagamento
//   tipo_pagamento_id: number;
//   nome_tipo_pagamento: string;
//   //recorrencianão n
//   recorrencia_id?: number;
//   nome_recorrencia: string;

//   data_transacao?: string;
//   quantidade_parcela?: number;
//   tipo_id: {
//     nome_tipo: string;
//     id_tipo: number;
//   };
//   situacao_id: {
//     nome_situacao: string;
//     id_situacao: number;
//   };
//   periodicidade_id: {
//     nome_periodicidade: string;
//     id_periodicidade: number;
//   };
//   sentimento_id?: {
//     nome_sentimento: string;
//     id_sentimento: number;
//   };
//   observacao: string;
// }
