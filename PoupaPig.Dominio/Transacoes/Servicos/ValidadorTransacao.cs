using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public class ValidadorTransacao : AbstractValidator<Transacao>
    {
        public ValidadorTransacao()
        {
            // 1. Validação do Nome
            RuleFor(transacao => transacao.nome)
                .NotEmpty().WithMessage("O nome da transação é obrigatório.")
                .Length(2, 100).WithMessage("O nome da transação deve ter entre 5 e 100 caracteres.");

            // 2. Validação do Valor
            RuleFor(transacao => transacao.valor)
                .GreaterThan(0).WithMessage("O valor deve ser maior que zero.")
                .NotEmpty().WithMessage("O valor da transação é obrigatório.");

            // 3. Validação do Tipo de Pagamento (Obrigatório)
            RuleFor(transacao => transacao.tipo_pagamento_id)
                .NotEmpty().WithMessage("O tipo de pagamento é obrigatório.");

            // 4. Validação do Tipo (Obrigatório)
            RuleFor(transacao => transacao.tipo_id)
                .NotEmpty().WithMessage("O tipo da transação é obrigatório.");

            // 5. Validação da Situação (Obrigatório)
            RuleFor(transacao => transacao.situacao_id)
                .NotEmpty().WithMessage("A situação da transação é obrigatória.");

            // 6. Validação do Usuário (Obrigatório)
            RuleFor(transacao => transacao.usuario_id)
                .NotEmpty().WithMessage("O ID do usuário é obrigatório.");

            // 7. Validação de Categoria (Se existir na lógica de negócios, adicione aqui)
            RuleFor(transacao => transacao.categoria_id)
                .NotEmpty().WithMessage("A categoria da transação é obrigatória.");

            // 8. Validação de Observação (Opcional, mas se necessário)
            RuleFor(transacao => transacao.observacao)
                .MaximumLength(500).WithMessage("A observação não pode exceder 500 caracteres.");
        }
    }
}
