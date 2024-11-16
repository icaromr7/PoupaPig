using LinqToDB;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Transacoes
{
    public class RepositorioSentimentoTransacao : IRepositorioSentimentoTransacao
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injeção de dependência do banco de dados
        public RepositorioSentimentoTransacao(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar uma nova SentimentoTransacao
        public void Criar(SentimentoTransacao dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar uma SentimentoTransacao existente
        public void Atualizar(SentimentoTransacao dados)
        {
            var existente = _dataConnection.GetTable<SentimentoTransacao>()
                                           .FirstOrDefault(s => s.id == dados.id);
            if (existente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir uma SentimentoTransacao pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<SentimentoTransacao>().Delete(s => s.id == id);
        }

        // Método para obter uma SentimentoTransacao pelo ID
        public SentimentoTransacao ObterPorId(int id)
        {
            return _dataConnection.GetTable<SentimentoTransacao>().FirstOrDefault(s => s.id == id);
        }

        // Método para obter todas as SentimentoTransacao
        public List<SentimentoTransacao> ObterTodas()
        {
            return _dataConnection.GetTable<SentimentoTransacao>().ToList();
        }
    }
}
