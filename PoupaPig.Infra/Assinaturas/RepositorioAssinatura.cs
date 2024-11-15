using LinqToDB;
using LinqToDB.Data;
using PoupaPig.Dominio.Assinaturas;
using PoupaPig.Dominio.Assinaturas.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Assinaturas
{
    public class RepositorioAssinatura : IRepositorioAssinatura
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o DataConnection através do construtor
        public RepositorioAssinatura(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar uma nova assinatura
        public void Criar(assinatura dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar uma assinatura existente
        public void Atualizar(assinatura dados)
        {
            var assinaturaExistente = _dataConnection.GetTable<assinatura>().FirstOrDefault(a => a.id == dados.id);
            if (assinaturaExistente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir uma assinatura pelo ID
        public void Excluir(int id)
        {
            var assinatura = _dataConnection.GetTable<assinatura>().FirstOrDefault(a => a.id == id);
            if (assinatura != null)
            {
                _dataConnection.Delete(assinatura);
            }
        }

        // Método para obter uma assinatura pelo ID
        public assinatura ObterPorId(int id)
        {
            return _dataConnection.GetTable<assinatura>().FirstOrDefault(a => a.id == id);
        }

        // Método para obter todas as assinaturas
        public List<assinatura> ObterTodas()
        {
            return _dataConnection.GetTable<assinatura>().ToList();
        }
    }
}
