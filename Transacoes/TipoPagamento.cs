using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Transacoes
{
    public class TipoPagamento
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public string Nome { get; set; }
    }
}
