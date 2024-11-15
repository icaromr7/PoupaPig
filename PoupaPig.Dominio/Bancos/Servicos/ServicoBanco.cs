using PoupaPig.Dominio.Bancos;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Bancos.Servicos
{
    public class ServicoBanco
    {
        private readonly IRepositorioBanco _repositorioBanco;

        // Injetando o RepositorioBanco através do construtor
        public ServicoBanco(IRepositorioBanco repositorioBanco)
        {
            _repositorioBanco = repositorioBanco;
        }

        // Método para criar um novo banco
        public void Criar(banco dados)
        {
            _repositorioBanco.Criar(dados);
        }

        // Método para atualizar um banco existente
        public void Atualizar(banco dados)
        {
            _repositorioBanco.Atualizar(dados);
        }

        // Método para excluir um banco pelo ID
        public void Excluir(int id)
        {
            _repositorioBanco.Excluir(id);
        }

        // Método para obter um banco pelo ID
        public banco ObterPorId(int id)
        {
            return _repositorioBanco.ObterPorId(id);
        }

        // Método para obter todos os bancos
        public List<banco> ObterTodas()
        {
            return _repositorioBanco.ObterTodas();
        }
    }
}
