using PoupaPig.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PoupaPig.Infra
{
    public class InfraCategory
    {
        private readonly DbContext _context;

        public InfraCategory(DbContext context)
        {
            _context = context;
        }

        // Adiciona uma nova categoria
        public async Task<bool> AdicionarAsync(Category category)
        {
            _context.Set<Category>().Add(category);
            return await _context.SaveChangesAsync() > 0;
        }

        // Obtém uma categoria pelo ID
        public async Task<Category> ObterPorIdAsync(int id)
        {
            return await _context.Set<Category>().FindAsync(id);
        }

        // Obtém todas as categorias
        public async Task<IEnumerable<Category>> ObterTodosAsync()
        {
            return await _context.Set<Category>().ToListAsync();
        }

        // Atualiza uma categoria existente
        public async Task<bool> AtualizarAsync(Category category)
        {
            _context.Set<Category>().Update(category);
            return await _context.SaveChangesAsync() > 0;
        }

        // Remove uma categoria pelo ID
        public async Task<bool> RemoverAsync(int id)
        {
            var category = await ObterPorIdAsync(id);
            if (category == null)
                return false;

            _context.Set<Category>().Remove(category);
            return await _context.SaveChangesAsync() > 0;
        }
    }

}
