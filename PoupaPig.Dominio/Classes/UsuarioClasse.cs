using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Classes
{
    [Table(Name = "usuario_classe")] // Nome da tabela no banco de dados
    public class UsuarioClasse
    {
        [PrimaryKey, Identity] // Chave primária e identidade
        [Column(Name = "id")] // Nome da coluna no banco de dados
        public int id { get; set; }

        [Column(Name = "usuario_id")] // Coluna que armazena o ID do usuário
        public int usuario_id { get; set; }

        [Column(Name = "classe_id")] // Coluna que armazena o ID da classe
        public int classe_id { get; set; }
    }
}
