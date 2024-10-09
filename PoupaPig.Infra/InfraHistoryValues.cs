using PoupaPig.Dominio.Entidades;

namespace PoupaPig.Infra
{
    public class InfraHistoryValues
    {
        private readonly DbContext _context;

        public InfraHistoryValues(DbContext context)
        {
            _context = context;
        }

        // Adiciona um novo histórico de valores
        public async Task<bool> AdicionarAsync(HistoryValues historyValues)
        {
            _context.Set<HistoryValues>().Add(historyValues);
            return await _context.SaveChangesAsync() > 0;
        }

        // Obtém um histórico de valores pelo ID
        public async Task<HistoryValues> ObterPorIdAsync(int id)
        {
            return await _context.Set<HistoryValues>().FindAsync(id);
        }

        // Obtém todos os históricos de valores
        public async Task<IEnumerable<HistoryValues>> ObterTodosAsync()
        {
            return await _context.Set<HistoryValues>().ToListAsync();
        }

        // Atualiza um histórico de valores existente
        public async Task<bool> AtualizarAsync(HistoryValues historyValues)
        {
            _context.Set<HistoryValues>().Update(historyValues);
            return await _context.SaveChangesAsync() > 0;
        }

        // Remove um histórico de valores pelo ID
        public async Task<bool> RemoverAsync(int id)
        {
            var historyValues = await ObterPorIdAsync(id);
            if (historyValues == null)
                return false;

            _context.Set<HistoryValues>().Remove(historyValues);
            return await _context.SaveChangesAsync() > 0;
        }
    }

}
