using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Transacoes
{
    [Table(Name = "periodicidade_transacao")] // Nome da tabela no banco de dados
    public class PeriodicidadeTransacao
    {
        [PrimaryKey, Identity] // Chave primária e identidade
        [Column(Name = "id")] // Nome da coluna no banco de dados
        public int id { get; set; }

        [Column(Name = "nome")] // Coluna que armazena o nome da periodicidade
        public string nome { get; set; }
    }
}
