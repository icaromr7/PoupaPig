using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Classes
{
    public class UsuarioClasse
    {
        [PrimaryKey, Identity]
        public int id { get; set; }
        [Column]
        public int usuario_id { get; set; }
        [Column]
        public int classe_id { get; set; }
    }
}
