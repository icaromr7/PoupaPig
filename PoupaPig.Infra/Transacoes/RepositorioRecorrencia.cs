using LinqToDB;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Transacoes
{
    public class RepositorioRecorrencia : IRepositorioRecorrencia
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injeção de dependência do banco de dados
        public RepositorioRecorrencia(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar uma nova recorrência
        public void Criar(Recorrencia dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar uma recorrência existente
        public void Atualizar(Recorrencia dados)
        {
            var existente = _dataConnection.GetTable<Recorrencia>()
                                           .FirstOrDefault(r => r.id == dados.id);
            if (existente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir uma recorrência pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<Recorrencia>().Delete(r => r.id == id);
        }

        // Método para obter uma recorrência pelo ID
        public Recorrencia ObterPorId(int id)
        {
            return _dataConnection.GetTable<Recorrencia>().FirstOrDefault(r => r.id == id);
        }

        // Método para obter todas as recorrências
        public List<Recorrencia> ObterTodas()
        {
            return _dataConnection.GetTable<Recorrencia>().ToList();
        }
    }
}
