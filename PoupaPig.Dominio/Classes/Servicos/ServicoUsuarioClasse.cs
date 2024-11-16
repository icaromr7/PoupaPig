using PoupaPig.Dominio.Classes;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Classes.Servicos
{
    public class ServicoUsuarioClasse
    {
        private readonly IRepositorioUsuarioClasse _repositorio;

        // Injetando o repositório através do construtor
        public ServicoUsuarioClasse(IRepositorioUsuarioClasse repositorio)
        {
            _repositorio = repositorio;
        }

        public void Criar(UsuarioClasse dados)
        {
            _repositorio.Criar(dados);
        }

        public void Atualizar(UsuarioClasse dados)
        {
            _repositorio.Atualizar(dados);
        }

        public void Excluir(int id)
        {
            _repositorio.Excluir(id);
        }

        public UsuarioClasse ObterPorId(int id)
        {
            return _repositorio.ObterPorId(id);
        }

        public List<UsuarioClasse> ObterTodas()
        {
            return _repositorio.ObterTodas();
        }
    }
}
