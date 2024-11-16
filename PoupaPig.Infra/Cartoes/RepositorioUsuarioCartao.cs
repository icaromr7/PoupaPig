using LinqToDB;
using PoupaPig.Dominio.Cartoes;
using PoupaPig.Dominio.Cartoes.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Cartoes
{
    public class RepositorioUsuarioCartao : IRepositorioUsuarioCartao
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioUsuarioCartao(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar um novo usuário cartao
        public void Criar(UsuarioCartao dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar um usuário cartao existente
        public void Atualizar(UsuarioCartao dados)
        {
            var usuarioCartaoExistente = _dataConnection.GetTable<UsuarioCartao>().FirstOrDefault(u => u.id == dados.id);
            if (usuarioCartaoExistente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir um usuário cartao pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<UsuarioCartao>().Delete(u => u.id == id);
        }

        // Método para obter um usuário cartao pelo ID
        public UsuarioCartao ObterPorId(int id)
        {
            return _dataConnection.GetTable<UsuarioCartao>().FirstOrDefault(u => u.id == id);
        }

        // Método para obter todos os usuários cartao
        public List<UsuarioCartao> ObterTodas()
        {
            return _dataConnection.GetTable<UsuarioCartao>().ToList();
        }
    }
}
