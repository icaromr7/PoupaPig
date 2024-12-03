using LinqToDB;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;

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

        // Novo método para obter o saldo por usuario_id
        public decimal ObterSaldoPorUsuario(int usuario_id)
        {
            var inicioDoMes = new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1);
            var fimDoMes = inicioDoMes.AddMonths(1).AddTicks(-1);

            // Calcula o total de entradas
            var entradas = _dataConnection.GetTable<Transacao>()
                .Where(t =>
                    t.usuario_id == usuario_id &&
                    t.tipo_id == 1 && // Tipo 1 = Entrada
                    t.situacao_id == 1 && // Apenas transações confirmadas
                    t.data_transacao >= inicioDoMes &&
                    t.data_transacao <= fimDoMes)
                .Sum(t => (decimal?)t.valor) ?? 0;

            // Calcula o total de saídas
            var saidas = _dataConnection.GetTable<Transacao>()
                .Where(t =>
                    t.usuario_id == usuario_id &&
                    t.tipo_id == 2 && // Tipo 2 = Saída
                    t.situacao_id == 1 && // Apenas transações confirmadas
                    t.data_transacao >= inicioDoMes &&
                    t.data_transacao <= fimDoMes)
                .Sum(t => (decimal?)t.valor) ?? 0;

            var total = entradas - saidas;
            // Calcula o saldo (entradas - saídas)
            return total >= 0 ? 0 : Math.Abs(total);
        }

        public List<Transacao> ObterTransacoesPorMetaInvestimento(int idMetaInvestimento)
        {
            // Consulta para obter as transações associadas ao id_meta_investimento
            var transacoes = _dataConnection.GetTable<Transacao>()
                                .Where(t => t.meta_investimento_id == idMetaInvestimento)
                                .ToList();

            return transacoes;
        }

    }
}
