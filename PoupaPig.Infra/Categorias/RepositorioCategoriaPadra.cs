using LinqToDB;
using PoupaPig.Dominio.Categorias;
using PoupaPig.Dominio.Categorias.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Categorias
{
    public class RepositorioCategoriaPadrao : IRepositorioCategoriaPadrao
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioCategoriaPadrao(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar uma nova categoria padrão
        public void Criar(CategoriaPadrao dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar uma categoria padrão existente
        public void Atualizar(CategoriaPadrao dados)
        {
            var categoriaExistente = _dataConnection.GetTable<CategoriaPadrao>().FirstOrDefault(c => c.id == dados.id);
            if (categoriaExistente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir uma categoria padrão pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<CategoriaPadrao>().Delete(c => c.id == id);
        }

        // Método para obter uma categoria padrão pelo ID
        public CategoriaPadrao ObterPorId(int id)
        {
            return _dataConnection.GetTable<CategoriaPadrao>().FirstOrDefault(c => c.id == id);
        }

        // Método para obter todas as categorias padrão
        public List<CategoriaPadrao> ObterTodas()
        {
            return _dataConnection.GetTable<CategoriaPadrao>().ToList();
        }
    }
}
