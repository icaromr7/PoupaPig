using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Metas
{
    [Table(Name = "meta_investimento")] // Mapeando para a tabela 'meta_investimento'
    public class MetaInvestimento
    {
        [PrimaryKey, Identity]
        [Column(Name = "id")]
        public int id { get; set; }

        [Column(Name = "nome")]
        public string nome { get; set; }

        [Column(Name = "valor_desejado")]
        public decimal valor_desejado { get; set; }

        [Column(Name = "data_criacao")]
        public DateTime data_criacao { get; set; } = DateTime.Now;

        [Column(Name = "data_resgate")]
        public DateTime? data_resgate { get; set; }

        [Column(Name = "tipo_objetivo_id")]
        public int tipo_objetivo_id { get; set; }

        [Column(Name = "tipo_investimento_id")]
        public int? tipo_investimento_id { get; set; }

        [Column(Name = "banco_id")]
        public int banco_id { get; set; }

        [Column(Name = "recorrencia_pretendida_id")]
        public int recorrencia_pretendida_id { get; set; }

        [Column(Name = "porcentagem_rendimento")]
        public decimal? porcentagem_rendimento { get; set; }

        [Column(Name = "tipo_taxa_juros_id")]
        public int? tipo_taxa_juros_id { get; set; }

        [Column(Name = "observacao")]
        public string? observacao { get; set; }

        [Column(Name = "usuario_id")]
        public int usuario_id { get; set; }

    }
}
