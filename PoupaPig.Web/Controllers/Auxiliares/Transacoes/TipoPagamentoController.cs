using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Web.Controllers.Auxiliares.Transacoes
{
    [ApiController]
    [Route("api/[controller]")]
    public class TipoPagamentoController : ControllerBase
    {
        private readonly ServicoTipoPagamento _servico;

        // Injeção de dependência do serviço
        public TipoPagamentoController(ServicoTipoPagamento servico)
        {
            _servico = servico;
        }

        // Endpoint para criar um novo TipoPagamento
        [HttpPost]
        public IActionResult Criar([FromBody] TipoPagamento dados)
        {
            _servico.Criar(dados);
            return Ok();
        }

        // Endpoint para atualizar um TipoPagamento existente
        [HttpPut]
        public IActionResult Atualizar([FromBody] TipoPagamento dados)
        {
            _servico.Atualizar(dados);
            return Ok();
        }

        // Endpoint para excluir um TipoPagamento pelo ID
        [HttpDelete("{id}")]
        public IActionResult Excluir(int id)
        {
            _servico.Excluir(id);
            return Ok();
        }

        // Endpoint para obter um TipoPagamento pelo ID
        [HttpGet("{id}")]
        public ActionResult<TipoPagamento> ObterPorId(int id)
        {
            var tipoPagamento = _servico.ObterPorId(id);
            if (tipoPagamento == null)
            {
                return NotFound();
            }
            return Ok(tipoPagamento);
        }

        // Endpoint para obter todos os TipoPagamento
        [HttpGet]
        public ActionResult<List<TipoPagamento>> ObterTodas()
        {
            var tiposPagamento = _servico.ObterTodas();
            return Ok(tiposPagamento);
        }
    }
}
