using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Assinaturas
{
    public class UsuarioAssinatura
    {
        [PrimaryKey, Identity]
        public int id { get; set; }
        [Column]
        public int usuario_id { get; set; }
        [Column]
        public int assinatura_id { get; set; }
    }
}
