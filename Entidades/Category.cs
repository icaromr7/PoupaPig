using LinqToDB.Mapping;
namespace PoupaPig.Dominio.Entidades
{
    public class Category
    {
        [PrimaryKey, Identity]
        public int ID_Category { get; set; }

        [Column]
        public int ID_User { get; set; }

        [Column]
        public string Name_Category { get; set; }

        [Column]
        public string Icon_Category { get; set; }

        [Column]
        public decimal Amount_Min_Category { get; set; }

        [Column]
        public decimal Amount_Max_Category { get; set; }

        [Column]
        public decimal Total_Amount_Used_Category { get; set; }
    }

}
