using LinqToDB;
using PoupaPig.Dominio.Questionarios;
using PoupaPig.Dominio.Questionarios.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Questionarios
{
    public class RepositorioQuestionario : IRepositorioQuestionario
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioQuestionario(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar um novo questionário
        public void Criar(Questionario dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar os dados de um questionário existente
        public void Atualizar(Questionario dados)
        {
            // Atualizar diretamente sem necessidade de busca prévia
            _dataConnection.Update(dados);
        }

        // Método para excluir um questionário pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<Questionario>().Delete(q => q.id == id);
        }

        // Método para obter um questionário pelo ID
        public Questionario ObterPorId(int id)
        {
            return _dataConnection.GetTable<Questionario>().FirstOrDefault(q => q.id == id);
        }

        // Método para obter todos os questionários
        public List<Questionario> ObterTodas()
        {
            return _dataConnection.GetTable<Questionario>().ToList();
        }
    }
}
