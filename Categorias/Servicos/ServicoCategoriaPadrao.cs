using PoupaPig.Dominio.Categorias;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Categorias.Servicos
{
    public class ServicoCategoriaPadrao
    {
        private readonly IRepositorioCategoriaPadrao _repositorioCategoriaPadrao;

        // Injetando o RepositorioCategoriaPadrao através do construtor
        public ServicoCategoriaPadrao(IRepositorioCategoriaPadrao repositorioCategoriaPadrao)
        {
            _repositorioCategoriaPadrao = repositorioCategoriaPadrao;
        }

        // Método para criar uma nova categoria padrão
        public void Criar(CategoriaPadrao dados)
        {
            _repositorioCategoriaPadrao.Criar(dados);
        }

        // Método para atualizar uma categoria padrão existente
        public void Atualizar(CategoriaPadrao dados)
        {
            _repositorioCategoriaPadrao.Atualizar(dados);
        }

        // Método para excluir uma categoria padrão pelo ID
        public void Excluir(int id)
        {
            _repositorioCategoriaPadrao.Excluir(id);
        }

        // Método para obter uma categoria padrão pelo ID
        public CategoriaPadrao ObterPorId(int id)
        {
            return _repositorioCategoriaPadrao.ObterPorId(id);
        }

        // Método para obter todas as categorias padrão
        public List<CategoriaPadrao> ObterTodas()
        {
            return _repositorioCategoriaPadrao.ObterTodas();
        }
    }
}
