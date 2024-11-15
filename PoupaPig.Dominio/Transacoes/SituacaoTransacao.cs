using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Transacoes
{
    [Table(Name = "situacao_transacao")] // Nome da tabela no banco de dados
    public class SituacaoTransacao
    {
        [PrimaryKey, Identity] // Chave primária e identidade
        [Column(Name = "id")] // Nome da coluna no banco de dados
        public int id { get; set; }

        [Column(Name = "nome")] // Nome da coluna no banco de dados
        public string nome { get; set; }
    }
}
