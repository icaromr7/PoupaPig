using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Categorias
{
    public class NomeCategoriaPadrao
    {
        [PrimaryKey, Identity]
        public int id { get; set; }
        [Column]
        public string nome { get; set; }
    }
}
