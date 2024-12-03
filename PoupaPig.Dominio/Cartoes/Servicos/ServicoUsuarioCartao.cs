using PoupaPig.Dominio.Cartoes;
using PoupaPig.Dominio.Cartoes.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Cartoes.Servicos
{
    public class ServicoUsuarioCartao
    {
        private readonly IRepositorioUsuarioCartao _repositorio;

        // Injetando o repositório através do construtor
        public ServicoUsuarioCartao(IRepositorioUsuarioCartao repositorio)
        {
            _repositorio = repositorio;
        }

        public void Criar(UsuarioCartao dados)
        {
            _repositorio.Criar(dados);
        }

        public void Atualizar(UsuarioCartao dados)
        {
            _repositorio.Atualizar(dados);
        }

        public void Excluir(int id)
        {
            _repositorio.Excluir(id);
        }

        public UsuarioCartao ObterPorId(int id)
        {
            return _repositorio.ObterPorId(id);
        }

        public List<UsuarioCartao> ObterTodas()
        {
            return _repositorio.ObterTodas();
        }
        public List<UsuarioCartao> ObterPorUsuario(int usuario_id)
        {
            return _repositorio.ObterTodas().Where(u => u.usuario_id == usuario_id).ToList();
        }
    }
}
