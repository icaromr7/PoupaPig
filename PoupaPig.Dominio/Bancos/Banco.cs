using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Bancos
{
    [Table(Name = "banco")] // Nome da tabela no banco de dados
    public class Banco
    {
        [PrimaryKey, Identity] // Atributo para chave primária e identidade
        [Column(Name = "id")] // Nome da coluna no banco de dados
        public int id { get; set; }

        [Column(Name = "nome")] // Nome da coluna para o nome do banco
        public string nome { get; set; }
    }
}
