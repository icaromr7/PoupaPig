using PoupaPig.Dominio.Cartoes;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Cartoes.Servicos
{
    public class ServicoCartao
    {
        private readonly IRepositorioCartao _repositorioCartao;

        // Injetando o RepositorioCartao através do construtor
        public ServicoCartao(IRepositorioCartao repositorioCartao)
        {
            _repositorioCartao = repositorioCartao;
        }

        // Método para criar um novo cartão
        public void Criar(Cartao dados)
        {
            _repositorioCartao.Criar(dados);
        }

        // Método para atualizar um cartão existente
        public void Atualizar(Cartao dados)
        {
            _repositorioCartao.Atualizar(dados);
        }

        // Método para excluir um cartão pelo ID
        public void Excluir(int id)
        {
            _repositorioCartao.Excluir(id);
        }

        // Método para obter um cartão pelo ID
        public Cartao ObterPorId(int id)
        {
            return _repositorioCartao.ObterPorId(id);
        }

        // Método para obter todos os cartões
        public List<Cartao> ObterTodas()
        {
            return _repositorioCartao.ObterTodas();
        }
        public List<Cartao> ObterCartoesPorUsuario(int usuarioId)
        {
            return _repositorioCartao.ObterCartoesPorUsuario(usuarioId);
        }
    }
}
