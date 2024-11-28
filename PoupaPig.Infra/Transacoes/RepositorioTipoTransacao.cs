using LinqToDB;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Transacoes
{
    public class RepositorioTipoTransacao : IRepositorioTipoTransacao
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injeção de dependência do banco de dados
        public RepositorioTipoTransacao(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar um novo TipoTransacao
        public void Criar(TipoTransacao dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar um TipoTransacao existente
        public void Atualizar(TipoTransacao dados)
        {
            var existente = _dataConnection.GetTable<TipoTransacao>()
                                           .FirstOrDefault(tp => tp.id == dados.id);
            if (existente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir um TipoTransacao pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<TipoTransacao>().Delete(tp => tp.id == id);
        }

        // Método para obter um TipoTransacao pelo ID
        public TipoTransacao ObterPorId(int id)
        {
            return _dataConnection.GetTable<TipoTransacao>().FirstOrDefault(tp => tp.id == id);
        }

        // Método para obter todos os TipoTransacao
        public List<TipoTransacao> ObterTodas()
        {
            return _dataConnection.GetTable<TipoTransacao>().ToList();
        }
    }
}
