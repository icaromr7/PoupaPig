using LinqToDB;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Transacoes
{
    public class RepositorioTransacao : IRepositorioTransacao
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioTransacao(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar uma nova transação
        public void Criar(Transacao dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar os dados de uma transação existente
        public void Atualizar(Transacao dados)
        {
            // Atualizar diretamente sem necessidade de busca prévia
            _dataConnection.Update(dados);
        }

        // Método para excluir uma transação pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<Transacao>().Delete(t => t.id == id);
        }

        // Método para obter uma transação pelo ID
        public Transacao ObterPorId(int id)
        {
            return _dataConnection.GetTable<Transacao>().FirstOrDefault(t => t.id == id);
        }

        // Método para obter todas as transações
        public List<Transacao> ObterTodas()
        {
            return _dataConnection.GetTable<Transacao>().ToList();
        }
    }
}
