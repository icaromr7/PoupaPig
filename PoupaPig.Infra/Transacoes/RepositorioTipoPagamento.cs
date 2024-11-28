using LinqToDB;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Transacoes
{
    public class RepositorioTipoPagamento : IRepositorioTipoPagamento
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injeção de dependência do banco de dados
        public RepositorioTipoPagamento(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar um novo TipoPagamento
        public void Criar(TipoPagamento dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar um TipoPagamento existente
        public void Atualizar(TipoPagamento dados)
        {
            var existente = _dataConnection.GetTable<TipoPagamento>()
                                           .FirstOrDefault(tp => tp.id == dados.id);
            if (existente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir um TipoPagamento pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<TipoPagamento>().Delete(tp => tp.id == id);
        }

        // Método para obter um TipoPagamento pelo ID
        public TipoPagamento ObterPorId(int id)
        {
            return _dataConnection.GetTable<TipoPagamento>().FirstOrDefault(tp => tp.id == id);
        }

        // Método para obter todos os TipoPagamento
        public List<TipoPagamento> ObterTodas()
        {
            return _dataConnection.GetTable<TipoPagamento>().ToList();
        }
    }
}
