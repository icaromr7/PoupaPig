using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Metas.Servicos;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;

namespace PoupaPig.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransacaoController : ControllerBase
    {
        private readonly ServicoTransacao _servicoTransacao;

        // Injeção de dependência do serviço de transação
        public TransacaoController(ServicoTransacao servicoTransacao)
        {
            _servicoTransacao = servicoTransacao;
        }

        // Endpoint para criar uma nova transação
        [HttpPost]
        public IActionResult Criar([FromBody] Transacao transacao)
        {
            if (transacao == null)
            {
                return BadRequest("Dados da transação são inválidos.");
            }

            try
            {
                _servicoTransacao.Criar(transacao);
                return Ok("Transação criada com sucesso!");
            }
            catch (System.Exception ex)
            {
                return StatusCode(500, $"Erro ao criar a transação: {ex.Message}");
            }
        }

        // Endpoint para obter uma transação pelo ID
        [HttpGet("{id}")]
        public IActionResult ObterPorId([FromRoute] int id)
        {
            var transacao = _servicoTransacao.ObterPorId(id);
            if (transacao == null)
            {
                return NotFound("Transação não encontrada.");
            }

            return Ok(transacao);
        }

        // Endpoint para listar todas as transações
        [HttpGet]
        public IActionResult ObterTodas()
        {
            var transacoes = _servicoTransacao.ObterTodas();
            return Ok(transacoes);
        }

        // Endpoint para atualizar uma transação existente
        [HttpPut("{id}")]
        public IActionResult Atualizar([FromRoute] int id, [FromBody] Transacao transacao)
        {
            if (transacao == null || transacao.id != id)
            {
                return BadRequest("Dados da transação são inválidos.");
            }

            try
            {
                var existente = _servicoTransacao.ObterPorId(id);
                if (existente == null)
                {
                    return NotFound("Transação não encontrada para atualização.");
                }

                _servicoTransacao.Atualizar(transacao);
                return Ok("Transação atualizada com sucesso!");
            }
            catch (System.Exception ex)
            {
                return StatusCode(500, $"Erro ao atualizar a transação: {ex.Message}");
            }
        }

        // Endpoint para excluir uma transação pelo ID
        [HttpDelete("{id}")]
        public IActionResult Excluir([FromRoute] int id)
        {
            try
            {
                var transacao = _servicoTransacao.ObterPorId(id);
                if (transacao == null)
                {
                    return NotFound("Transação não encontrada para exclusão.");
                }

                _servicoTransacao.Excluir(id);
                return Ok("Transação excluída com sucesso!");
            }
            catch (System.Exception ex)
            {
                return StatusCode(500, $"Erro ao excluir a transação: {ex.Message}");
            }
        }

        // Novo endpoint para obter o saldo do usuário
        [HttpGet("saldo/{usuarioId}")]
        public IActionResult ObterSaldo([FromRoute] int usuarioId)
        {
            try
            {
                decimal saldo = _servicoTransacao.ObterSaldo(usuarioId);
                return Ok(new { usuarioId, saldo });
            }
            catch (System.Exception ex)
            {
                return StatusCode(500, $"Erro ao obter o saldo do usuário: {ex.Message}");
            }
        }

        [HttpGet("gastos-por-categorias/{usuarioId}")]
        public IActionResult GastosPorCategorias([FromRoute] int usuarioId)
        {
            var gastosPorCategorias = _servicoTransacao.GastosPorCategorias(usuarioId);
            return Ok(gastosPorCategorias);
        }

        [HttpGet("ganhos-vs-gastos/{usuarioId}")]
        public IActionResult GanhosVsGastos([FromRoute] int usuarioId)
        {
            var (ganhos, gastos) = _servicoTransacao.GanhosVsGastos(usuarioId);
            return Ok(new { Ganhos = ganhos, Gastos = gastos });
        }

        [HttpGet("despesas-fixas-vs-variaveis/{usuarioId}")]
        public IActionResult DespesasFixasVsVariaveis([FromRoute] int usuarioId)
        {
            var (fixas, variaveis) = _servicoTransacao.DespesasFixasVsVariaveis(usuarioId);
            return Ok(new { Fixas = fixas, Variaveis = variaveis });
        }

        [HttpGet("gastos-por-dias-da-semana/{usuarioId}")]
        public IActionResult GastosPorDiasDaSemana([FromRoute] int usuarioId)
        {
            var gastosPorDias = _servicoTransacao.GastosPorDiasDaSemana(usuarioId);
            return Ok(gastosPorDias);
        }

        [HttpGet("gastos-cartao-credito-vs-dinheiro/{usuarioId}")]
        public IActionResult GastosCartaoCreditoVsDinheiro([FromRoute] int usuarioId)
        {
            var (cartaoCredito, dinheiro) = _servicoTransacao.GastosCartaoCreditoVsDinheiro(usuarioId);
            return Ok(new { CartaoCredito = cartaoCredito, Dinheiro = dinheiro });
        }

        // 1. Gastos por Mês
        [HttpGet("gastos-por-mes/{usuarioId}")]
        public ActionResult<Dictionary<string, decimal>> GastosPorMes([FromRoute] int usuarioId, [FromQuery] int? ano = null, [FromQuery] int? mesInicio = null, [FromQuery] int? mesFim = null)
        {
            var gastos = _servicoTransacao.GastosPorMes(usuarioId, ano, mesInicio, mesFim);
            return Ok(gastos);
        }

        // 2. Saldo Acumulado ao Longo do Tempo
        [HttpGet("saldo-acumulado/{usuarioId}")]
        public ActionResult<Dictionary<string, decimal>> SaldoAcumulado([FromRoute] int usuarioId, [FromQuery] int? ano = null, [FromQuery] int? mesInicio = null, [FromQuery] int? mesFim = null)
        {
            var saldo = _servicoTransacao.SaldoAcumulado(usuarioId, ano, mesInicio, mesFim);
            return Ok(saldo);
        }

        // 3. Evolução de Metas/Investimentos
        [HttpGet("evolucao-metas-investimentos/{usuarioId}")]
        public ActionResult<Dictionary<string, decimal>> EvolucaoMetasInvestimentos([FromRoute] int usuarioId, [FromQuery] int? anoInicio = null, [FromQuery] int? anoFim = null)
        {
            var evolucao = _servicoTransacao.EvolucaoMetasInvestimentos(usuarioId, anoInicio, anoFim);
            return Ok(evolucao);
        }

        // 4. Comparação de Gastos Mensais Anuais
        [HttpGet("comparacao-gastos-mensais-anuais/{usuarioId}")]
        public ActionResult<Dictionary<string, decimal>> ComparacaoGastosMensaisAnuais([FromRoute] int usuarioId, [FromQuery] int anoInicio, [FromQuery] int anoFim)
        {
            var comparacao = _servicoTransacao.ComparacaoGastosMensaisAnuais(usuarioId, anoInicio, anoFim);
            return Ok(comparacao);
        }

        // 5. Gastos Totais por Período
        [HttpGet("gastos-totais-periodo/{usuarioId}")]
        public ActionResult<decimal> GastosTotaisPorPeriodo([FromRoute] int usuarioId, [FromQuery] DateTime dataInicio, [FromQuery] DateTime dataFim)
        {
            var gastos = _servicoTransacao.GastosTotaisPorPeriodo(usuarioId, dataInicio, dataFim);
            return Ok(gastos);
        }

        // 6. Receitas Totais
        [HttpGet("receitas-totais/{usuarioId}")]
        public ActionResult<decimal> ReceitasTotais([FromRoute] int usuarioId, [FromQuery] DateTime dataInicio, [FromQuery] DateTime dataFim)
        {
            var receitas = _servicoTransacao.ReceitasTotais(usuarioId, dataInicio, dataFim);
            return Ok(receitas);
        }

        // 7. Progresso em Metas Financeiras
        [HttpGet("progresso-metas-financeiras/{usuarioId}")]
        public ActionResult<decimal> ProgressoEmMetasFinanceiras([FromRoute] int usuarioId, [FromQuery] int metaInvestimentoid)
        {
            var progresso = _servicoTransacao.ProgressoEmMetasFinanceiras(usuarioId, metaInvestimentoid);
            return Ok(progresso);
        }

        // 8. Retornos sobre Investimentos
        [HttpGet("retornos-investimentos/{usuarioId}")]
        public ActionResult<decimal> RetornosSobreInvestimentos([FromRoute] int usuarioId)
        {
            var retornos = _servicoTransacao.RetornosSobreInvestimentos(usuarioId);
            return Ok(retornos);
        }

        // 9. Histórico de Transações
        [HttpGet("historico-transacoes/{usuarioId}")]
        public ActionResult<List<Transacao>> HistoricoDeTransacoes([FromRoute] int usuarioId, [FromQuery] DateTime? dataInicio = null, [FromQuery] DateTime? dataFim = null)
        {
            var historico = _servicoTransacao.HistoricoDeTransacoes(usuarioId, dataInicio, dataFim);
            return Ok(historico);
        }

        // 10. Previsões de Gastos
        [HttpGet("previsoes-gastos/{usuarioId}")]
        public ActionResult<decimal> PrevisoesDeGastos([FromRoute] int usuarioId, [FromQuery] int mesesProjecao)
        {
            var previsao = _servicoTransacao.PrevisoesDeGastos(usuarioId, mesesProjecao);
            return Ok(previsao);
        }

        // 11. Comparações Anuais
        [HttpGet("comparacao-anual/{usuarioId}")]
        public ActionResult<Dictionary<int, decimal>> ComparacaoAnual([FromRoute] int usuarioId, [FromQuery] int anoInicio, [FromQuery] int anoFim)
        {
            var comparacao = _servicoTransacao.ComparacaoAnual(usuarioId, anoInicio, anoFim);
            return Ok(comparacao);
        }

        [HttpGet("valor-orcado/{usuarioId}")]
        public IActionResult ObterValorOrcadoTotal([FromRoute] int usuarioId)
        {
            var valorOrcadoTotal = _servicoTransacao.ObterValorOrcadoTotal(usuarioId);
            return Ok(valorOrcadoTotal);
        }

        [HttpGet("orcamentos/{usuarioId}")]
        public IActionResult ObterOrcamentos([FromRoute] int usuarioId)
        {
            var valoresOrcadomento = _servicoTransacao.ObterOrcamentos(usuarioId);
            return Ok(valoresOrcadomento);
        }

        [HttpGet("lancamentos/{usuarioId}")]
        public IActionResult ObterLancamentos([FromRoute] int usuarioId)
        {
            var valoresOrcadomento = _servicoTransacao.ObterLancamentos(usuarioId);
            return Ok(valoresOrcadomento);
        }

        [HttpGet("investimentos/{usuarioId}")]
        public IActionResult ObterInvestimentos([FromRoute] int usuarioId)
        {
            var valoresOrcadomento = _servicoTransacao.ObterInvestimentos(usuarioId);
            return Ok(valoresOrcadomento);
        }

        [HttpGet("orcamento/{usuarioId}")]
        public IActionResult ObterOrcamento([FromRoute] int usuarioId)
        {
            var valoresOrcadomento = _servicoTransacao.ObterOrcamento(usuarioId);
            return Ok(valoresOrcadomento);
        }

        [HttpGet("lancamento/{usuarioId}")]
        public IActionResult ObterLancamento([FromRoute] int usuarioId)
        {
            var valoresOrcadomento = _servicoTransacao.ObterLancamento(usuarioId);
            return Ok(valoresOrcadomento);
        }

        [HttpGet("investimento/{usuarioId}")]
        public IActionResult ObterInvestimento([FromRoute] int usuarioId)
        {
            var valoresOrcadomento = _servicoTransacao.ObterInvestimento(usuarioId);
            return Ok(valoresOrcadomento);
        }
    }
}
