using LinqToDB;
using PoupaPig.Dominio.Bancos;
using PoupaPig.Dominio.Bancos.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Bancos
{
    public class RepositorioUsuarioBanco : IRepositorioUsuarioBanco
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioUsuarioBanco(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar um novo usuário banco
        public void Criar(UsuarioBanco dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar um usuário banco existente
        public void Atualizar(UsuarioBanco dados)
        {
            var usuarioBancoExistente = _dataConnection.GetTable<UsuarioBanco>().FirstOrDefault(u => u.id == dados.id);
            if (usuarioBancoExistente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir um usuário banco pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<UsuarioBanco>().Delete(u => u.id == id);
        }

        // Método para obter um usuário banco pelo ID
        public UsuarioBanco ObterPorId(int id)
        {
            return _dataConnection.GetTable<UsuarioBanco>().FirstOrDefault(u => u.id == id);
        }

        // Método para obter todos os usuários banco
        public List<UsuarioBanco> ObterTodas()
        {
            return _dataConnection.GetTable<UsuarioBanco>().ToList();
        }
    }
}
