using PoupaPig.Dominio.Bancos;
using PoupaPig.Dominio.Bancos.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Bancos.Servicos
{
    public class ServicoUsuarioBanco
    {
        private readonly IRepositorioUsuarioBanco _repositorio;

        // Injetando o repositório através do construtor
        public ServicoUsuarioBanco(IRepositorioUsuarioBanco repositorio)
        {
            _repositorio = repositorio;
        }

        public void Criar(UsuarioBanco dados)
        {
            _repositorio.Criar(dados);
        }

        public void Atualizar(UsuarioBanco dados)
        {
            _repositorio.Atualizar(dados);
        }

        public void Excluir(int id)
        {
            _repositorio.Excluir(id);
        }

        public UsuarioBanco ObterPorId(int id)
        {
            return _repositorio.ObterPorId(id);
        }

        public List<UsuarioBanco> ObterTodas()
        {
            return _repositorio.ObterTodas();
        }
    }
}
