using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Categorias
{
    public class CategoriaPadrao
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public int NomeId { get; set; }
        [Column]
        public string Icone { get; set; }
        [Column]
        public decimal ValorMinimo { get; set; }
        [Column]
        public decimal ValorMaximo { get; set; }

    }
}
