using PoupaPig.Dominio.Entidades;
using PoupaPig.Infra;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PoupaPig.Dominio.Service
{
    public class ServiceHistoryValues
    {
        private readonly InfraHistoryValues _infraHistoryValues;

        public ServiceHistoryValues(InfraHistoryValues infraHistoryValues)
        {
            _infraHistoryValues = infraHistoryValues;
        }

        // Adiciona um novo histórico de valores
        public async Task<bool> AdicionarAsync(HistoryValues historyValues)
        {
            // Aplicar regras de negócio antes de adicionar
            return await _infraHistoryValues.AdicionarAsync(historyValues);
        }

        // Obtém um histórico de valores pelo ID
        public async Task<HistoryValues> ObterPorIdAsync(int id)
        {
            // Aplicar validações ou lógica adicional, se necessário
            return await _infraHistoryValues.ObterPorIdAsync(id);
        }

        // Obtém todos os históricos de valores
        public async Task<IEnumerable<HistoryValues>> ObterTodosAsync()
        {
            // Aplicar regras de filtragem ou paginação, se necessário
            return await _infraHistoryValues.ObterTodosAsync();
        }

        // Atualiza um histórico de valores existente
        public async Task<bool> AtualizarAsync(HistoryValues historyValues)
        {
            // Aplicar regras de validação antes de atualizar
            return await _infraHistoryValues.AtualizarAsync(historyValues);
        }

        // Remove um histórico de valores pelo ID
        public async Task<bool> RemoverAsync(int id)
        {
            // Verificar regras de negócio antes de remover
            return await _infraHistoryValues.RemoverAsync(id);
        }
    }


}
