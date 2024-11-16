using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Web.Controllers.Auxiliares.Transacoes
{
    [ApiController]
    [Route("api/[controller]")]
    public class SituacaoTransacaoController : ControllerBase
    {
        private readonly ServicoSituacaoTransacao _servico;

        // Injeção de dependência do serviço
        public SituacaoTransacaoController(ServicoSituacaoTransacao servico)
        {
            _servico = servico;
        }

        // Endpoint para criar uma nova SituacaoTransacao
        [HttpPost]
        public IActionResult Criar([FromBody] SituacaoTransacao dados)
        {
            _servico.Criar(dados);
            return Ok();
        }

        // Endpoint para atualizar uma SituacaoTransacao existente
        [HttpPut]
        public IActionResult Atualizar([FromBody] SituacaoTransacao dados)
        {
            _servico.Atualizar(dados);
            return Ok();
        }

        // Endpoint para excluir uma SituacaoTransacao pelo ID
        [HttpDelete("{id}")]
        public IActionResult Excluir(int id)
        {
            _servico.Excluir(id);
            return Ok();
        }

        // Endpoint para obter uma SituacaoTransacao pelo ID
        [HttpGet("{id}")]
        public ActionResult<SituacaoTransacao> ObterPorId(int id)
        {
            var situacaoTransacao = _servico.ObterPorId(id);
            if (situacaoTransacao == null)
            {
                return NotFound();
            }
            return Ok(situacaoTransacao);
        }

        // Endpoint para obter todas as SituacaoTransacao
        [HttpGet]
        public ActionResult<List<SituacaoTransacao>> ObterTodas()
        {
            var situacoes = _servico.ObterTodas();
            return Ok(situacoes);
        }
    }
}
