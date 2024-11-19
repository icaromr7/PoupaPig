using PoupaPig.Dominio.Metas;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Dominio.Metas.Servicos
{
    public class ServicoMetaInvestimentoDetalhes
    {
        private readonly IRepositorioMetaInvestimento _repositorioMetaInvestimento;
        private readonly IRepositorioTransacao _repositorioTransacao;

        // Injeção de dependência dos repositórios de MetaInvestimento e Transacao
        public ServicoMetaInvestimentoDetalhes(IRepositorioMetaInvestimento repositorioMetaInvestimento, IRepositorioTransacao repositorioTransacao)
        {
            _repositorioMetaInvestimento = repositorioMetaInvestimento;
            _repositorioTransacao = repositorioTransacao;
        }

        // Método para obter os detalhes do objetivo
        public MetaInvestimentoDetalhes ObterDetalhesObjetivo(int idMetaInvestimento)
        {
            // Buscar meta de investimento pelo ID
            var metaInvestimento = _repositorioMetaInvestimento.ObterPorId(idMetaInvestimento);
            if (metaInvestimento == null)
                throw new ArgumentException("Meta de investimento não encontrada.");

            // Obter as transações relacionadas à meta
            var transacoes = _repositorioTransacao.ObterTransacoesPorMetaInvestimento(idMetaInvestimento);

            // Calcular o valor total investido
            decimal valorTotalInvestido = transacoes.Sum(t => t.valor);

            // Calcular o valor total considerando os rendimentos (caso seja um investimento com rendimento)
            decimal valorTotalComRendimento = metaInvestimento.porcentagem_rendimento > 0
                ? valorTotalInvestido + (valorTotalInvestido * metaInvestimento.porcentagem_rendimento / 100)
                : valorTotalInvestido;

            // Calcular o percentual da meta atingida
            decimal percentualMetaAtingida = (valorTotalInvestido / metaInvestimento.valor_desejado) * 100;

            // Gerar extrato das transações
            var extrato = transacoes.Select(t => new TransacaoDetalhes
            {
                Valor = t.valor,
                DataTransacao = t.data_transacao,
                PercentualAtingido = (valorTotalInvestido / metaInvestimento.valor_desejado) * 100
            }).ToList();

            return new MetaInvestimentoDetalhes
            {
                Nome = metaInvestimento.nome,
                ValorDesejado = metaInvestimento.valor_desejado,
                ValorInvestido = valorTotalInvestido,
                ValorTotalComRendimento = valorTotalComRendimento,
                PercentualMetaAtingida = percentualMetaAtingida,
                Extrato = extrato
            };
        }
    }

    // DTO para retornar detalhes da meta de investimento
    public class MetaInvestimentoDetalhes
    {
        public string Nome { get; set; }
        public decimal ValorDesejado { get; set; }
        public decimal ValorInvestido { get; set; }
        public decimal ValorTotalComRendimento { get; set; }
        public decimal PercentualMetaAtingida { get; set; }
        public List<TransacaoDetalhes> Extrato { get; set; }
    }

    // DTO para detalhamento das transações
    public class TransacaoDetalhes
    {
        public decimal Valor { get; set; }
        public DateTime DataTransacao { get; set; }
        public decimal PercentualAtingido { get; set; }
    }
}
