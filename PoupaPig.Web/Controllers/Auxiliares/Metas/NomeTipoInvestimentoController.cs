using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Metas;
using PoupaPig.Dominio.Metas.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Web.Controllers.Auxiliares.Metas
{
    [ApiController]
    [Route("api/[controller]")]
    public class NomeTipoInvestimentoController : ControllerBase
    {
        private readonly ServicoNomeTipoInvestimento _servico;

        // Injetando o serviço através do construtor
        public NomeTipoInvestimentoController(ServicoNomeTipoInvestimento servico)
        {
            _servico = servico;
        }

        [HttpPost]
        public IActionResult Criar([FromBody] NomeTipoInvestimento dados)
        {
            _servico.Criar(dados);
            return Ok();
        }

        [HttpPut]
        public IActionResult Atualizar([FromBody] NomeTipoInvestimento dados)
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
        public ActionResult<NomeTipoInvestimento> ObterPorId(int id)
        {
            var nomeTipoInvestimento = _servico.ObterPorId(id);
            if (nomeTipoInvestimento == null)
            {
                return NotFound();
            }
            return Ok(nomeTipoInvestimento);
        }

        [HttpGet]
        public ActionResult<List<NomeTipoInvestimento>> ObterTodas()
        {
            var nomeTipoInvestimentos = _servico.ObterTodas();
            return Ok(nomeTipoInvestimentos);
        }
    }
}
