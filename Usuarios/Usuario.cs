using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Usuarios
{
    public class Usuario
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public string NomeCompleto { get; set; }
        [Column]
        public string Email { get; set; }
        [Column]
        public string Senha { get; set; }
        [Column]
        public string FotoPerfil { get; set; }
        [Column]
        public DateTime DataCriacao { get; set; }

    }

}
