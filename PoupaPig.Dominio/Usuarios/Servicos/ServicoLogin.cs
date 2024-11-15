using PoupaPig.Dominio.Usuarios;
using System;

namespace PoupaPig.Dominio.Usuarios.Servicos
{
    public class ServicoLogin
    {
        private readonly IRepositorioUsuario _repositorioUsuario;

        // Injeção de dependência para o repositório de Usuários
        public ServicoLogin(IRepositorioUsuario repositorioUsuario)
        {
            _repositorioUsuario = repositorioUsuario;
        }

        // Método para realizar o login
        public Usuario RealizarLogin(Login login)
        {
            // Validação do email
            var usuario = _repositorioUsuario.ObterPorEmail(login.email);

            if (usuario == null)
            {
                // Se o usuário não for encontrado com o email
                throw new Exception("Email ou senha inválidos.");
            }

            // Verifica se a senha fornecida é igual à senha armazenada (Assumindo que a senha é armazenada em texto simples)
            if (usuario.senha != login.senha)
            {
                // Senha incorreta
                throw new Exception("Email ou senha inválidos.");
            }

            // Se email e senha estiverem corretos, retorna o usuário
            return usuario;
        }
    }
}
