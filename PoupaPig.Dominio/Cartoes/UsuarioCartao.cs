using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Cartoes
{
    [Table(Name = "usuario_cartao")] // Nome da tabela no banco de dados
    public class UsuarioCartao
    {
        [PrimaryKey, Identity] // Chave primária e identidade
        [Column(Name = "id")] // Nome da coluna no banco de dados
        public int id { get; set; }

        [Column(Name = "cartao_id")] // Coluna que armazena o ID do cartão
        public int cartao_id { get; set; }

        [Column(Name = "usuario_id")] // Coluna que armazena o ID do usuário
        public int usuario_id { get; set; }
    }
}
