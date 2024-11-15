using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Cartoes
{
    [Table(Name = "cartao")] // Nome da tabela no banco de dados
    public class Cartao
    {
        [PrimaryKey, Identity] // Chave primária e identidade
        [Column(Name = "id")] // Nome da coluna no banco de dados
        public int id { get; set; }

        [Column(Name = "nome")] // Nome da coluna que armazena o nome do cartão
        public string nome { get; set; }
    }
}
