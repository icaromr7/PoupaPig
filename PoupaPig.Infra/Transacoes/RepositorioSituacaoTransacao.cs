using LinqToDB;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Transacoes
{
    public class RepositorioSituacaoTransacao : IRepositorioSituacaoTransacao
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injeção de dependência do banco de dados
        public RepositorioSituacaoTransacao(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar uma nova SituacaoTransacao
        public void Criar(SituacaoTransacao dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar uma SituacaoTransacao existente
        public void Atualizar(SituacaoTransacao dados)
        {
            var existente = _dataConnection.GetTable<SituacaoTransacao>()
                                           .FirstOrDefault(s => s.id == dados.id);
            if (existente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir uma SituacaoTransacao pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<SituacaoTransacao>().Delete(s => s.id == id);
        }

        // Método para obter uma SituacaoTransacao pelo ID
        public SituacaoTransacao ObterPorId(int id)
        {
            return _dataConnection.GetTable<SituacaoTransacao>().FirstOrDefault(s => s.id == id);
        }

        // Método para obter todas as SituacaoTransacao
        public List<SituacaoTransacao> ObterTodas()
        {
            return _dataConnection.GetTable<SituacaoTransacao>().ToList();
        }
    }
}
