using PoupaPig.Dominio.Categorias;
using PoupaPig.Dominio.Categorias.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Categorias
{
    public class RepositorioCategoriaPersonalizada : IRepositorioCategoriaPersonalizada
    {
        private readonly AppDbContext _context;

        // Injetando o DbContext através do construtor
        public RepositorioCategoriaPersonalizada(AppDbContext context)
        {
            _context = context;
        }

        // Método para criar uma nova categoria personalizada
        public void Criar(CategoriaPersonalizada dados)
        {
            _context.CategoriasPersonalizadas.Add(dados);
            _context.SaveChanges();
        }

        // Método para atualizar uma categoria personalizada existente
        public void Atualizar(CategoriaPersonalizada dados)
        {
            var categoriaExistente = _context.CategoriasPersonalizadas.Find(dados.Id);
            if (categoriaExistente != null)
            {
                _context.Entry(categoriaExistente).CurrentValues.SetValues(dados);
                _context.SaveChanges();
            }
        }

        // Método para excluir uma categoria personalizada pelo ID
        public void Excluir(int id)
        {
            var categoria = _context.CategoriasPersonalizadas.Find(id);
            if (categoria != null)
            {
                _context.CategoriasPersonalizadas.Remove(categoria);
                _context.SaveChanges();
            }
        }

        // Método para obter uma categoria personalizada pelo ID
        public CategoriaPersonalizada ObterPorId(int id)
        {
            return _context.CategoriasPersonalizadas.Find(id);
        }

        // Método para obter todas as categorias personalizadas
        public List<CategoriaPersonalizada> ObterTodas()
        {
            return _context.CategoriasPersonalizadas.ToList();
        }
    }
}
