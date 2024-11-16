using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Cartoes;
using PoupaPig.Dominio.Cartoes.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Web.Controllers.Auxiliares.Cartoes
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioCartaoController : ControllerBase
    {
        private readonly ServicoUsuarioCartao _servico;

        // Injetando o serviço através do construtor
        public UsuarioCartaoController(ServicoUsuarioCartao servico)
        {
            _servico = servico;
        }

        [HttpPost]
        public IActionResult Criar([FromBody] UsuarioCartao dados)
        {
            _servico.Criar(dados);
            return Ok();
        }

        [HttpPut]
        public IActionResult Atualizar([FromBody] UsuarioCartao dados)
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
        public ActionResult<UsuarioCartao> ObterPorId(int id)
        {
            var usuarioCartao = _servico.ObterPorId(id);
            if (usuarioCartao == null)
            {
                return NotFound();
            }
            return Ok(usuarioCartao);
        }

        [HttpGet]
        public ActionResult<List<UsuarioCartao>> ObterTodas()
        {
            var usuariosCartao = _servico.ObterTodas();
            return Ok(usuariosCartao);
        }
    }
}
