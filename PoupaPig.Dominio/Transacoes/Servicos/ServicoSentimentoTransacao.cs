using PoupaPig.Dominio.Transacoes;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public class ServicoSentimentoTransacao
    {
        private readonly IRepositorioSentimentoTransacao _repositorio;

        // Construtor com injeção de dependência
        public ServicoSentimentoTransacao(IRepositorioSentimentoTransacao repositorio)
        {
            _repositorio = repositorio;
        }

        // Método para criar uma nova SentimentoTransacao
        public void Criar(SentimentoTransacao dados)
        {
            _repositorio.Criar(dados);
        }

        // Método para atualizar uma SentimentoTransacao existente
        public void Atualizar(SentimentoTransacao dados)
        {
            _repositorio.Atualizar(dados);
        }

        // Método para excluir uma SentimentoTransacao pelo ID
        public void Excluir(int id)
        {
            _repositorio.Excluir(id);
        }

        // Método para obter uma SentimentoTransacao pelo ID
        public SentimentoTransacao ObterPorId(int id)
        {
            return _repositorio.ObterPorId(id);
        }

        // Método para obter todas as SentimentoTransacao
        public List<SentimentoTransacao> ObterTodas()
        {
            return _repositorio.ObterTodas();
        }
    }
}
