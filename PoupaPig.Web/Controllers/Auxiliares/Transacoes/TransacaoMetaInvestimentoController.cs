using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Web.Controllers.Auxiliares.Transacoes
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransacaoMetaInvestimentoController : ControllerBase
    {
        private readonly ServicoTransacaoMetaInvestimento _servico;

        // Injetando o serviço através do construtor
        public TransacaoMetaInvestimentoController(ServicoTransacaoMetaInvestimento servico)
        {
            _servico = servico;
        }

        // Endpoint para criar uma nova TransacaoMetaInvestimento
        [HttpPost]
        public IActionResult Criar([FromBody] TransacaoMetaInvestimento dados)
        {
            _servico.Criar(dados);
            return Ok();
        }

        // Endpoint para atualizar uma TransacaoMetaInvestimento existente
        [HttpPut]
        public IActionResult Atualizar([FromBody] TransacaoMetaInvestimento dados)
        {
            _servico.Atualizar(dados);
            return Ok();
        }

        // Endpoint para excluir uma TransacaoMetaInvestimento pelo ID
        [HttpDelete("{id}")]
        public IActionResult Excluir(int id)
        {
            _servico.Excluir(id);
            return Ok();
        }

        // Endpoint para obter uma TransacaoMetaInvestimento pelo ID
        [HttpGet("{id}")]
        public ActionResult<TransacaoMetaInvestimento> ObterPorId(int id)
        {
            var transacaoMetaInvestimento = _servico.ObterPorId(id);
            if (transacaoMetaInvestimento == null)
            {
                return NotFound();
            }
            return Ok(transacaoMetaInvestimento);
        }

        // Endpoint para obter todas as TransacaoMetaInvestimento
        [HttpGet]
        public ActionResult<List<TransacaoMetaInvestimento>> ObterTodas()
        {
            var transacoes = _servico.ObterTodas();
            return Ok(transacoes);
        }

        // Endpoint para obter TransacaoMetaInvestimento por usuario_id
        [HttpGet("usuario/{usuarioId}")]
        public ActionResult<List<TransacaoMetaInvestimento>> ObterPorUsuarioId(int usuarioId)
        {
            var transacoes = _servico.ObterPorUsuarioId(usuarioId);
            if (transacoes == null || transacoes.Count == 0)
            {
                return NotFound();
            }
            return Ok(transacoes);
        }
    }
}
