using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PoupaPig.Dominio.Categorias.Servicos
{
    public class ValidadorCategoriaPersonalizada : AbstractValidator<CategoriaPersonalizada>
    {
        private readonly IRepositorioNomeCategoriaPadrao _repositorioNomeCategoriaPadrao;
        private readonly IRepositorioCategoriaPersonalizada _repositorioCategoriaPersonalizada;

        public ValidadorCategoriaPersonalizada(IRepositorioNomeCategoriaPadrao repositorioNomeCategoriaPadrao, IRepositorioCategoriaPersonalizada repositorioCategoriaPersonalizada)
        {
            _repositorioNomeCategoriaPadrao = repositorioNomeCategoriaPadrao;
            _repositorioCategoriaPersonalizada = repositorioCategoriaPersonalizada;

            // Validação do nome da categoria personalizada
            RuleFor(categoria => categoria.nome)
                .NotEmpty().WithMessage("O nome da categoria personalizada é obrigatório.")
                .Length(2, 100).WithMessage("O nome da categoria personalizada deve ter entre 5 e 100 caracteres.")
                .Must(NomeNaoExistente).WithMessage("O nome da categoria personalizada já está em uso. Escolha outro nome.");
        }

        // Método para verificar se o nome da categoria já existe em qualquer categoria (padrão ou personalizada)
        private bool NomeNaoExistente(string nome)
        {
            var categoriaPadraoExistente = _repositorioNomeCategoriaPadrao.ObterPorNome(nome);
            var categoriaPersonalizadaExistente = _repositorioCategoriaPersonalizada.ObterPorNome(nome);

            return categoriaPadraoExistente == null && categoriaPersonalizadaExistente == null;
        }
    }
}
