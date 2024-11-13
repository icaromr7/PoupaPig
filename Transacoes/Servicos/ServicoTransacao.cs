using PoupaPig.Dominio.Transacoes;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public class ServicoTransacao
    {
        private readonly IRepositorioTransacao _repositorioTransacao;

        public ServicoTransacao(IRepositorioTransacao repositorioTransacao)
        {
            _repositorioTransacao = repositorioTransacao;
        }

        public void Criar(Transacao dados)
        {
            _repositorioTransacao.Criar(dados);
        }

        public void Atualizar(Transacao dados)
        {
            _repositorioTransacao.Atualizar(dados);
        }

        public void Excluir(int id)
        {
            _repositorioTransacao.Excluir(id);
        }

        public Transacao ObterPorId(int id)
        {
            return _repositorioTransacao.ObterPorId(id);
        }

        public List<Transacao> ObterTodas()
        {
            return _repositorioTransacao.ObterTodas();
        }
    }
}
