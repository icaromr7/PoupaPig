using LinqToDB;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;

namespace PoupaPig.Infra.Transacoes
{
    public class RepositorioTransacaoMetaInvestimento : IRepositorioTransacaoMetaInvestimento
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioTransacaoMetaInvestimento(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar uma nova TransacaoMetaInvestimento
        public void Criar(TransacaoMetaInvestimento dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar os dados de uma TransacaoMetaInvestimento existente
        public void Atualizar(TransacaoMetaInvestimento dados)
        {
            // Atualiza diretamente sem necessidade de busca prévia
            _dataConnection.Update(dados);
        }

        // Método para excluir uma TransacaoMetaInvestimento pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<TransacaoMetaInvestimento>().Delete(t => t.id == id);
        }

        // Método para obter uma TransacaoMetaInvestimento pelo ID
        public TransacaoMetaInvestimento ObterPorId(int id)
        {
            return _dataConnection.GetTable<TransacaoMetaInvestimento>().FirstOrDefault(t => t.id == id);
        }

        // Método para obter todas as TransacaoMetaInvestimento
        public List<TransacaoMetaInvestimento> ObterTodas()
        {
            return _dataConnection.GetTable<TransacaoMetaInvestimento>().ToList();
        }

        // Método para obter TransacaoMetaInvestimento por usuario_id
        public List<TransacaoMetaInvestimento> ObterPorUsuarioId(int usuarioId)
        {
            return _dataConnection.GetTable<TransacaoMetaInvestimento>()
                                  .Where(t => t.usuario_id == usuarioId)
                                  .ToList();
        }
    }
}
