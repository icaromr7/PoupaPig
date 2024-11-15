using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Bancos
{
    [Table(Name = "usuario_banco")] // Nome da tabela no banco de dados
    public class UsuarioBanco
    {
        [PrimaryKey, Identity] // Chave primária e identidade
        [Column(Name = "id")] // Nome da coluna no banco de dados
        public int id { get; set; }

        [Column(Name = "usuario_id")] // Coluna que se refere ao id do usuário
        public int usuario_id { get; set; }

        [Column(Name = "banco_id")] // Coluna que se refere ao id do banco
        public int banco_id { get; set; }
    }
}
