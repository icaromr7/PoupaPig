using LinqToDB;
using PoupaPig.Dominio.Usuarios;
using PoupaPig.Dominio.Usuarios.Servicos;

namespace PoupaPig.Infra.Usuarios
{
    public class RepositorioUsuario : IRepositorioUsuario
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioUsuario(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar um novo usuário
        public void Criar(Usuario dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar os dados de um usuário existente
        public void Atualizar(Usuario dados)
        {
            // Atualizar diretamente sem necessidade de busca prévia
            _dataConnection.Update(dados);
        }

        // Método para excluir um usuário pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<Usuario>().Delete(u => u.id == id);
        }

        // Método para obter um usuário pelo ID
        public Usuario ObterPorId(int id)
        {
            return _dataConnection.GetTable<Usuario>().FirstOrDefault(u => u.id == id);
        }

        // Método para obter todos os usuários
        public List<Usuario> ObterTodas()
        {
            return _dataConnection.GetTable<Usuario>().ToList();
        }

        public Usuario ObterPorEmail(string email)
        {
            return _dataConnection.GetTable<Usuario>()
                                  .FirstOrDefault(u => u.email == email);
        }
        // Método para verificar se o e-mail já está registrado
        public bool EmailDuplicado(string email, int id)
        {
            // Supondo que exista um método para buscar o usuário pelo e-mail
            var usuarioExistente = _dataConnection.GetTable<Usuario>().FirstOrDefault(u => u.email == email);

            // Verifica se o usuário encontrado é diferente do usuário atual
            return usuarioExistente != null && usuarioExistente.id != id;
        }
    }
}
