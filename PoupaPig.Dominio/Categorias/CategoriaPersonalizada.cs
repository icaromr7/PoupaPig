using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Categorias
{
    [Table(Name = "categoria_personalizada")] // Mapeando para a tabela 'categoria_personalizada'
    public class CategoriaPersonalizada
    {
        [PrimaryKey, Identity]
        [Column(Name = "id")]
        public int id { get; set; }

        [Column(Name = "nome")]
        public string nome { get; set; }

        [Column(Name = "icone")]
        public string icone { get; set; }

        [Column(Name = "valor_minimo")]
        public decimal valor_minimo { get; set; }

        [Column(Name = "valor_maximo")]
        public decimal valor_maximo { get; set; }

        [Column(Name = "usuario_id")]
        public int usuario_id { get; set; }
    }
}
