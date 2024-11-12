using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Assinaturas
{
    public class UsuarioAssinatura
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public int UsuarioId { get; set; }
        [Column]
        public int AssinaturaId { get; set; }
    }
}
