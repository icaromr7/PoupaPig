using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Assinaturas
{
    public class assinatura
    {
        [PrimaryKey, Identity]
        public int id { get; set; }
        [Column]
        public string nome { get; set; }
    }
}
