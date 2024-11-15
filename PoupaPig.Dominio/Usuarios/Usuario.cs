using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Usuarios
{
    public class Usuario
    {
        [PrimaryKey, Identity]
        public int id { get; set; }
        [Column]
        public string nome_completo { get; set; }
        [Column]
        public string email { get; set; }
        [Column]
        public string senha { get; set; }
        [Column]
        public string foto_erfil { get; set; }
        [Column]
        public DateTime data_criacao { get; set; }

    }

}
