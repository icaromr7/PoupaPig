using PoupaPig.Dominio.Assinaturas;
using PoupaPig.Dominio.Assinaturas.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Assinaturas
{
    public class RepositorioAssinatura : IRepositorioAssinatura
    {
        private readonly AppDbContext _context;

        // Injetando o DbContext através do construtor
        public RepositorioAssinatura(AppDbContext context)
        {
            _context = context;
        }

        // Método para criar uma nova assinatura
        public void Criar(Assinatura dados)
        {
            _context.Assinaturas.Add(dados);
            _context.SaveChanges();
        }

        // Método para atualizar uma assinatura existente
        public void Atualizar(Assinatura dados)
        {
            var assinaturaExistente = _context.Assinaturas.Find(dados.Id);
            if (assinaturaExistente != null)
            {
                _context.Entry(assinaturaExistente).CurrentValues.SetValues(dados);
                _context.SaveChanges();
            }
        }

        // Método para excluir uma assinatura pelo ID
        public void Excluir(int id)
        {
            var assinatura = _context.Assinaturas.Find(id);
            if (assinatura != null)
            {
                _context.Assinaturas.Remove(assinatura);
                _context.SaveChanges();
            }
        }

        // Método para obter uma assinatura pelo ID
        public Assinatura ObterPorId(int id)
        {
            return _context.Assinaturas.Find(id);
        }

        // Método para obter todas as assinaturas
        public List<Assinatura> ObterTodas()
        {
            return _context.Assinaturas.ToList();
        }
    }
}
