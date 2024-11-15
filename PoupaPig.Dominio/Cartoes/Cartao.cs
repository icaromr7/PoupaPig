using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Cartoes
{
    public class Cartao
    {
        [PrimaryKey, Identity]
        public int id { get; set; }
        [Column]
        public string nome { get; set; }
    }
}
