using FluentValidation;

namespace PoupaPig.Dominio.Usuarios.Servicos
{
    public class ServicoUsuario
    {
        private readonly IRepositorioUsuario _repositorioUsuario;
        private readonly IValidator<Usuario> _validadorUsuario; // Validador de Usuario

        public ServicoUsuario(IRepositorioUsuario repositorioUsuario, IValidator<Usuario> validadorUsuario)
        {
            _repositorioUsuario = repositorioUsuario;
            _validadorUsuario = validadorUsuario;
        }

        // Método para criar um novo usuário com validação
        public void Criar(Usuario dados)
        {
            // Validando os dados com o Validador
            var resultadoValidacao = _validadorUsuario.Validate(dados);
            if (!resultadoValidacao.IsValid)
            {
                // Se a validação falhar, lançamos uma exceção com os erros
                throw new ValidationException(resultadoValidacao.Errors);
            }

            // Chama o repositório para criar o usuário
            _repositorioUsuario.Criar(dados);
        }

        // Método para atualizar um usuário com validação
        public void Atualizar(Usuario dados)
        {
            // Validando os dados com o Validador
            var resultadoValidacao = _validadorUsuario.Validate(dados);
            if (!resultadoValidacao.IsValid)
            {
                // Se a validação falhar, lançamos uma exceção com os erros
                throw new ValidationException(resultadoValidacao.Errors);
            }

            // Chama o repositório para atualizar o usuário
            _repositorioUsuario.Atualizar(dados);
        }

        // Método para excluir um usuário
        public void Excluir(int id)
        {
            _repositorioUsuario.Excluir(id);
        }

        // Método para obter um usuário por ID
        public Usuario ObterPorId(int id)
        {
            return _repositorioUsuario.ObterPorId(id);
        }

        // Método para obter todos os usuários
        public List<Usuario> ObterTodas()
        {
            return _repositorioUsuario.ObterTodas();
        }
        public string ObterNomeUsuario (int id)
        {
            var usuario = _repositorioUsuario.ObterPorId (id);
            return usuario.nome_completo;
        }
    }
}
