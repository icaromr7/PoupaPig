using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Classes
{
    public class UsuarioClasse
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public int UsuarioId { get; set; }
        [Column]
        public int ClasseId { get; set; }
    }
}
