using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Assinaturas
{
    [Table(Name = "usuario_assinatura")] // Nome da tabela no banco de dados
    public class UsuarioAssinatura
    {
        [PrimaryKey, Identity] // Atributo que marca a chave primária e a identidade
        [Column(Name = "id")] // Nome da coluna no banco
        public int id { get; set; }

        [Column(Name = "usuario_id")] // Nome da coluna que se refere ao id do usuário
        public int usuario_id { get; set; }

        [Column(Name = "assinatura_id")] // Nome da coluna que se refere ao id da assinatura
        public int assinatura_id { get; set; }
    }
}
