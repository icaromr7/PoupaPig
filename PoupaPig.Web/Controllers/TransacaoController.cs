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
        public IActionResult ObterPorId(int id)
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
        public IActionResult Atualizar(int id, [FromBody] Transacao transacao)
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
        public IActionResult Excluir(int id)
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
        public IActionResult ObterSaldo(int usuarioId)
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
        public IActionResult GastosPorCategorias(int usuarioId)
        {
            var gastosPorCategorias = _servicoTransacao.GastosPorCategorias(usuarioId);
            return Ok(gastosPorCategorias);
        }

        [HttpGet("ganhos-vs-gastos/{usuarioId}")]
        public IActionResult GanhosVsGastos(int usuarioId)
        {
            var (ganhos, gastos) = _servicoTransacao.GanhosVsGastos(usuarioId);
            return Ok(new { Ganhos = ganhos, Gastos = gastos });
        }

        [HttpGet("despesas-fixas-vs-variaveis/{usuarioId}")]
        public IActionResult DespesasFixasVsVariaveis(int usuarioId)
        {
            var (fixas, variaveis) = _servicoTransacao.DespesasFixasVsVariaveis(usuarioId);
            return Ok(new { Fixas = fixas, Variaveis = variaveis });
        }

        [HttpGet("gastos-por-dias-da-semana/{usuarioId}")]
        public IActionResult GastosPorDiasDaSemana(int usuarioId)
        {
            var gastosPorDias = _servicoTransacao.GastosPorDiasDaSemana(usuarioId);
            return Ok(gastosPorDias);
        }

        [HttpGet("gastos-cartao-credito-vs-dinheiro/{usuarioId}")]
        public IActionResult GastosCartaoCreditoVsDinheiro(int usuarioId)
        {
            var (cartaoCredito, dinheiro) = _servicoTransacao.GastosCartaoCreditoVsDinheiro(usuarioId);
            return Ok(new { CartaoCredito = cartaoCredito, Dinheiro = dinheiro });
        }

        // 1. Gastos por Mês
        [HttpGet("gastos-por-mes")]
        public ActionResult<Dictionary<string, decimal>> GastosPorMes(int usuarioId, int? ano = null, int? mesInicio = null, int? mesFim = null)
        {
            var gastos = _servicoTransacao.GastosPorMes(usuarioId, ano, mesInicio, mesFim);
            return Ok(gastos);
        }

        // 2. Saldo Acumulado ao Longo do Tempo
        [HttpGet("saldo-acumulado")]
        public ActionResult<Dictionary<string, decimal>> SaldoAcumulado(int usuarioId, int? ano = null, int? mesInicio = null, int? mesFim = null)
        {
            var saldo = _servicoTransacao.SaldoAcumulado(usuarioId, ano, mesInicio, mesFim);
            return Ok(saldo);
        }

        // 3. Evolução de Metas/Investimentos
        [HttpGet("evolucao-metas-investimentos")]
        public ActionResult<Dictionary<string, decimal>> EvolucaoMetasInvestimentos(int usuarioId, int? anoInicio = null, int? anoFim = null)
        {
            var evolucao = _servicoTransacao.EvolucaoMetasInvestimentos(usuarioId, anoInicio, anoFim);
            return Ok(evolucao);
        }

        // 4. Comparação de Gastos Mensais Anuais
        [HttpGet("comparacao-gastos-mensais-anuais")]
        public ActionResult<Dictionary<string, decimal>> ComparacaoGastosMensaisAnuais(int usuarioId, int anoInicio, int anoFim)
        {
            var comparacao = _servicoTransacao.ComparacaoGastosMensaisAnuais(usuarioId, anoInicio, anoFim);
            return Ok(comparacao);
        }

        // 5. Gastos Totais por Período
        [HttpGet("gastos-totais-periodo")]
        public ActionResult<decimal> GastosTotaisPorPeriodo(int usuarioId, DateTime dataInicio, DateTime dataFim)
        {
            var gastos = _servicoTransacao.GastosTotaisPorPeriodo(usuarioId, dataInicio, dataFim);
            return Ok(gastos);
        }

        // 6. Receitas Totais
        [HttpGet("receitas-totais")]
        public ActionResult<decimal> ReceitasTotais(int usuarioId, DateTime dataInicio, DateTime dataFim)
        {
            var receitas = _servicoTransacao.ReceitasTotais(usuarioId, dataInicio, dataFim);
            return Ok(receitas);
        }

        // 7. Progresso em Metas Financeiras
        [HttpGet("progresso-metas-financeiras")]
        public ActionResult<decimal> ProgressoEmMetasFinanceiras(int usuarioId)
        {
            var progresso = _servicoTransacao.ProgressoEmMetasFinanceiras(usuarioId);
            return Ok(progresso);
        }

        // 8. Retornos sobre Investimentos
        [HttpGet("retornos-investimentos")]
        public ActionResult<decimal> RetornosSobreInvestimentos(int usuarioId)
        {
            var retornos = _servicoTransacao.RetornosSobreInvestimentos(usuarioId);
            return Ok(retornos);
        }

        // 9. Histórico de Transações
        [HttpGet("historico-transacoes")]
        public ActionResult<List<Transacao>> HistoricoDeTransacoes(int usuarioId, DateTime? dataInicio = null, DateTime? dataFim = null)
        {
            var historico = _servicoTransacao.HistoricoDeTransacoes(usuarioId, dataInicio, dataFim);
            return Ok(historico);
        }

        // 10. Previsões de Gastos
        [HttpGet("previsoes-gastos")]
        public ActionResult<decimal> PrevisoesDeGastos(int usuarioId, int mesesProjecao)
        {
            var previsao = _servicoTransacao.PrevisoesDeGastos(usuarioId, mesesProjecao);
            return Ok(previsao);
        }

        // 11. Comparações Anuais
        [HttpGet("comparacao-anual")]
        public ActionResult<Dictionary<int, decimal>> ComparacaoAnual(int usuarioId, int anoInicio, int anoFim)
        {
            var comparacao = _servicoTransacao.ComparacaoAnual(usuarioId, anoInicio, anoFim);
            return Ok(comparacao);
        }

    }
}
