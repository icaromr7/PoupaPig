using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Categorias
{
    public class NomeCategoriaPadrao
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public string Nome { get; set; }
    }
}
