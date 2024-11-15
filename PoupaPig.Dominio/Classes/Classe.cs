using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Classes
{
    [Table(Name = "classe")] // Mapeando para a tabela 'classe'
    public class Classe
    {
        [PrimaryKey, Identity]
        [Column(Name = "id")]
        public int id { get; set; }

        [Column(Name = "nome")]
        public string nome { get; set; }
    }
}
