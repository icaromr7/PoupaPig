using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Transacoes
{
    public class Recorrencia
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public string Nome { get; set; }
    }
}
