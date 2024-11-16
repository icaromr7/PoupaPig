using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Web.Controllers.Auxiliares.Transacoes
{
    [ApiController]
    [Route("api/[controller]")]
    public class TipoTransacaoController : ControllerBase
    {
        private readonly ServicoTipoTransacao _servico;

        // Injeção de dependência do serviço
        public TipoTransacaoController(ServicoTipoTransacao servico)
        {
            _servico = servico;
        }

        // Endpoint para criar um novo TipoTransacao
        [HttpPost]
        public IActionResult Criar([FromBody] TipoTransacao dados)
        {
            _servico.Criar(dados);
            return Ok();
        }

        // Endpoint para atualizar um TipoTransacao existente
        [HttpPut]
        public IActionResult Atualizar([FromBody] TipoTransacao dados)
        {
            _servico.Atualizar(dados);
            return Ok();
        }

        // Endpoint para excluir um TipoTransacao pelo ID
        [HttpDelete("{id}")]
        public IActionResult Excluir(int id)
        {
            _servico.Excluir(id);
            return Ok();
        }

        // Endpoint para obter um TipoTransacao pelo ID
        [HttpGet("{id}")]
        public ActionResult<TipoTransacao> ObterPorId(int id)
        {
            var tipoTransacao = _servico.ObterPorId(id);
            if (tipoTransacao == null)
            {
                return NotFound();
            }
            return Ok(tipoTransacao);
        }

        // Endpoint para obter todos os TipoTransacao
        [HttpGet]
        public ActionResult<List<TipoTransacao>> ObterTodas()
        {
            var tiposTransacao = _servico.ObterTodas();
            return Ok(tiposTransacao);
        }
    }
}
