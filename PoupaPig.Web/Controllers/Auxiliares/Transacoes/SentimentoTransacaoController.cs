using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Web.Controllers.Auxiliares.Transacoes
{
    [ApiController]
    [Route("api/[controller]")]
    public class SentimentoTransacaoController : ControllerBase
    {
        private readonly ServicoSentimentoTransacao _servico;

        // Injeção de dependência do serviço
        public SentimentoTransacaoController(ServicoSentimentoTransacao servico)
        {
            _servico = servico;
        }

        // Endpoint para criar uma nova SentimentoTransacao
        [HttpPost]
        public IActionResult Criar([FromBody] SentimentoTransacao dados)
        {
            _servico.Criar(dados);
            return Ok();
        }

        // Endpoint para atualizar uma SentimentoTransacao existente
        [HttpPut]
        public IActionResult Atualizar([FromBody] SentimentoTransacao dados)
        {
            _servico.Atualizar(dados);
            return Ok();
        }

        // Endpoint para excluir uma SentimentoTransacao pelo ID
        [HttpDelete("{id}")]
        public IActionResult Excluir(int id)
        {
            _servico.Excluir(id);
            return Ok();
        }

        // Endpoint para obter uma SentimentoTransacao pelo ID
        [HttpGet("{id}")]
        public ActionResult<SentimentoTransacao> ObterPorId(int id)
        {
            var sentimentoTransacao = _servico.ObterPorId(id);
            if (sentimentoTransacao == null)
            {
                return NotFound();
            }
            return Ok(sentimentoTransacao);
        }

        // Endpoint para obter todas as SentimentoTransacao
        [HttpGet]
        public ActionResult<List<SentimentoTransacao>> ObterTodas()
        {
            var sentimentos = _servico.ObterTodas();
            return Ok(sentimentos);
        }
    }
}
