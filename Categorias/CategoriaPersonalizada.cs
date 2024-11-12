using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Categorias
{
    public class CategoriaPersonalizada
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public string Nome { get; set; }
        [Column]
        public string Icone { get; set; }
        [Column]
        public decimal ValorMinimo { get; set; }
        [Column]
        public decimal ValorMaximo { get; set; }
        [Column]
        public int UsuarioId { get; set; }

    }
}
