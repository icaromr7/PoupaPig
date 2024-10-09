using LinqToDB.Mapping;
using System.ComponentModel;

namespace PoupaPig.Dominio.Entidades
{
    public class User
    {
        [PrimaryKey, Identity]
        public int ID_User { get; set; }
        [Column]
        public string Name_User { get; set; }
        [Column]
        public string Email_User { get; set; }
        [Column]
        public string Password_User { get; set; }
        [Column]
        public string session_token { get; set; }
        [Column]
        public string Token_Expiration {get; set;} 
    }
}
