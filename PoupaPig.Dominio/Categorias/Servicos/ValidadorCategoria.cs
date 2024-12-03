using FluentValidation;

namespace PoupaPig.Dominio.Categorias.Servicos
{
    public class ValidadorCategoria : AbstractValidator<Categoria>
    {
        private readonly IRepositorioCategoria _repositorioCategoria;

        public ValidadorCategoria(IRepositorioCategoria repositorioCategoria)
        {
            _repositorioCategoria = repositorioCategoria;

            // Validação do nome da categoria personalizada
            RuleFor(categoria => categoria.nome)
                .NotEmpty().WithMessage("O nome da categoria personalizada é obrigatório.")
                .Length(2, 100).WithMessage("O nome da categoria personalizada deve ter entre 2 e 100 caracteres.")
                .Must((categoria, nome) => NomeNaoExistente(categoria, nome))
                .WithMessage("O nome da categoria personalizada já está em uso. Escolha outro nome.");
        }

        // Método para verificar se o nome da categoria já existe
        private bool NomeNaoExistente(Categoria categoria, string nome)
        {
            // Obtém uma categoria com o mesmo nome e verifica se não pertence à mesma entidade
            var categoriaExistente = _repositorioCategoria.ObterPorNome(nome, categoria.usuario_id);

            // Retorna true apenas se não houver categoria ou se a categoria encontrada for do mesmo ID
            return categoriaExistente == null || categoriaExistente.id == categoria.id;
        }
    }
}
