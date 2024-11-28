using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Metas;
using PoupaPig.Dominio.Metas.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Web.Controllers.Auxiliares.Metas
{
    [ApiController]
    [Route("api/[controller]")]
    public class NomeTipoObjetivoController : ControllerBase
    {
        private readonly ServicoNomeTipoObjetivo _servico;

        // Injetando o serviço através do construtor
        public NomeTipoObjetivoController(ServicoNomeTipoObjetivo servico)
        {
            _servico = servico;
        }

        [HttpPost]
        public IActionResult Criar([FromBody] NomeTipoObjetivo dados)
        {
            _servico.Criar(dados);
            return Ok();
        }

        [HttpPut]
        public IActionResult Atualizar([FromBody] NomeTipoObjetivo dados)
        {
            _servico.Atualizar(dados);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Excluir(int id)
        {
            _servico.Excluir(id);
            return Ok();
        }

        [HttpGet("{id}")]
        public ActionResult<NomeTipoObjetivo> ObterPorId(int id)
        {
            var nomeTipoObjetivo = _servico.ObterPorId(id);
            if (nomeTipoObjetivo == null)
            {
                return NotFound();
            }
            return Ok(nomeTipoObjetivo);
        }

        [HttpGet]
        public ActionResult<List<NomeTipoObjetivo>> ObterTodas()
        {
            var nomeTipoObjetivos = _servico.ObterTodas();
            return Ok(nomeTipoObjetivos);
        }
    }
}
