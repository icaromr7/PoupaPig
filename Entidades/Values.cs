using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Entidades
{
    public class Values
    {
        [PrimaryKey, Identity]
        public int ID_Value { get; set; }

        [Column] // Relacionamento com a tabela User
        public int ID_User { get; set; }

        [Column]
        public string Name_Value { get; set; }

        [Column]
        public decimal Value_Value { get; set; }

        [Column]
        public decimal Prevision_Value { get; set; }

        [Column]
        public string Type_Value { get; set; } // Pode ser crédito ou débito, por exemplo

        [Column]
        public DateTime Register_Date_Value { get; set; }

        [Column]
        public DateTime Date_Value { get; set; }

        [Column] // Relacionamento com a tabela Category
        public int Category_Value { get; set; }

        [Column]
        public string Coin_Type_Value { get; set; }

        [Column]
        public int Qnt_Portion_Value { get; set; }

        [Column]
        public string Fixed_Or_Variable_Value { get; set; } // Indica se o valor é fixo ou variável

        [Column]
        public DateTime Start_Date_Fixed_Value { get; set; }

        [Column]
        public DateTime End_Date_Fixed_Value { get; set; }

        [Column]
        public string Frequence_Fixed_Value { get; set; } // Frequência do valor fixo, ex: mensal, semanal

        [Column]
        public int Qntd_Repetition_Fixed_Value { get; set; }

        [Column]
        public string Status_Value { get; set; } // Status do valor, ex: pago, pendente

        [Column]
        public string Obs_Value { get; set; } // Observações

        [Column]
        public int Status_Values { get; set; } // Número total de status diferentes para esse valor
    }

}
