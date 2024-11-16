using LinqToDB;
using PoupaPig.Dominio.Assinaturas;
using PoupaPig.Dominio.Assinaturas.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Assinaturas
{
    public class RepositorioUsuarioAssinatura : IRepositorioUsuarioAssinatura
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioUsuarioAssinatura(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        public void Criar(UsuarioAssinatura dados)
        {
            _dataConnection.Insert(dados);
        }

        public void Atualizar(UsuarioAssinatura dados)
        {
            _dataConnection.Update(dados);
        }

        public void Excluir(int id)
        {
            _dataConnection.GetTable<UsuarioAssinatura>().Delete(x => x.id == id);
        }

        public UsuarioAssinatura ObterPorId(int id)
        {
            return _dataConnection.GetTable<UsuarioAssinatura>().FirstOrDefault(x => x.id == id);
        }

        public List<UsuarioAssinatura> ObterTodas()
        {
            return _dataConnection.GetTable<UsuarioAssinatura>().ToList();
        }
    }
}
