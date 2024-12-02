using FluentValidation;
using PoupaPig.Dominio.Usuarios;
using PoupaPig.Dominio.Usuarios.Servicos; // Supondo que a classe Usuario está neste namespace
using System.Text.RegularExpressions;

public class ValidadorUsuario : AbstractValidator<Usuario>
{
    public ValidadorUsuario(IRepositorioUsuario repositorioUsuario)
    {
        // 1. Validação do Nome Completo
        RuleFor(usuario => usuario.nome_completo)
            .NotEmpty().WithMessage("O nome completo é obrigatório.")
            .Length(2, 250).WithMessage("O nome completo deve ter entre 5 e 250 caracteres.")
            .Must(NomeEhValido).WithMessage("O nome completo deve conter apenas letras e espaços.");


        // 3. Validação do E-mail
        RuleFor(usuario => usuario)
            .Must(usuario => !repositorioUsuario.EmailDuplicado(usuario.email, usuario.id))
            .WithMessage("O e-mail já está cadastrado no sistema.")
            .When(usuario => !string.IsNullOrEmpty(usuario.email));

        // 4. Validação da Senha
        RuleFor(usuario => usuario.senha)
            .NotEmpty().WithMessage("A senha é obrigatória.")
            .MinimumLength(8).WithMessage("A senha deve ter no mínimo 8 caracteres.")
            .Must(SenhaEhValida).WithMessage("A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais.");
    }

    // Método para validar se o nome contém apenas letras e espaços
    private bool NomeEhValido(string nome)
    {
        return Regex.IsMatch(nome, @"^[A-Za-zÀ-ú\s]+$");
    }


    // Método para validar a complexidade da senha
    private bool SenhaEhValida(string senha)
    {
        // Senha deve ter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial
        return Regex.IsMatch(senha, @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");
    }
}
