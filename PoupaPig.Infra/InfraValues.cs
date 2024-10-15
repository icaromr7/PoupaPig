using PoupaPig.Dominio.Entidades;

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

        // Método para calcular o saldo de um usuário
        public async Task<decimal> CalcularSaldoAsync(int userId)
        {
            var valores = await _context.Set<Values>()
                                        .Where(v => v.ID_User == userId)
                                        .ToListAsync();

            // Calcula o saldo baseado no Type_Value (crédito/débito)
            decimal saldo = 0;
            foreach (var value in valores)
            {
                if (value.Type_Value.ToLower() == "crédito")
                {
                    saldo += value.Value_Value;
                }
                else if (value.Type_Value.ToLower() == "débito")
                {
                    saldo -= value.Value_Value;
                }
            }

            return saldo;
        }
    }
}
