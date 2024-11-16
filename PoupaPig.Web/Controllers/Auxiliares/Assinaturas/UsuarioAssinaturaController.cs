using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Assinaturas;
using PoupaPig.Dominio.Assinaturas.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Web.Controllers.Auxiliares.Assinaturas
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioAssinaturaController : ControllerBase
    {
        private readonly ServicoUsuarioAssinatura _servico;

        // Injetando o serviço diretamente
        public UsuarioAssinaturaController(ServicoUsuarioAssinatura servico)
        {
            _servico = servico;
        }

        [HttpPost]
        public IActionResult Criar([FromBody] UsuarioAssinatura dados)
        {
            _servico.Criar(dados);
            return Ok("Usuário Assinatura criado com sucesso!");
        }

        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, [FromBody] UsuarioAssinatura dados)
        {
            dados.id = id;
            _servico.Atualizar(dados);
            return Ok("Usuário Assinatura atualizado com sucesso!");
        }

        [HttpDelete("{id}")]
        public IActionResult Excluir(int id)
        {
            _servico.Excluir(id);
            return Ok("Usuário Assinatura excluído com sucesso!");
        }

        [HttpGet("{id}")]
        public ActionResult<UsuarioAssinatura> ObterPorId(int id)
        {
            var usuarioAssinatura = _servico.ObterPorId(id);
            if (usuarioAssinatura == null)
                return NotFound("Usuário Assinatura não encontrado");

            return Ok(usuarioAssinatura);
        }

        [HttpGet]
        public ActionResult<List<UsuarioAssinatura>> ObterTodas()
        {
            return Ok(_servico.ObterTodas());
        }
    }
}
