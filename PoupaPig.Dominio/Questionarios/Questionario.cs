using LinqToDB.Mapping;

namespace PoupaPig.Dominio.Questionarios
{
    [Table(Name = "questionario")]
    public class Questionario
    {
        [PrimaryKey, Identity]
        public int id { get; set; }

        [Column(Name = "usuario_id")]
        public int usuario_id { get; set; }

        [Column(Name = "salario")]
        public decimal? salario { get; set; }

        [Column(Name = "banheiros")]
        public int? banheiros { get; set; }

        [Column(Name = "trabalhadores_domesticos")]
        public int? trabalhadores_domesticos { get; set; }

        [Column(Name = "automoveis")]
        public int? automoveis { get; set; }

        [Column(Name = "microcomputadores")]
        public int? microcomputadores { get; set; }

        [Column(Name = "maquinas_lavar_roupa")]
        public int? maquinas_lavar_roupa { get; set; }

        [Column(Name = "geladeiras")]
        public int? geladeiras { get; set; }

        [Column(Name = "freezers")]
        public int? freezers { get; set; }

        [Column(Name = "dvds")]
        public int? dvds { get; set; }

        [Column(Name = "fornos_microondas")]
        public int? fornos_microondas { get; set; }

        [Column(Name = "motocicletas")]
        public int? motocicletas { get; set; }

        [Column(Name = "maquinas_secar_roupa")]
        public int? maquinas_secar_roupa { get; set; }

        [Column(Name = "grau_instrucao")]
        public int? grau_instrucao { get; set; }

        [Column(Name = "origem_agua")]
        public int? origem_agua { get; set; }

        [Column(Name = "tipo_rua")]
        public int? tipo_rua { get; set; }
    }
}
