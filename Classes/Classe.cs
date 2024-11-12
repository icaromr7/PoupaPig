using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Classes
{
    public class Classe
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public string Nome { get; set; }
    }
}
