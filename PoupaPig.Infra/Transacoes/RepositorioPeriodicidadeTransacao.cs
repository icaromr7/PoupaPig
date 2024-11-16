using LinqToDB;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Transacoes
{
    public class RepositorioPeriodicidadeTransacao : IRepositorioPeriodicidadeTransacao
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Construtor para injetar a dependência do banco de dados
        public RepositorioPeriodicidadeTransacao(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar uma nova periodicidade de transação
        public void Criar(PeriodicidadeTransacao dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar uma periodicidade de transação existente
        public void Atualizar(PeriodicidadeTransacao dados)
        {
            var existente = _dataConnection.GetTable<PeriodicidadeTransacao>()
                                           .FirstOrDefault(p => p.id == dados.id);
            if (existente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir uma periodicidade de transação pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<PeriodicidadeTransacao>().Delete(p => p.id == id);
        }

        // Método para obter uma periodicidade de transação pelo ID
        public PeriodicidadeTransacao ObterPorId(int id)
        {
            return _dataConnection.GetTable<PeriodicidadeTransacao>().FirstOrDefault(p => p.id == id);
        }

        // Método para obter todas as periodicidades de transação
        public List<PeriodicidadeTransacao> ObterTodas()
        {
            return _dataConnection.GetTable<PeriodicidadeTransacao>().ToList();
        }
    }
}
