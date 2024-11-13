using PoupaPig.Dominio.Metas;
using PoupaPig.Dominio.Metas.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Metas
{
    public class RepositorioMetaInvestimento : IRepositorioMetaInvestimento
    {
        private readonly AppDbContext _context;

        // Injetando o DbContext através do construtor
        public RepositorioMetaInvestimento(AppDbContext context)
        {
            _context = context;
        }

        // Método para criar uma nova meta de investimento
        public void Criar(MetaInvestimento dados)
        {
            _context.MetasInvestimento.Add(dados);
            _context.SaveChanges();
        }

        // Método para atualizar uma meta de investimento existente
        public void Atualizar(MetaInvestimento dados)
        {
            var metaExistente = _context.MetasInvestimento.Find(dados.Id);
            if (metaExistente != null)
            {
                _context.Entry(metaExistente).CurrentValues.SetValues(dados);
                _context.SaveChanges();
            }
        }

        // Método para excluir uma meta de investimento pelo ID
        public void Excluir(int id)
        {
            var meta = _context.MetasInvestimento.Find(id);
            if (meta != null)
            {
                _context.MetasInvestimento.Remove(meta);
                _context.SaveChanges();
            }
        }

        // Método para obter uma meta de investimento pelo ID
        public MetaInvestimento ObterPorId(int id)
        {
            return _context.MetasInvestimento.Find(id);
        }

        // Método para obter todas as metas de investimento
        public List<MetaInvestimento> ObterTodas()
        {
            return _context.MetasInvestimento.ToList();
        }
    }
}
