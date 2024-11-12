using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Metas
{
    public class NomeTipoInvestimento
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public string Nome { get; set; }
    }
}
