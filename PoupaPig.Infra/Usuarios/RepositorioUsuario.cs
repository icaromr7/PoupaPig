using PoupaPig.Dominio.Usuarios;
using PoupaPig.Dominio.Usuarios.Servicos;
using System;

namespace PoupaPig.Infra.Usuarios
{
    public class RepositorioUsuario : IRepositorioUsuario
    {
        private readonly AppDbContext _context;

        // Injetando o DbContext através do construtor
        public RepositorioUsuario(AppDbContext context)
        {
            _context = context;
        }

        // Método para criar um novo usuário
        public void Criar(Usuario dados)
        {
            _context.Usuarios.Add(dados);
            _context.SaveChanges();
        }

        // Método para atualizar os dados de um usuário existente
        public void Atualizar(Usuario dados)
        {
            var usuarioExistente = _context.Usuarios.Find(dados.Id);
            if (usuarioExistente != null)
            {
                _context.Entry(usuarioExistente).CurrentValues.SetValues(dados);
                _context.SaveChanges();
            }
        }

        // Método para excluir um usuário pelo ID
        public void Excluir(int id)
        {
            var usuario = _context.Usuarios.Find(id);
            if (usuario != null)
            {
                _context.Usuarios.Remove(usuario);
                _context.SaveChanges();
            }
        }

        // Método para obter um usuário pelo ID
        public Usuario ObterPorId(int id)
        {
            return _context.Usuarios.Find(id);
        }

        // Método para obter todos os usuários
        public List<Usuario> ObterTodas()
        {
            return _context.Usuarios.ToList();
        }
    }
