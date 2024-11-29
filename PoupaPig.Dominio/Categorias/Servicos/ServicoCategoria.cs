using FluentValidation;

namespace PoupaPig.Dominio.Categorias.Servicos
{
    public class ServicoCategoria
    {
        private readonly IRepositorioCategoria _repositorioCategoria;
        private readonly IValidator<Categoria> _validadorCategoria;

        // Injeção de dependência do repositório e do validador
        public ServicoCategoria(
            IRepositorioCategoria repositorioCategoria,
            IValidator<Categoria> validadorCategoria)
        {
            _repositorioCategoria = repositorioCategoria;
            _validadorCategoria = validadorCategoria;
        }

        // Método para criar uma nova categoria personalizada
        public void Criar(Categoria dados)
        {
            // Validação antes de criar
            var resultadoValidacao = _validadorCategoria.Validate(dados);
            if (!resultadoValidacao.IsValid)
            {
                throw new Exception(string.Join(", ", resultadoValidacao.Errors.Select(e => e.ErrorMessage)));
            }

            _repositorioCategoria.Criar(dados);
        }

        // Método para atualizar uma categoria personalizada existente
        public void Atualizar(Categoria dados)
        {
            // Validação antes de atualizar
            var resultadoValidacao = _validadorCategoria.Validate(dados);
            if (!resultadoValidacao.IsValid)
            {
                throw new Exception(string.Join(", ", resultadoValidacao.Errors.Select(e => e.ErrorMessage)));
            }

            _repositorioCategoria.Atualizar(dados);
        }

        // Método para excluir uma categoria personalizada pelo ID
        public void Excluir(int id)
        {
            _repositorioCategoria.Excluir(id);
        }

        // Método para obter uma categoria personalizada pelo ID
        public Categoria ObterPorId(int id)
        {
            return _repositorioCategoria.ObterPorId(id);
        }

        // Método para obter todas as categorias personalizadas
        public List<Categoria> ObterTodas(int usuarioId)
        {
            return _repositorioCategoria.ObterTodas(usuarioId);
        }
        public void PreencherCategoriasNovosUsuarios(int usuarioId)
        {
            Criar(new Categoria
            {
                nome = "Alimentação",
                valor_min = 100,
                valor_max = 1000,
                icone= "IcecreamIcon",
                usuario_id = usuarioId
            });
            Criar(new Categoria
            {
                nome = "Viagem",
                valor_min = 50,
                valor_max = 500,
                icone = "AirplanemodeActiveIcon",
                usuario_id = usuarioId
            });
            Criar(new Categoria
            {
                nome = "Educação",
                valor_min = 200,
                valor_max = 2000,
                icone = "CastleIcon",
                usuario_id = usuarioId
            });
        }
    }
}
