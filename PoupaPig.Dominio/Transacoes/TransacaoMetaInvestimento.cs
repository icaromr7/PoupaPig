using LinqToDB.Mapping;
using System;

namespace PoupaPig.Dominio.Transacoes
{
    [Table(Name = "transacao_meta_investimento")] // Mapeando para a tabela 'transacao_meta_investimento'
    public class TransacaoMetaInvestimento
    {
        [PrimaryKey, Identity]
        [Column(Name = "id")]
        public int id { get; set; }

        [Column(Name = "id_transacao")]
        public int id_transacao { get; set; }

        [Column(Name = "id_meta_investimento")]
        public int id_meta_investimento { get; set; }

        [Column(Name = "usuario_id")]
        public int usuario_id { get; set; }

        [Column(Name = "data_cadastro")]
        public DateTime data_cadastro { get; set; }
    }
}
