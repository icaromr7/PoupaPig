using LinqToDB.Mapping;
using System.ComponentModel;

namespace PoupaPig.Dominio.Metas
{
    public class MetaInvestimento
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public string Nome { get; set; }
        [Column]
        public decimal ValorDesejado { get; set; }
        [Column]
        public decimal ValorDepositar { get; set; }
        [Column]
        public DateTime DataCadastro { get; set; }
        [Column]
        public DateTime DataAporte { get; set; }
        [Column]
        public DateTime DataResgate { get; set; }
        [Column]
        public int TipoObjetivoId { get; set; }
        [Column]
        public int TipoInvestimentoId { get; set; }
        [Column]
        public int BancoId { get; set; }
        [Column]
        public int RecorrenciaPretendidaId { get; set; }
        [Column]
        public decimal PorcentagemRendimento { get; set; }
        [Column]
        public int TipoTaxaJurosId { get; set; }
        [Column]
        public string Observacao { get; set; }
        [Column]
        public int UsuarioId { get; set; }

    }
}
