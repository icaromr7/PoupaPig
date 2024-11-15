using LinqToDB.Mapping;
using System;

namespace PoupaPig.Dominio.Transacoes
{
    [Table(Name = "transacao")] // Mapeando para a tabela 'transacao'
    public class Transacao
    {
        [PrimaryKey, Identity]
        [Column(Name = "id")]
        public int id { get; set; }

        [Column(Name = "nome")]
        public string nome { get; set; }

        [Column(Name = "valor")]
        public decimal valor { get; set; }

        [Column(Name = "data_cadastro")]
        public DateTime data_cadastro { get; set; }

        [Column(Name = "categoria_id")]
        public int categoria_id { get; set; }

        [Column(Name = "banco_id")]
        public int banco_id { get; set; }

        [Column(Name = "nome_meta_investimento_id")]
        public int nome_meta_investimento_id { get; set; }

        [Column(Name = "tipo_pagamento_id")]
        public int tipo_pagamento_id { get; set; }

        [Column(Name = "recorrencia_id")]
        public int recorrencia_id { get; set; }

        [Column(Name = "data_transacao")]
        public DateTime data_transacao { get; set; }

        [Column(Name = "quantidade_parcela")]
        public int quantidade_parcela { get; set; }

        [Column(Name = "valor_parcela")]
        public decimal valor_parcela { get; set; }

        [Column(Name = "tipo_id")]
        public int tipo_id { get; set; }

        [Column(Name = "situacao_id")]
        public int situacao_id { get; set; }

        [Column(Name = "periodicidade_id")]
        public int periodicidade_id { get; set; }

        [Column(Name = "sentimento_id")]
        public int sentimento_id { get; set; }

        [Column(Name = "observacao")]
        public string observacao { get; set; }

        [Column(Name = "usuario_id")]
        public int usuario_id { get; set; }
    }
}
