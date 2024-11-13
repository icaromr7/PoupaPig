using PoupaPig.Dominio.Questionarios;
using PoupaPig.Dominio.Questionarios.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Questionarios
{
    public class RepositorioQuestionario : IRepositorioQuestionario
    {
        private readonly AppDbContext _context;

        // Injetando o DbContext através do construtor
        public RepositorioQuestionario(AppDbContext context)
        {
            _context = context;
        }

        // Método para criar um novo questionário
        public void Criar(Questionario dados)
        {
            _context.Questionarios.Add(dados);
            _context.SaveChanges();
        }

        // Método para atualizar os dados de um questionário existente
        public void Atualizar(Questionario dados)
        {
            var questionarioExistente = _context.Questionarios.Find(dados.Id);
            if (questionarioExistente != null)
            {
                _context.Entry(questionarioExistente).CurrentValues.SetValues(dados);
                _context.SaveChanges();
            }
        }

        // Método para excluir um questionário pelo ID
        public void Excluir(int id)
        {
            var questionario = _context.Questionarios.Find(id);
            if (questionario != null)
            {
                _context.Questionarios.Remove(questionario);
                _context.SaveChanges();
            }
        }

        // Método para obter um questionário pelo ID
        public Questionario ObterPorId(int id)
        {
            return _context.Questionarios.Find(id);
        }

        // Método para obter todos os questionários
        public List<Questionario> ObterTodas()
        {
            return _context.Questionarios.ToList();
        }
    }
}
