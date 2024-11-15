using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Transacoes
{
    public class SituacaoTransacao
    {
        [PrimaryKey, Identity]
        public int id { get; set; }
        [Column]
        public string nome { get; set; }
    }
}
