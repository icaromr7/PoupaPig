using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Bancos
{
    public class Banco
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public string Nome { get; set; }
    }
}
