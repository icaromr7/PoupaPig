using PoupaPig.Dominio.Entidades;
using PoupaPig.Infra;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
            // Aplicar regras de negócio antes de adicionar
            return await _infraValues.AdicionarAsync(value);
        }

        // Obtém um valor pelo ID
        public async Task<Values> ObterPorIdAsync(int id)
        {
            // Aplicar validações ou lógica adicional, se necessário
            return await _infraValues.ObterPorIdAsync(id);
        }

        // Obtém todos os valores
        public async Task<IEnumerable<Values>> ObterTodosAsync()
        {
            // Aplicar regras de filtragem ou paginação, se necessário
            return await _infraValues.ObterTodosAsync();
        }

        // Atualiza um valor existente
        public async Task<bool> AtualizarAsync(Values value)
        {
            // Aplicar regras de validação antes de atualizar
            return await _infraValues.AtualizarAsync(value);
        }

        // Remove um valor pelo ID
        public async Task<bool> RemoverAsync(int id)
        {
            // Verificar regras de negócio antes de remover
            return await _infraValues.RemoverAsync(id);
        }
    }

}
