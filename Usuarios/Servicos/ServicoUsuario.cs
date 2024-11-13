using PoupaPig.Dominio.Usuarios;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Usuarios.Servicos
{
    public class ServicoUsuario
    {
        private readonly IRepositorioUsuario _repositorioUsuario;

        public ServicoUsuario(IRepositorioUsuario repositorioUsuario)
        {
            _repositorioUsuario = repositorioUsuario;
        }

        public void Criar(Usuario dados)
        {
            _repositorioUsuario.Criar(dados);
        }

        public void Atualizar(Usuario dados)
        {
            _repositorioUsuario.Atualizar(dados);
        }

        public void Excluir(int id)
        {
            _repositorioUsuario.Excluir(id);
        }

        public Usuario ObterPorId(int id)
        {
            return _repositorioUsuario.ObterPorId(id);
        }

        public List<Usuario> ObterTodas()
        {
            return _repositorioUsuario.ObterTodas();
        }
    }
}
