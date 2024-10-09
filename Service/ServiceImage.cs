using PoupaPig.Dominio.Entidades;
using PoupaPig.Infra;

namespace PoupaPig.Dominio.Service
{
    public class ServiceImage
    {
        private readonly InfraImage _infraImage;

        public ServiceImage(InfraImage infraImage)
        {
            _infraImage = infraImage;
        }

        // Adiciona uma nova imagem
        public async Task<bool> AdicionarAsync(Image image)
        {
            // Aplicar regras de negócio antes de adicionar
            return await _infraImage.AdicionarAsync(image);
        }

        // Obtém uma imagem pelo ID
        public async Task<Image> ObterPorIdAsync(int id)
        {
            // Aplicar validações ou lógica adicional, se necessário
            return await _infraImage.ObterPorIdAsync(id);
        }

        // Obtém todas as imagens
        public async Task<IEnumerable<Image>> ObterTodosAsync()
        {
            // Aplicar regras de filtragem ou paginação, se necessário
            return await _infraImage.ObterTodosAsync();
        }

        // Atualiza uma imagem existente
        public async Task<bool> AtualizarAsync(Image image)
        {
            // Aplicar regras de validação antes de atualizar
            return await _infraImage.AtualizarAsync(image);
        }

        // Remove uma imagem pelo ID
        public async Task<bool> RemoverAsync(int id)
        {
            // Verificar regras de negócio antes de remover
            return await _infraImage.RemoverAsync(id);
        }
    }

}
