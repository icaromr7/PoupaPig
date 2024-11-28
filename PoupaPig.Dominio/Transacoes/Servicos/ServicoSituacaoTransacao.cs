using PoupaPig.Dominio.Transacoes;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public class ServicoSituacaoTransacao
    {
        private readonly IRepositorioSituacaoTransacao _repositorio;

        // Construtor com injeção de dependência
        public ServicoSituacaoTransacao(IRepositorioSituacaoTransacao repositorio)
        {
            _repositorio = repositorio;
        }

        // Método para criar uma nova SituacaoTransacao
        public void Criar(SituacaoTransacao dados)
        {
            _repositorio.Criar(dados);
        }

        // Método para atualizar uma SituacaoTransacao existente
        public void Atualizar(SituacaoTransacao dados)
        {
            _repositorio.Atualizar(dados);
        }

        // Método para excluir uma SituacaoTransacao pelo ID
        public void Excluir(int id)
        {
            _repositorio.Excluir(id);
        }

        // Método para obter uma SituacaoTransacao pelo ID
        public SituacaoTransacao ObterPorId(int id)
        {
            return _repositorio.ObterPorId(id);
        }

        // Método para obter todas as SituacaoTransacao
        public List<SituacaoTransacao> ObterTodas()
        {
            return _repositorio.ObterTodas();
        }
    }
}
