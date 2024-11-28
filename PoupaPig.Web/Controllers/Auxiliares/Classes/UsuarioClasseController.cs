using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Classes;
using PoupaPig.Dominio.Classes.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Web.Controllers.Auxiliares.Classes
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioClasseController : ControllerBase
    {
        private readonly ServicoUsuarioClasse _servico;

        // Injetando o serviço através do construtor
        public UsuarioClasseController(ServicoUsuarioClasse servico)
        {
            _servico = servico;
        }

        [HttpPost]
        public IActionResult Criar([FromBody] UsuarioClasse dados)
        {
            _servico.Criar(dados);
            return Ok();
        }

        [HttpPut]
        public IActionResult Atualizar([FromBody] UsuarioClasse dados)
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
        public ActionResult<UsuarioClasse> ObterPorId(int id)
        {
            var usuarioClasse = _servico.ObterPorId(id);
            if (usuarioClasse == null)
            {
                return NotFound();
            }
            return Ok(usuarioClasse);
        }

        [HttpGet]
        public ActionResult<List<UsuarioClasse>> ObterTodas()
        {
            var usuarioClasses = _servico.ObterTodas();
            return Ok(usuarioClasses);
        }
    }
}
