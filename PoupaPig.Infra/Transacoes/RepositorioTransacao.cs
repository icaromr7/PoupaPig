using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Transacoes
{
    public class RepositorioTransacao : IRepositorioTransacao
    {
        private readonly AppDbContext _context;

        // Injetando o DbContext através do construtor
        public RepositorioTransacao(AppDbContext context)
        {
            _context = context;
        }

        // Método para criar uma nova transação
        public void Criar(Transacao dados)
        {
            _context.Transacoes.Add(dados);
            _context.SaveChanges();
        }

        // Método para atualizar os dados de uma transação existente
        public void Atualizar(Transacao dados)
        {
            var transacaoExistente = _context.Transacoes.Find(dados.Id);
            if (transacaoExistente != null)
            {
                _context.Entry(transacaoExistente).CurrentValues.SetValues(dados);
                _context.SaveChanges();
            }
        }

        // Método para excluir uma transação pelo ID
        public void Excluir(int id)
        {
            var transacao = _context.Transacoes.Find(id);
            if (transacao != null)
            {
                _context.Transacoes.Remove(transacao);
                _context.SaveChanges();
            }
        }

        // Método para obter uma transação pelo ID
        public Transacao ObterPorId(int id)
        {
            return _context.Transacoes.Find(id);
        }

        // Método para obter todas as transações
        public List<Transacao> ObterTodas()
        {
            return _context.Transacoes.ToList();
        }
    }
}
