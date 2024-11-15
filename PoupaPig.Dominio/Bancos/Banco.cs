using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Bancos
{
    public class banco
    {
        [PrimaryKey, Identity]
        public int id { get; set; }
        [Column]
        public string nome { get; set; }
    }
}
