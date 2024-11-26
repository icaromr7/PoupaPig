using LinqToDB;
using PoupaPig.Dominio.Categorias;
using PoupaPig.Dominio.Categorias.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Categorias
{
    public class RepositorioCategoriaPersonalizada : IRepositorioCategoriaPersonalizada
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioCategoriaPersonalizada(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar uma nova categoria personalizada
        public void Criar(CategoriaPersonalizada dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar uma categoria personalizada existente
        public void Atualizar(CategoriaPersonalizada dados)
        {
            var categoriaExistente = _dataConnection.GetTable<CategoriaPersonalizada>().FirstOrDefault(c => c.id == dados.id);
            if (categoriaExistente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir uma categoria personalizada pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<CategoriaPersonalizada>().Delete(c => c.id == id);
        }

        // Método para obter uma categoria personalizada pelo ID
        public CategoriaPersonalizada ObterPorId(int id)
        {
            return _dataConnection.GetTable<CategoriaPersonalizada>().FirstOrDefault(c => c.id == id);
        }

        // Método para obter todas as categorias personalizadas
        public List<CategoriaPersonalizada> ObterTodas(int usuarioId)
        {
            return _dataConnection.GetTable<CategoriaPersonalizada>()
                .Where(c=> c.usuario_id == usuarioId)
                .ToList();
        }
        public CategoriaPersonalizada ObterPorNome(string nome)
        {
            return _dataConnection.GetTable<CategoriaPersonalizada>().FirstOrDefault(c => c.nome == nome);
        }
    }
}
