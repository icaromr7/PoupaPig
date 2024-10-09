using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Entidades
{
    public class HistoryValues
    {
        [PrimaryKey, Identity]
        public int ID_Value_History { get; set; }

        [Column] // Relacionamento com a tabela Values
        public int ID_Value { get; set; }

        [Column] // Relacionamento com a tabela User
        public int ID_User { get; set; }

        [Column]
        public string Name_Value_History { get; set; }

        [Column] // Relacionamento com a tabela Category
        public int Category_Value_History { get; set; }

        [Column]
        public decimal Value_Value_History { get; set; }

        [Column]
        public DateTime Register_Date_Value_History { get; set; }

        [Column]
        public DateTime Date_Value_History { get; set; }

        [Column]
        public DateTime Start_Date_Fixed_Value_History { get; set; }

        [Column]
        public DateTime End_Date_Fixed_Value_History { get; set; }
    }

}
