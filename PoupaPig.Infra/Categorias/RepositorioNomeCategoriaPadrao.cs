using LinqToDB;
using PoupaPig.Dominio.Categorias;
using PoupaPig.Dominio.Categorias.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Categorias
{
    public class RepositorioNomeCategoriaPadrao : IRepositorioNomeCategoriaPadrao
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioNomeCategoriaPadrao(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar um novo NomeCategoriaPadrao
        public void Criar(NomeCategoriaPadrao dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar um NomeCategoriaPadrao existente
        public void Atualizar(NomeCategoriaPadrao dados)
        {
            var categoriaExistente = _dataConnection.GetTable<NomeCategoriaPadrao>().FirstOrDefault(c => c.id == dados.id);
            if (categoriaExistente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir um NomeCategoriaPadrao pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<NomeCategoriaPadrao>().Delete(c => c.id == id);
        }

        // Método para obter um NomeCategoriaPadrao pelo ID
        public NomeCategoriaPadrao ObterPorId(int id)
        {
            return _dataConnection.GetTable<NomeCategoriaPadrao>().FirstOrDefault(c => c.id == id);
        }

        // Método para obter todas as categorias padrão
        public List<NomeCategoriaPadrao> ObterTodas()
        {
            return _dataConnection.GetTable<NomeCategoriaPadrao>().ToList();
        }

        public NomeCategoriaPadrao ObterPorNome(string nome)
        {
            return _dataConnection.GetTable<NomeCategoriaPadrao>().FirstOrDefault(c => c.nome == nome);
        }
    }
}
