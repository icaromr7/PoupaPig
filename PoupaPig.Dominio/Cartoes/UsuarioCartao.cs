using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Cartoes
{
    public class UsuarioCartao
    {
        [PrimaryKey, Identity]
        public int id { get; set; }
        [Column]
        public int cartao_id { get; set; }
        [Column]
        public int usuario_id { get; set; }
    }
}
