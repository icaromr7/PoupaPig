using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Assinaturas
{
    [Table(Name = "assinatura")]
    public class Assinatura
    {
        [PrimaryKey, Identity]
        [Column(Name = "id")] // Nome diferente da coluna no banco de dados
        public int id { get; set; }

        [Column(Name = "nome")] // Nome diferente da coluna no banco de dados
        public string nome { get; set; }
    }
}
