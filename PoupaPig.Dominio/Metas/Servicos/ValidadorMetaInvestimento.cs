using FluentValidation;

namespace PoupaPig.Dominio.Metas.Servicos
{
    public class ValidadorMetaInvestimento : AbstractValidator<MetaInvestimento>
    {
        public ValidadorMetaInvestimento()
        {
            // Validação do nome do objetivo
            RuleFor(meta => meta.nome)
                .NotEmpty().WithMessage("O nome do objetivo é obrigatório.")
                .Length(5, 100).WithMessage("O nome do objetivo deve ter entre 5 e 100 caracteres.");

            // Validação do valor final do objetivo
            RuleFor(meta => meta.valor_desejado)
                .GreaterThan(0).WithMessage("O valor desejado do objetivo deve ser positivo.");

            // Validação da data permitida de retirada
            RuleFor(meta => meta.data_resgate)
                .GreaterThan(DateTime.Now).WithMessage("A data permitida de retirada deve ser uma data futura válida.");
        }

    }
}
