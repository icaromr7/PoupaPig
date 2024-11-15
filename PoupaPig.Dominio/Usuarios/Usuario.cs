using LinqToDB.Mapping;
using System;

namespace PoupaPig.Dominio.Usuarios
{
    [Table(Name = "usuario")] // Nome da tabela no banco de dados
    public class Usuario
    {
        [PrimaryKey, Identity] // Chave primária e identidade
        [Column(Name = "id")] // Nome da coluna no banco de dados
        public int id { get; set; }

        [Column(Name = "nome_completo")] // Nome da coluna no banco de dados
        public string nome_completo { get; set; }

        [Column(Name = "email")] // Nome da coluna no banco de dados
        public string email { get; set; }

        [Column(Name = "senha")] // Nome da coluna no banco de dados
        public string senha { get; set; }

        [Column(Name = "foto_erfil")] // Nome da coluna no banco de dados
        public string foto_erfil { get; set; }

        [Column(Name = "data_criacao")] // Nome da coluna no banco de dados
        public DateTime data_criacao { get; set; }
    }
}
