using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Questionarios
{
    public class Questionario
    {
        [PrimaryKey, Identity]
        public int Id { get; set; }
        [Column]
        public int UsuarioId { get; set; }
        [Column]
        public decimal Salario { get; set; }
        [Column]
        public int Banheiros { get; set; }
        [Column]
        public int TrabalhadoresDomesticos { get; set; }
        [Column]
        public int Automoveis { get; set; }
        [Column]
        public int Microcomputadores { get; set; }
        [Column]
        public int MaquinasLavarRoupa { get; set; }
        [Column]
        public int Geladeiras { get; set; }
        [Column]
        public int Freezers { get; set; }
        [Column]
        public int Dvds { get; set; }
        [Column]
        public int FornosMicroondas { get; set; }
        [Column]
        public int Motocicletas { get; set; }
        [Column]
        public int MaquinasSecarRoupa { get; set; }
        [Column]
        public int GrauInstrucao { get; set; }
        [Column]
        public int OrigemAgua { get; set; }
        [Column]
        public int TipoRua { get; set; }
    }
}
