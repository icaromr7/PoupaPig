using PoupaPig.Dominio.Transacoes;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public class ServicoPeriodicidadeTransacao
    {
        private readonly IRepositorioPeriodicidadeTransacao _repositorio;

        public ServicoPeriodicidadeTransacao(IRepositorioPeriodicidadeTransacao repositorio)
        {
            _repositorio = repositorio;
        }

        // Método para criar uma nova periodicidade de transação
        public void Criar(PeriodicidadeTransacao dados)
        {
            _repositorio.Criar(dados);
        }

        // Método para atualizar uma periodicidade de transação existente
        public void Atualizar(PeriodicidadeTransacao dados)
        {
            _repositorio.Atualizar(dados);
        }

        // Método para excluir uma periodicidade de transação pelo ID
        public void Excluir(int id)
        {
            _repositorio.Excluir(id);
        }

        // Método para obter uma periodicidade de transação pelo ID
        public PeriodicidadeTransacao ObterPorId(int id)
        {
            return _repositorio.ObterPorId(id);
        }

        // Método para obter todas as periodicidades de transação
        public List<PeriodicidadeTransacao> ObterTodas()
        {
            return _repositorio.ObterTodas();
        }
    }
}
