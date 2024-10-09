using PoupaPig.Dominio.Entidades;
using PoupaPig.Infra;

namespace PoupaPig.Dominio.Service
{
    public class ServiceUser
    {
        private readonly InfraUser _infraUser;

        public ServiceUser(InfraUser infraUser)
        {
            _infraUser = infraUser;
        }

        // Adiciona um novo usuário
        public async Task<bool> AdicionarAsync(User user)
        {
            // Aplicar regras de negócio antes de adicionar
            return await _infraUser.AdicionarAsync(user);
        }

        // Obtém um usuário pelo ID
        public async Task<User> ObterPorIdAsync(int id)
        {
            // Aplicar validações ou lógica adicional, se necessário
            return await _infraUser.ObterPorIdAsync(id);
        }

        // Obtém todos os usuários
        public async Task<IEnumerable<User>> ObterTodosAsync()
        {
            // Aplicar regras de filtragem, paginação, etc.
            return await _infraUser.ObterTodosAsync();
        }

        // Atualiza um usuário existente
        public async Task<bool> AtualizarAsync(User user)
        {
            // Aplicar regras de validação antes de atualizar
            return await _infraUser.AtualizarAsync(user);
        }

        // Remove um usuário pelo ID
        public async Task<bool> RemoverAsync(int id)
        {
            // Verificar se o usuário existe, aplicar regras de negócio antes de remover
            return await _infraUser.RemoverAsync(id);
        }
    }

}
