using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Metas
{
    public class NomeTipoObjetivo
    {
        [PrimaryKey, Identity]
        public int id { get; set; }
        [Column]
        public string nome { get; set; }
    }
}
