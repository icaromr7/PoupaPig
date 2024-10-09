using PoupaPig.Dominio.Entidades;
using PoupaPig.Infra;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PoupaPig.Dominio.Service
{
    public class ServiceCategory
    {
        private readonly InfraCategory _infraCategory;

        public ServiceCategory(InfraCategory infraCategory)
        {
            _infraCategory = infraCategory;
        }

        // Adiciona uma nova categoria
        public async Task<bool> AdicionarAsync(Category category)
        {
            // Aplicar regras de negócio, validações, etc., antes de adicionar
            return await _infraCategory.AdicionarAsync(category);
        }

        // Obtém uma categoria pelo ID
        public async Task<Category> ObterPorIdAsync(int id)
        {
            // Aplicar lógica adicional, se necessário
            return await _infraCategory.ObterPorIdAsync(id);
        }

        // Obtém todas as categorias
        public async Task<IEnumerable<Category>> ObterTodosAsync()
        {
            // Aplicar regras de filtragem, paginação, etc., se necessário
            return await _infraCategory.ObterTodosAsync();
        }

        // Atualiza uma categoria existente
        public async Task<bool> AtualizarAsync(Category category)
        {
            // Aplicar regras de validação antes de atualizar
            return await _infraCategory.AtualizarAsync(category);
        }

        // Remove uma categoria pelo ID
        public async Task<bool> RemoverAsync(int id)
        {
            // Verificar regras de negócio antes de remover
            return await _infraCategory.RemoverAsync(id);
        }
    }

}
