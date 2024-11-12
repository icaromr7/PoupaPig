using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Cartoes
{
    public class UsuarioCartao
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public int CartaoId { get; set; }
        [Column]
        public int UsuarioId { get; set; }
    }
}
