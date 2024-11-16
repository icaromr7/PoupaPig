using PoupaPig.Dominio.Transacoes;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public class ServicoTipoTransacao
    {
        private readonly IRepositorioTipoTransacao _repositorio;

        // Construtor com injeção de dependência
        public ServicoTipoTransacao(IRepositorioTipoTransacao repositorio)
        {
            _repositorio = repositorio;
        }

        // Método para criar um novo TipoTransacao
        public void Criar(TipoTransacao dados)
        {
            _repositorio.Criar(dados);
        }

        // Método para atualizar um TipoTransacao existente
        public void Atualizar(TipoTransacao dados)
        {
            _repositorio.Atualizar(dados);
        }

        // Método para excluir um TipoTransacao pelo ID
        public void Excluir(int id)
        {
            _repositorio.Excluir(id);
        }

        // Método para obter um TipoTransacao pelo ID
        public TipoTransacao ObterPorId(int id)
        {
            return _repositorio.ObterPorId(id);
        }

        // Método para obter todos os TipoTransacao
        public List<TipoTransacao> ObterTodas()
        {
            return _repositorio.ObterTodas();
        }
    }
}
