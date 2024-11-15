using LinqToDB;
using PoupaPig.Dominio.Usuarios;
using PoupaPig.Dominio.Usuarios.Servicos;
using System.Collections.Generic;
using System.Linq;

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
    }
}
