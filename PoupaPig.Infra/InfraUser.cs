using PoupaPig.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PoupaPig.Infra
{
    public class InfraUser
    {
        private readonly DbContext _context;

        public InfraUser(DbContext context)
        {
            _context = context;
        }

        public async Task<bool> AdicionarAsync(User user)
        {
            _context.Set<User>().Add(user);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<User> ObterPorIdAsync(int id)
        {
            return await _context.Set<User>().FindAsync(id);
        }

        public async Task<IEnumerable<User>> ObterTodosAsync()
        {
            return await _context.Set<User>().ToListAsync();
        }

        public async Task<bool> AtualizarAsync(User user)
        {
            _context.Set<User>().Update(user);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> RemoverAsync(int id)
        {
            var user = await ObterPorIdAsync(id);
            if (user == null)
                return false;

            _context.Set<User>().Remove(user);
            return await _context.SaveChangesAsync() > 0;
        }
    }

}
