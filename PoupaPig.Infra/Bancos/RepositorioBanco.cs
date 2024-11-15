using LinqToDB;
using PoupaPig.Dominio.Bancos;
using PoupaPig.Dominio.Bancos.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Bancos
{
    public class RepositorioBanco : IRepositorioBanco
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioBanco(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar um novo banco
        public void Criar(Banco dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar um banco existente
        public void Atualizar(Banco dados)
        {
            var bancoExistente = _dataConnection.GetTable<Banco>().FirstOrDefault(b => b.id == dados.id);
            if (bancoExistente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir um banco pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<Banco>().Delete(b => b.id == id);
        }

        // Método para obter um banco pelo ID
        public Banco ObterPorId(int id)
        {
            return _dataConnection.GetTable<Banco>().FirstOrDefault(b => b.id == id);
        }

        // Método para obter todos os bancos
        public List<Banco> ObterTodas()
        {
            return _dataConnection.GetTable<Banco>().ToList();
        }
    }
}
