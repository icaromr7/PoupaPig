using PoupaPig.Dominio.Questionarios;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Questionarios.Servicos
{
    public class ServicoQuestionario
    {
        private readonly IRepositorioQuestionario _repositorioQuestionario;

        // Injetando o RepositorioQuestionario através do construtor
        public ServicoQuestionario(IRepositorioQuestionario repositorioQuestionario)
        {
            _repositorioQuestionario = repositorioQuestionario;
        }

        // Método para criar um novo questionário
        public void Criar(Questionario dados)
        {
            _repositorioQuestionario.Criar(dados);
        }

        // Método para atualizar os dados de um questionário existente
        public void Atualizar(Questionario dados)
        {
            _repositorioQuestionario.Atualizar(dados);
        }

        // Método para excluir um questionário pelo ID
        public void Excluir(int id)
        {
            _repositorioQuestionario.Excluir(id);
        }

        // Método para obter um questionário pelo ID
        public Questionario ObterPorId(int id)
        {
            return _repositorioQuestionario.ObterPorId(id);
        }

        // Método para obter todos os questionários
        public List<Questionario> ObterTodas()
        {
            return _repositorioQuestionario.ObterTodas();
        }
    }
}
