using PoupaPig.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PoupaPig.Infra
{
    public class InfraImage
    {
        private readonly DbContext _context;

        public InfraImage(DbContext context)
        {
            _context = context;
        }

        // Adiciona uma nova imagem
        public async Task<bool> AdicionarAsync(Image image)
        {
            _context.Set<Image>().Add(image);
            return await _context.SaveChangesAsync() > 0;
        }

        // Obtém uma imagem pelo ID
        public async Task<Image> ObterPorIdAsync(int id)
        {
            return await _context.Set<Image>().FindAsync(id);
        }

        // Obtém todas as imagens
        public async Task<IEnumerable<Image>> ObterTodosAsync()
        {
            return await _context.Set<Image>().ToListAsync();
        }

        // Atualiza uma imagem existente
        public async Task<bool> AtualizarAsync(Image image)
        {
            _context.Set<Image>().Update(image);
            return await _context.SaveChangesAsync() > 0;
        }

        // Remove uma imagem pelo ID
        public async Task<bool> RemoverAsync(int id)
        {
            var image = await ObterPorIdAsync(id);
            if (image == null)
                return false;

            _context.Set<Image>().Remove(image);
            return await _context.SaveChangesAsync() > 0;
        }
    }


}
