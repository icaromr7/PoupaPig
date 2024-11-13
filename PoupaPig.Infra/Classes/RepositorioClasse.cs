using PoupaPig.Dominio.Classes;
using PoupaPig.Dominio.Classes.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Classes
{
    public class RepositorioClasse : IRepositorioClasse
    {
        private readonly AppDbContext _context;

        // Injetando o DbContext através do construtor
        public RepositorioClasse(AppDbContext context)
        {
            _context = context;
        }

        // Método para criar uma nova classe
        public void Criar(Classe dados)
        {
            _context.Classes.Add(dados);
            _context.SaveChanges();
        }

        // Método para atualizar uma classe existente
        public void Atualizar(Classe dados)
        {
            var classeExistente = _context.Classes.Find(dados.Id);
            if (classeExistente != null)
            {
                _context.Entry(classeExistente).CurrentValues.SetValues(dados);
                _context.SaveChanges();
            }
        }

        // Método para excluir uma classe pelo ID
        public void Excluir(int id)
        {
            var classe = _context.Classes.Find(id);
            if (classe != null)
            {
                _context.Classes.Remove(classe);
                _context.SaveChanges();
            }
        }

        // Método para obter uma classe pelo ID
        public Classe ObterPorId(int id)
        {
            return _context.Classes.Find(id);
        }

        // Método para obter todas as classes
        public List<Classe> ObterTodas()
        {
            return _context.Classes.ToList();
        }
    }
}
