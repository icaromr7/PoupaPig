using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Categorias
{
    [Table(Name = "nome_categoria_padrao")] // Nome da tabela no banco de dados
    public class NomeCategoriaPadrao
    {
        [PrimaryKey, Identity] // Chave primária e identidade
        [Column(Name = "id")] // Nome da coluna no banco de dados
        public int id { get; set; }

        [Column(Name = "nome")] // Coluna que armazena o nome da categoria padrão
        public string nome { get; set; }
    }
}
