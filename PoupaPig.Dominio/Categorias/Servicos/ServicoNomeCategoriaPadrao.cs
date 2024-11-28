using PoupaPig.Dominio.Categorias;
using PoupaPig.Dominio.Categorias.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Categorias.Servicos
{
    public class ServicoNomeCategoriaPadrao
    {
        private readonly IRepositorioNomeCategoriaPadrao _repositorio;

        // Injetando o repositório através do construtor
        public ServicoNomeCategoriaPadrao(IRepositorioNomeCategoriaPadrao repositorio)
        {
            _repositorio = repositorio;
        }

        public void Criar(NomeCategoriaPadrao dados)
        {
            _repositorio.Criar(dados);
        }

        public void Atualizar(NomeCategoriaPadrao dados)
        {
            _repositorio.Atualizar(dados);
        }

        public void Excluir(int id)
        {
            _repositorio.Excluir(id);
        }

        public NomeCategoriaPadrao ObterPorId(int id)
        {
            return _repositorio.ObterPorId(id);
        }

        public List<NomeCategoriaPadrao> ObterTodas()
        {
            return _repositorio.ObterTodas();
        }
    }
}
