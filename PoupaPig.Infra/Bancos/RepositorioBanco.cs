using PoupaPig.Dominio.Bancos;
using PoupaPig.Dominio.Bancos.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Bancos
{
    public class RepositorioBanco : IRepositorioBanco
    {
        private readonly AppDbContext _context;

        // Injetando o DbContext através do construtor
        public RepositorioBanco(AppDbContext context)
        {
            _context = context;
        }

        // Método para criar um novo banco
        public void Criar(Banco dados)
        {
            _context.Bancos.Add(dados);
            _context.SaveChanges();
        }

        // Método para atualizar um banco existente
        public void Atualizar(Banco dados)
        {
            var bancoExistente = _context.Bancos.Find(dados.Id);
            if (bancoExistente != null)
            {
                _context.Entry(bancoExistente).CurrentValues.SetValues(dados);
                _context.SaveChanges();
            }
        }

        // Método para excluir um banco pelo ID
        public void Excluir(int id)
        {
            var banco = _context.Bancos.Find(id);
            if (banco != null)
            {
                _context.Bancos.Remove(banco);
                _context.SaveChanges();
            }
        }

        // Método para obter um banco pelo ID
        public Banco ObterPorId(int id)
        {
            return _context.Bancos.Find(id);
        }

        // Método para obter todos os bancos
        public List<Banco> ObterTodas()
        {
            return _context.Bancos.ToList();
        }
    }
}
