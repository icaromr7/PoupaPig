using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Assinaturas
{
    public class Assinatura
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public string Nome { get; set; }
    }
}
