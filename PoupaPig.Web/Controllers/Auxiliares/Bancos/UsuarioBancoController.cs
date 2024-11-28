using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Bancos;
using PoupaPig.Dominio.Bancos.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Web.Controllers.Auxiliares.Bancos
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioBancoController : ControllerBase
    {
        private readonly ServicoUsuarioBanco _servico;

        // Injetando o serviço através do construtor
        public UsuarioBancoController(ServicoUsuarioBanco servico)
        {
            _servico = servico;
        }

        [HttpPost]
        public IActionResult Criar([FromBody] UsuarioBanco dados)
        {
            _servico.Criar(dados);
            return Ok();
        }

        [HttpPut]
        public IActionResult Atualizar([FromBody] UsuarioBanco dados)
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
        public ActionResult<UsuarioBanco> ObterPorId(int id)
        {
            var usuarioBanco = _servico.ObterPorId(id);
            if (usuarioBanco == null)
            {
                return NotFound();
            }
            return Ok(usuarioBanco);
        }

        [HttpGet]
        public ActionResult<List<UsuarioBanco>> ObterTodas()
        {
            var usuariosBanco = _servico.ObterTodas();
            return Ok(usuariosBanco);
        }
    }
}
