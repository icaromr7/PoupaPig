using FluentValidation;

namespace PoupaPig.Dominio.Categorias.Servicos
{
    public class ServicoCategoriaPersonalizada
    {
        private readonly IRepositorioCategoriaPersonalizada _repositorioCategoriaPersonalizada;
        private readonly IValidator<CategoriaPersonalizada> _validadorCategoriaPersonalizada;

        // Injeção de dependência do repositório e do validador
        public ServicoCategoriaPersonalizada(
            IRepositorioCategoriaPersonalizada repositorioCategoriaPersonalizada,
            IValidator<CategoriaPersonalizada> validadorCategoriaPersonalizada)
        {
            _repositorioCategoriaPersonalizada = repositorioCategoriaPersonalizada;
            _validadorCategoriaPersonalizada = validadorCategoriaPersonalizada;
        }

        // Método para criar uma nova categoria personalizada
        public void Criar(CategoriaPersonalizada dados)
        {
            // Validação antes de criar
            var resultadoValidacao = _validadorCategoriaPersonalizada.Validate(dados);
            if (!resultadoValidacao.IsValid)
            {
                throw new Exception(string.Join(", ", resultadoValidacao.Errors.Select(e => e.ErrorMessage)));
            }

            _repositorioCategoriaPersonalizada.Criar(dados);
        }

        // Método para atualizar uma categoria personalizada existente
        public void Atualizar(CategoriaPersonalizada dados)
        {
            // Validação antes de atualizar
            var resultadoValidacao = _validadorCategoriaPersonalizada.Validate(dados);
            if (!resultadoValidacao.IsValid)
            {
                throw new Exception(string.Join(", ", resultadoValidacao.Errors.Select(e => e.ErrorMessage)));
            }

            _repositorioCategoriaPersonalizada.Atualizar(dados);
        }

        // Método para excluir uma categoria personalizada pelo ID
        public void Excluir(int id)
        {
            _repositorioCategoriaPersonalizada.Excluir(id);
        }

        // Método para obter uma categoria personalizada pelo ID
        public CategoriaPersonalizada ObterPorId(int id)
        {
            return _repositorioCategoriaPersonalizada.ObterPorId(id);
        }

        // Método para obter todas as categorias personalizadas
        public List<CategoriaPersonalizada> ObterTodas(int usuarioId)
        {
            return _repositorioCategoriaPersonalizada.ObterTodas(usuarioId);
        }
    }
}
