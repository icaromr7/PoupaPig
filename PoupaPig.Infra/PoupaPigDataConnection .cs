using LinqToDB.Data;
using LinqToDB.Configuration;
using System.Collections.Generic;

namespace PoupaPig.Infra
{
    public class PoupaPigDataConnection : DataConnection
    {
        private static readonly string ConnectionString =
            "Host=ep-rapid-field-a5h3k9p9.us-east-2.aws.neon.tech;Database=poupapig;Username=poupapig_owner;Password=fRSaKo40kYCB;SSL Mode=Require";

        public PoupaPigDataConnection() : base("PostgreSQL", ConnectionString)
        {
        }
    }
}
