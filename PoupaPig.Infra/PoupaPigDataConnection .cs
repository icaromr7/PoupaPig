using LinqToDB.Data;
using LinqToDB.Configuration;
using System.Collections.Generic;

namespace PoupaPig.Infra
{
    public class PoupaPigDataConnection : DataConnection
    {
        private static readonly string ConnectionString =
            "Host=ep-calm-wave-a5z5c44k.us-east-2.aws.neon.tech;Database=poupapig;Username=poupapig_owner;Password=tOp7s6jzHmSX;SSL Mode=Require";



        public PoupaPigDataConnection() : base("PostgreSQL", ConnectionString)
        {
        }
    }
}
