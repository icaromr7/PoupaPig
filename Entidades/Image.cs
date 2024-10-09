using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Entidades
{
    public class Image
    {
        [PrimaryKey, Identity]
        public int ID_Image { get; set; }

        [Column]
        public string Name_Image { get; set; }

        [Column]
        public string Url_Image { get; set; }

        [Column] // Relacionamento com a tabela User
        public int ID_User { get; set; }
    }

}
