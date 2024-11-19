using PoupaPig.Dominio.Metas;
using PoupaPig.Dominio.Metas.Servicos;
using FluentValidation;
using System;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Metas.Servicos
{
    public class ServicoMetaInvestimento
    {
        private readonly IRepositorioMetaInvestimento _repositorioMeta;
        private readonly IValidator<MetaInvestimento> _validadorMetaInvestimento;

        // Injeção de dependência do repositório e do validador
        public ServicoMetaInvestimento(
            IRepositorioMetaInvestimento repositorioMeta,
            IValidator<MetaInvestimento> validadorMetaInvestimento)
        {
            _repositorioMeta = repositorioMeta;
            _validadorMetaInvestimento = validadorMetaInvestimento;
        }

        // Método para criar uma nova meta de investimento
        public void Criar(MetaInvestimento dados)
        {
            // Validação antes de criar
            var resultadoValidacao = _validadorMetaInvestimento.Validate(dados);
            if (!resultadoValidacao.IsValid)
            {
                throw new Exception(string.Join(", ", resultadoValidacao.Errors.Select(e => e.ErrorMessage)));
            }

            _repositorioMeta.Criar(dados);
        }

        // Método para atualizar uma meta de investimento existente
        public void Atualizar(MetaInvestimento dados)
        {
            // Validação antes de atualizar
            var resultadoValidacao = _validadorMetaInvestimento.Validate(dados);
            if (!resultadoValidacao.IsValid)
            {
                throw new Exception(string.Join(", ", resultadoValidacao.Errors.Select(e => e.ErrorMessage)));
            }

            _repositorioMeta.Atualizar(dados);
        }

        // Método para excluir uma meta de investimento pelo ID
        public void Excluir(int id)
        {
            _repositorioMeta.Excluir(id);
        }

        // Método para obter uma meta de investimento pelo ID
        public MetaInvestimento ObterPorId(int id)
        {
            return _repositorioMeta.ObterPorId(id);
        }

        // Método para obter todas as metas de investimento
        public List<MetaInvestimento> ObterTodas()
        {
            return _repositorioMeta.ObterTodas();
        }
    }
}
