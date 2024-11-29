using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Categorias
{
    [Table(Name = "categoria")]
    public class Categoria
    {
        [PrimaryKey, Identity]
        [Column(Name = "id")]
        public int id { get; set; }

        [Column(Name = "nome")]
        public string nome { get; set; }

        [Column(Name = "icone")]
        public string? icone { get; set; }

        [Column(Name = "valor_min")]
        public decimal? valor_min { get; set; }

        [Column(Name = "valor_max")]
        public decimal? valor_max { get; set; }

        [Column(Name = "usuario_id")]
        public int usuario_id { get; set; }
    }
}
