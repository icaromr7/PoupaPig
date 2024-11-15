using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Metas
{
    [Table(Name = "nome_tipo_objetivo")] // Nome da tabela no banco de dados
    public class NomeTipoObjetivo
    {
        [PrimaryKey, Identity] // Chave primária e identidade
        [Column(Name = "id")] // Nome da coluna no banco de dados
        public int id { get; set; }

        [Column(Name = "nome")] // Coluna que armazena o nome do tipo de objetivo
        public string nome { get; set; }
    }
}
