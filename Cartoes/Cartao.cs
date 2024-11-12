using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Cartoes
{
    public class Cartao
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public string Nome { get; set; }
    }
}
