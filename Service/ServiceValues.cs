using PoupaPig.Dominio.Entidades;
using PoupaPig.Infra;

namespace PoupaPig.Dominio.Service
{
    public class ServiceValues
    {
        private readonly InfraValues _infraValues;

        public ServiceValues(InfraValues infraValues)
        {
            _infraValues = infraValues;
        }

        // Adiciona um novo valor
        public async Task<bool> AdicionarAsync(Values value)
        {
            return await _infraValues.AdicionarAsync(value);
        }

        // Obtém um valor pelo ID
        public async Task<Values> ObterPorIdAsync(int id)
        {
            return await _infraValues.ObterPorIdAsync(id);
        }

        // Obtém todos os valores
        public async Task<IEnumerable<Values>> ObterTodosAsync()
        {
            return await _infraValues.ObterTodosAsync();
        }

        // Atualiza um valor existente
        public async Task<bool> AtualizarAsync(Values value)
        {
            return await _infraValues.AtualizarAsync(value);
        }

        // Remove um valor pelo ID
        public async Task<bool> RemoverAsync(int id)
        {
            return await _infraValues.RemoverAsync(id);
        }

        // Método para calcular o saldo de um usuário
        public async Task<decimal> CalcularSaldoAsync(int userId)
        {
            return await _infraValues.CalcularSaldoAsync(userId);
        }
    }
}
