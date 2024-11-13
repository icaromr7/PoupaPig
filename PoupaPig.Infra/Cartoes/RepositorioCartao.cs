using PoupaPig.Dominio.Cartoes;
using PoupaPig.Dominio.Cartoes.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Cartoes
{
    public class RepositorioCartao : IRepositorioCartao
    {
        private readonly AppDbContext _context;

        // Injetando o DbContext através do construtor
        public RepositorioCartao(AppDbContext context)
        {
            _context = context;
        }

        // Método para criar um novo cartão
        public void Criar(Cartao dados)
        {
            _context.Cartoes.Add(dados);
            _context.SaveChanges();
        }

        // Método para atualizar um cartão existente
        public void Atualizar(Cartao dados)
        {
            var cartaoExistente = _context.Cartoes.Find(dados.Id);
            if (cartaoExistente != null)
            {
                _context.Entry(cartaoExistente).CurrentValues.SetValues(dados);
                _context.SaveChanges();
            }
        }

        // Método para excluir um cartão pelo ID
        public void Excluir(int id)
        {
            var cartao = _context.Cartoes.Find(id);
            if (cartao != null)
            {
                _context.Cartoes.Remove(cartao);
                _context.SaveChanges();
            }
        }

        // Método para obter um cartão pelo ID
        public Cartao ObterPorId(int id)
        {
            return _context.Cartoes.Find(id);
        }

        // Método para obter todos os cartões
        public List<Cartao> ObterTodas()
        {
            return _context.Cartoes.ToList();
        }
    }
}
