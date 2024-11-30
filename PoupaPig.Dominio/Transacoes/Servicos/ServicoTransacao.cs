using FluentValidation;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;

namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public class ServicoTransacao
    {
        private readonly IRepositorioTransacao _repositorioTransacao;
        private readonly IValidator<Transacao> _validadorTransacao;

        public ServicoTransacao(IRepositorioTransacao repositorioTransacao, IValidator<Transacao> validadorTransacao)
        {
            _repositorioTransacao = repositorioTransacao;
            _validadorTransacao = validadorTransacao;
        }

        public void Criar(Transacao dados)
        {
            var resultadoValidacao = _validadorTransacao.Validate(dados);
            if (!resultadoValidacao.IsValid)
            {
                throw new ValidationException(resultadoValidacao.Errors);
            }
            _repositorioTransacao.Criar(dados);
        }

        public void Atualizar(Transacao dados)
        {
            var resultadoValidacao = _validadorTransacao.Validate(dados);
            if (!resultadoValidacao.IsValid)
            {
                throw new ValidationException(resultadoValidacao.Errors);
            }
            _repositorioTransacao.Atualizar(dados);
        }

        public void Excluir(int id)
        {
            _repositorioTransacao.Excluir(id);
        }

        public Transacao ObterPorId(int id)
        {
            return _repositorioTransacao.ObterPorId(id);
        }

        public List<Transacao> ObterTodas()
        {
            return _repositorioTransacao.ObterTodas();
        }

        public decimal ObterSaldo(int usuario_id)
        {
            return _repositorioTransacao.ObterSaldoPorUsuario(usuario_id);
        }

        // 1. Gastos por Categorias
        public Dictionary<string, decimal> GastosPorCategorias(int usuarioId)
        {
            var transacoes = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.valor > 0 && t.situacao_id == 1)
                .GroupBy(t => t.categoria_id)
                .ToDictionary(g => g.Key.ToString(), g => g.Sum(t => t.valor));

            return transacoes;
        }

        // 2. Ganhos vs Gastos
        public (decimal Ganhos, decimal Gastos) GanhosVsGastos(int usuarioId)
        {
            var transacoes = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.situacao_id == 1);

            decimal ganhos = transacoes
                .Where(t => t.tipo_id == 1) 
                .Sum(t => t.valor);

            decimal gastos = transacoes
                .Where(t => t.tipo_id == 2) 
                .Sum(t => t.valor);

            return (ganhos, gastos);
        }

        // 3. Despesas Fixas vs Despesas Variáveis
        public (decimal Fixas, decimal Variaveis) DespesasFixasVsVariaveis(int usuarioId)
        {
            var transacoes = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.situacao_id == 1);

            decimal fixas = transacoes
                .Where(t => t.periodicidade_id == 2) // 2 representa despesas fixas (transações fixas)
                .Sum(t => t.valor);

            decimal variaveis = transacoes
                .Where(t => t.periodicidade_id == 1) // 1 representa despesas variáveis (transações variaveis)
                .Sum(t => t.valor);

            return (fixas, variaveis);
        }


        // 4. Gastos por Dias da Semana
        public Dictionary<string, decimal> GastosPorDiasDaSemana(int usuarioId)
        {
            var transacoes = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.valor > 0 && t.situacao_id == 1)
                .GroupBy(t => t.data_transacao?.DayOfWeek)
                .ToDictionary(
                    g => g.Key.ToString(),
                    g => g.Sum(t => t.valor)
                );

            return transacoes;
        }

        // 5. Gastos em Cartão de Crédito vs Dinheiro
        public (decimal CartaoCredito, decimal Dinheiro) GastosCartaoCreditoVsDinheiro(int usuarioId)
        {
            var transacoes = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.situacao_id == 1);

            decimal cartaoCredito = transacoes
                .Where(t => t.tipo_pagamento_id == 2) // Supondo tipo 1 para cartão de crédito
                .Sum(t => t.valor);

            decimal dinheiro = transacoes
                .Where(t => t.tipo_pagamento_id == 1) // Supondo tipo 2 para dinheiro
                .Sum(t => t.valor);

            return (cartaoCredito, dinheiro);
        }
        public Dictionary<string, decimal> GastosPorMes(int usuarioId, int? ano = null, int? mesInicio = null, int? mesFim = null)
        {
            var transacoes = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.valor > 0 && t.situacao_id == 1);

            if (ano.HasValue)
            {
                transacoes = transacoes.Where(t => t.data_transacao?.Year == ano.Value);
            }

            if (mesInicio.HasValue)
            {
                transacoes = transacoes.Where(t => t.data_transacao?.Month >= mesInicio.Value);
            }

            if (mesFim.HasValue)
            {
                transacoes = transacoes.Where(t => t.data_transacao?.Month <= mesFim.Value);
            }

            var gastosPorMes = transacoes
                .GroupBy(t => t.data_transacao?.ToString("MMMM yyyy"))
                .ToDictionary(g => g.Key, g => g.Sum(t => t.valor));

            return gastosPorMes;
        }

        public Dictionary<string, decimal> SaldoAcumulado(int usuarioId, int? ano = null, int? mesInicio = null, int? mesFim = null)
        {
            var transacoes = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.situacao_id == 1);

            if (ano.HasValue)
            {
                transacoes = transacoes.Where(t => t.data_transacao?.Year == ano.Value);
            }

            if (mesInicio.HasValue)
            {
                transacoes = transacoes.Where(t => t.data_transacao?.Month >= mesInicio.Value);
            }

            if (mesFim.HasValue)
            {
                transacoes = transacoes.Where(t => t.data_transacao?.Month <= mesFim.Value);
            }

            var saldoAcumulado = new Dictionary<string, decimal>();
            decimal saldo = 0;

            var transacoesOrdenadas = transacoes.OrderBy(t => t.data_transacao);

            foreach (var transacao in transacoesOrdenadas)
            {
                saldo += transacao.valor;
                var mesAno = transacao.data_transacao?.ToString("MMMM yyyy");
                if (!saldoAcumulado.ContainsKey(mesAno))
                {
                    saldoAcumulado[mesAno] = saldo;
                }
            }

            return saldoAcumulado;
        }

        public Dictionary<string, decimal> EvolucaoMetasInvestimentos(int usuarioId, int? anoInicio = null, int? anoFim = null)
        {
            var metasInvestimentos = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.situacao_id == 1);

            if (anoInicio.HasValue)
            {
                metasInvestimentos = metasInvestimentos.Where(t => t.data_transacao?.Year >= anoInicio.Value);
            }

            if (anoFim.HasValue)
            {
                metasInvestimentos = metasInvestimentos.Where(t => t.data_transacao?.Year <= anoFim.Value);
            }

            var evolucaoMetas = metasInvestimentos
                .GroupBy(t => t.data_transacao?.ToString("MMMM yyyy"))
                .ToDictionary(g => g.Key, g => g.Sum(t => t.valor));

            return evolucaoMetas;
        }

        public Dictionary<string, decimal> ComparacaoGastosMensaisAnuais(int usuarioId, int anoInicio, int anoFim)
        {
            var transacoes = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.valor > 0 && t.data_transacao?.Year >= anoInicio && t.data_transacao?.Year <= anoFim && t.situacao_id == 1)
                .GroupBy(t => new { t.data_transacao?.Year, t.data_transacao?.Month })
                .Select(g => new
                {
                    Ano = g.Key.Year,
                    Mes = g.Key.Month,
                    Total = g.Sum(t => t.valor)
                })
                .ToList();

            var comparacaoGastos = transacoes
                .GroupBy(t => $"{t.Ano}-{t.Mes:D2}")
                .ToDictionary(g => g.Key, g => g.Sum(t => t.Total));

            return comparacaoGastos;
        }

        public decimal GastosTotaisPorPeriodo(int usuarioId, DateTime dataInicio, DateTime dataFim)
        {
            var transacoes = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.data_transacao >= dataInicio && t.data_transacao <= dataFim && t.situacao_id == 1);

            return transacoes.Sum(t => t.valor);
        }

        public decimal ReceitasTotais(int usuarioId, DateTime dataInicio, DateTime dataFim)
        {
            var transacoes = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.data_transacao >= dataInicio && t.data_transacao <= dataFim && t.situacao_id == 1);

            return transacoes.Sum(t => t.valor);
        }

        public decimal ProgressoEmMetasFinanceiras(int usuarioId, int metaInvestimentoId)
        {
            var metasFinanceiras = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.meta_investimento_id == metaInvestimentoId && t.situacao_id == 1);

            return metasFinanceiras.Sum(t => t.valor);
        }

        public decimal RetornosSobreInvestimentos(int usuarioId)
        {
            var investimentos = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.meta_investimento_id != 0 && t.tipo_id == 1);

            return investimentos.Sum(t => t.valor);
        }

        public List<Transacao> HistoricoDeTransacoes(int usuarioId, DateTime? dataInicio = null, DateTime? dataFim = null)
        {
            var transacoes = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.situacao_id == 1);

            if (dataInicio.HasValue)
            {
                transacoes = transacoes.Where(t => t.data_transacao >= dataInicio.Value);
            }

            if (dataFim.HasValue)
            {
                transacoes = transacoes.Where(t => t.data_transacao <= dataFim.Value);
            }

            return transacoes.OrderBy(t => t.data_transacao).ToList();
        }

        public decimal PrevisoesDeGastos(int usuarioId, int mesesProjecao)
        {
            var transacoes = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.valor > 0 && t.tipo_id == 2)
                .OrderBy(t => t.data_transacao)
                .TakeLast(mesesProjecao);

            var mediaMensalGastos = transacoes.Average(t => t.valor);

            return mediaMensalGastos * mesesProjecao;
        }

        public Dictionary<int?, decimal> ComparacaoAnual(int usuarioId, int anoInicio, int anoFim)
        {
            var transacoes = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.data_transacao?.Year >= anoInicio && t.data_transacao?.Year <= anoFim && t.situacao_id == 1);

            var comparacaoAnual = transacoes
                .GroupBy(t => t.data_transacao?.Year)
                .ToDictionary(g => g.Key, g => g.Sum(t => t.valor));

            return comparacaoAnual;
        }

        public decimal ObterValorOrcadoTotal(int usuarioId)
        {
            var saidas = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.tipo_id == 2 && t.situacao_id == 2) // Tipo 2 = Saída
                .Sum(t => (decimal?)t.valor) ?? 0;

            return saidas;
        }
        public List<Transacao> ObterOrcamentos(int usuarioId)
        {
            var valoresOrcamento = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.situacao_id == 2).ToList();
            
            return valoresOrcamento;
        }
        public List<Transacao> ObterLancamentos(int usuarioId)
        {
            var valoresOrcamento = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.situacao_id == 1).ToList();

            return valoresOrcamento;
        }

        public List<Transacao> ObterInvestimentos(int usuarioId)
        {
            var Investimentos = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.situacao_id == 1 && t.meta_investimento_id != null).ToList();

            return Investimentos;
        }
        public List<Lancamento> ObterLancamento(int usuarioId)
        {
            var valoresLacamentos = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.situacao_id == 1).ToList();
            return ConverterTransacaoEmLancamento(valoresLacamentos);
        }

        public List<Lancamento> ConverterTransacaoEmLancamento(List<Transacao> transacoes)
        {
            var lancamentos = new List<Lancamento>();
            foreach (var transacao in transacoes)
            {
                var lancamento = new Lancamento()
                {
                    tipo = transacao.tipo_id,
                    valor = transacao.valor,
                    nome = transacao.nome,
                    data = transacao.data_transacao
                };
                lancamentos.Add(lancamento);
            }
            return lancamentos;
        }
        public List<Orcamento> ObterOrcamento(int usuarioId)
        {
            var valoresOrcamento = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.situacao_id == 2).ToList();
            return ConverterTransacaoEmOrcamento(valoresOrcamento);
        }

        public List<Orcamento> ConverterTransacaoEmOrcamento(List<Transacao> transacoes)
        {
            var orcamentos = new List<Orcamento>();
            foreach (var transacao in transacoes)
            {
                var orcamento = new Orcamento()
                {
                    valor = transacao.valor,
                    nome = transacao.nome,
                    data = transacao.data_transacao
                };
                orcamentos.Add(orcamento);
            }
            return orcamentos;
        }

        public List<Investimento> ObterInvestimento(int usuarioId)
        {
            var Investimentos = _repositorioTransacao.ObterTodas()
                .Where(t => t.usuario_id == usuarioId && t.situacao_id == 1 && t.meta_investimento_id != null).ToList();
            return ConverterTransacaoEmInvestimento(Investimentos);
        }

        public List<Investimento> ConverterTransacaoEmInvestimento(List<Transacao> transacoes)
        {
            var investimentos = new List<Investimento>();
            foreach (var transacao in transacoes)
            {
                var investimento = new Investimento()
                {
                    valor = transacao.valor,
                    nome = transacao.nome,
                    data = transacao.data_transacao
                };
                investimentos.Add(investimento);
            }
            return investimentos;
        }

    }

    public class Lancamento
    {
        public int tipo { get; set; }
        public decimal valor { get; set; }
        public string nome { get; set; }
        public DateTime? data { get; set; }
    }

    public class Orcamento
    {
        public decimal valor { get; set; }
        public string nome { get; set; }
        public DateTime? data { get; set; }
    }

    public class Investimento
    {
        public decimal valor { get; set; }
        public string nome { get; set; }
        public DateTime? data { get; set; }
    }
}
