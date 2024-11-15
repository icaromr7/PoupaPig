using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Categorias
{
    [Table(Name = "categoria_padrao")]
    public class CategoriaPadrao
    {
        [PrimaryKey, Identity]
        [Column(Name = "id")]
        public int id { get; set; }

        [Column(Name = "nome_id")]
        public int nome_id { get; set; }

        [Column(Name = "icone")]
        public string icone { get; set; }

        [Column(Name = "valor_minimo")]
        public decimal valor_minimo { get; set; }

        [Column(Name = "valor_maximo")]
        public decimal valor_maximo { get; set; }
    }
}
