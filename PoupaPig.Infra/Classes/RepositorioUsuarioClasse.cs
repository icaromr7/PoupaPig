using LinqToDB;
using PoupaPig.Dominio.Classes;
using PoupaPig.Dominio.Classes.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Classes
{
    public class RepositorioUsuarioClasse : IRepositorioUsuarioClasse
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioUsuarioClasse(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar um novo UsuarioClasse
        public void Criar(UsuarioClasse dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar um UsuarioClasse existente
        public void Atualizar(UsuarioClasse dados)
        {
            var usuarioClasseExistente = _dataConnection.GetTable<UsuarioClasse>().FirstOrDefault(c => c.id == dados.id);
            if (usuarioClasseExistente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir um UsuarioClasse pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<UsuarioClasse>().Delete(c => c.id == id);
        }

        // Método para obter um UsuarioClasse pelo ID
        public UsuarioClasse ObterPorId(int id)
        {
            return _dataConnection.GetTable<UsuarioClasse>().FirstOrDefault(c => c.id == id);
        }

        // Método para obter todos os UsuarioClasse
        public List<UsuarioClasse> ObterTodas()
        {
            return _dataConnection.GetTable<UsuarioClasse>().ToList();
        }
    }
}
