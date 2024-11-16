using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Web.Controllers.Auxiliares.Transacoes
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecorrenciaController : ControllerBase
    {
        private readonly ServicoRecorrencia _servico;

        // Injeção de dependência do serviço
        public RecorrenciaController(ServicoRecorrencia servico)
        {
            _servico = servico;
        }

        // Endpoint para criar uma nova recorrência
        [HttpPost]
        public IActionResult Criar([FromBody] Recorrencia dados)
        {
            _servico.Criar(dados);
            return Ok();
        }

        // Endpoint para atualizar uma recorrência existente
        [HttpPut]
        public IActionResult Atualizar([FromBody] Recorrencia dados)
        {
            _servico.Atualizar(dados);
            return Ok();
        }

        // Endpoint para excluir uma recorrência pelo ID
        [HttpDelete("{id}")]
        public IActionResult Excluir(int id)
        {
            _servico.Excluir(id);
            return Ok();
        }

        // Endpoint para obter uma recorrência pelo ID
        [HttpGet("{id}")]
        public ActionResult<Recorrencia> ObterPorId(int id)
        {
            var recorrencia = _servico.ObterPorId(id);
            if (recorrencia == null)
            {
                return NotFound();
            }
            return Ok(recorrencia);
        }

        // Endpoint para obter todas as recorrências
        [HttpGet]
        public ActionResult<List<Recorrencia>> ObterTodas()
        {
            var recorrencias = _servico.ObterTodas();
            return Ok(recorrencias);
        }
    }
}
