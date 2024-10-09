using PoupaPig.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PoupaPig.Infra
{
    public class InfraValues
    {
        private readonly DbContext _context;

        public InfraValues(DbContext context)
        {
            _context = context;
        }

        // Adiciona um novo valor
        public async Task<bool> AdicionarAsync(Values value)
        {
            _context.Set<Values>().Add(value);
            return await _context.SaveChangesAsync() > 0;
        }

        // Obtém um valor pelo ID
        public async Task<Values> ObterPorIdAsync(int id)
        {
            return await _context.Set<Values>().FindAsync(id);
        }

        // Obtém todos os valores
        public async Task<IEnumerable<Values>> ObterTodosAsync()
        {
            return await _context.Set<Values>().ToListAsync();
        }

        // Atualiza um valor existente
        public async Task<bool> AtualizarAsync(Values value)
        {
            _context.Set<Values>().Update(value);
            return await _context.SaveChangesAsync() > 0;
        }

        // Remove um valor pelo ID
        public async Task<bool> RemoverAsync(int id)
        {
            var value = await ObterPorIdAsync(id);
            if (value == null)
                return false;

            _context.Set<Values>().Remove(value);
            return await _context.SaveChangesAsync() > 0;
        }
    }

}
