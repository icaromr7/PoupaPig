using LinqToDB;
using PoupaPig.Dominio.Categorias;
using PoupaPig.Dominio.Categorias.Servicos;

namespace PoupaPig.Infra.Categorias
{
    public class RepositorioCategoria : IRepositorioCategoria
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioCategoria(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar uma nova categoria personalizada
        public void Criar(Categoria dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar uma categoria personalizada existente
        public void Atualizar(Categoria dados)
        {
            var categoriaExistente = _dataConnection.GetTable<Categoria>().FirstOrDefault(c => c.id == dados.id);
            if (categoriaExistente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir uma categoria personalizada pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<Categoria>().Delete(c => c.id == id);
        }

        // Método para obter uma categoria personalizada pelo ID
        public Categoria ObterPorId(int id)
        {
            return _dataConnection.GetTable<Categoria>().FirstOrDefault(c => c.id == id);
        }

        // Método para obter todas as categorias personalizadas
        public List<Categoria> ObterTodas(int usuarioId)
        {
            return _dataConnection.GetTable<Categoria>()
                .Where(c=> c.usuario_id == usuarioId)
                .ToList();
        }
        public Categoria ObterPorNome(string nome, int usuarioId)
        {
            return _dataConnection.GetTable<Categoria>().FirstOrDefault(c => c.nome == nome && c.usuario_id != usuarioId);
        }
    }
}
