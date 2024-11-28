using PoupaPig.Dominio.Transacoes;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public class ServicoTipoPagamento
    {
        private readonly IRepositorioTipoPagamento _repositorio;

        // Construtor com injeção de dependência
        public ServicoTipoPagamento(IRepositorioTipoPagamento repositorio)
        {
            _repositorio = repositorio;
        }

        // Método para criar um novo TipoPagamento
        public void Criar(TipoPagamento dados)
        {
            _repositorio.Criar(dados);
        }

        // Método para atualizar um TipoPagamento existente
        public void Atualizar(TipoPagamento dados)
        {
            _repositorio.Atualizar(dados);
        }

        // Método para excluir um TipoPagamento pelo ID
        public void Excluir(int id)
        {
            _repositorio.Excluir(id);
        }

        // Método para obter um TipoPagamento pelo ID
        public TipoPagamento ObterPorId(int id)
        {
            return _repositorio.ObterPorId(id);
        }

        // Método para obter todos os TipoPagamento
        public List<TipoPagamento> ObterTodas()
        {
            return _repositorio.ObterTodas();
        }
    }
}
