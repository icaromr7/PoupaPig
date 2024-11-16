using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Web.Controllers.Auxiliares.Transacoes
{
    [ApiController]
    [Route("api/[controller]")]
    public class PeriodicidadeTransacaoController : ControllerBase
    {
        private readonly ServicoPeriodicidadeTransacao _servico;

        // Injetando o serviço através do construtor
        public PeriodicidadeTransacaoController(ServicoPeriodicidadeTransacao servico)
        {
            _servico = servico;
        }

        // Endpoint para criar uma nova periodicidade de transação
        [HttpPost]
        public IActionResult Criar([FromBody] PeriodicidadeTransacao dados)
        {
            _servico.Criar(dados);
            return Ok();
        }

        // Endpoint para atualizar uma periodicidade de transação existente
        [HttpPut]
        public IActionResult Atualizar([FromBody] PeriodicidadeTransacao dados)
        {
            _servico.Atualizar(dados);
            return Ok();
        }

        // Endpoint para excluir uma periodicidade de transação pelo ID
        [HttpDelete("{id}")]
        public IActionResult Excluir(int id)
        {
            _servico.Excluir(id);
            return Ok();
        }

        // Endpoint para obter uma periodicidade de transação pelo ID
        [HttpGet("{id}")]
        public ActionResult<PeriodicidadeTransacao> ObterPorId(int id)
        {
            var periodicidadeTransacao = _servico.ObterPorId(id);
            if (periodicidadeTransacao == null)
            {
                return NotFound();
            }
            return Ok(periodicidadeTransacao);
        }

        // Endpoint para obter todas as periodicidades de transação
        [HttpGet]
        public ActionResult<List<PeriodicidadeTransacao>> ObterTodas()
        {
            var periodicidades = _servico.ObterTodas();
            return Ok(periodicidades);
        }
    }
}
