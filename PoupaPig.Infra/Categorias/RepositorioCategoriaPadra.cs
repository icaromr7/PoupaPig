using PoupaPig.Dominio.Categorias;
using PoupaPig.Dominio.Categorias.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Categorias
{
    public class RepositorioCategoriaPadrao : IRepositorioCategoriaPadrao
    {
        private readonly AppDbContext _context;

        // Injetando o DbContext através do construtor
        public RepositorioCategoriaPadrao(AppDbContext context)
        {
            _context = context;
        }

        // Método para criar uma nova categoria padrão
        public void Criar(CategoriaPadrao dados)
        {
            _context.CategoriasPadrao.Add(dados);
            _context.SaveChanges();
        }

        // Método para atualizar uma categoria padrão existente
        public void Atualizar(CategoriaPadrao dados)
        {
            var categoriaExistente = _context.CategoriasPadrao.Find(dados.Id);
            if (categoriaExistente != null)
            {
                _context.Entry(categoriaExistente).CurrentValues.SetValues(dados);
                _context.SaveChanges();
            }
        }

        // Método para excluir uma categoria padrão pelo ID
        public void Excluir(int id)
        {
            var categoria = _context.CategoriasPadrao.Find(id);
            if (categoria != null)
            {
                _context.CategoriasPadrao.Remove(categoria);
                _context.SaveChanges();
            }
        }

        // Método para obter uma categoria padrão pelo ID
        public CategoriaPadrao ObterPorId(int id)
        {
            return _context.CategoriasPadrao.Find(id);
        }

        // Método para obter todas as categorias padrão
        public List<CategoriaPadrao> ObterTodas()
        {
            return _context.CategoriasPadrao.ToList();
        }
    }
}
