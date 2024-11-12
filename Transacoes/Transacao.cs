using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Transacoes
{
    public class Transacao
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public string Nome { get; set; }
        [Column]
        public decimal Valor { get; set; }
        [Column]
        public DateTime DataCadastro { get; set; }
        [Column]
        public int CategoriaId { get; set; }
        [Column]
        public int BancoId { get; set; }
        [Column]
        public int TipoPagamentoId { get; set; }
        [Column]
        public int RecorrenciaId { get; set; }
        [Column]
        public DateTime DataTransacao { get; set; }
        [Column]
        public int QuantidadeParcela { get; set; }
        [Column]
        public decimal ValorParcela { get; set; }
        [Column]
        public int TipoId { get; set; }
        [Column]
        public int SituacaoId { get; set; }
        [Column]
        public int PeriodicidadeId { get; set; }
        [Column]
        public int SentimentoId { get; set; }
        [Column]
        public string Observacao { get; set; }
        [Column]
        public int UsuarioId { get; set; }

    }
}
