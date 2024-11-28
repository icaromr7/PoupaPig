using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Categorias;
using PoupaPig.Dominio.Categorias.Servicos;

namespace PoupaPig.Web.Controllers.Auxiliares.Categorias
{
    [ApiController]
    [Route("api/[controller]")]
    public class NomeCategoriaPadraoController : ControllerBase
    {
        private readonly ServicoNomeCategoriaPadrao _servico;

        // Injetando o serviço através do construtor
        public NomeCategoriaPadraoController(ServicoNomeCategoriaPadrao servico)
        {
            _servico = servico;
        }

        [HttpPost]
        public IActionResult Criar([FromBody] NomeCategoriaPadrao dados)
        {
            _servico.Criar(dados);
            return Ok();
        }

        [HttpPut]
        public IActionResult Atualizar([FromBody] NomeCategoriaPadrao dados)
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
        public ActionResult<NomeCategoriaPadrao> ObterPorId(int id)
        {
            var categoria = _servico.ObterPorId(id);
            if (categoria == null)
            {
                return NotFound();
            }
            return Ok(categoria);
        }

        [HttpGet]
        public ActionResult<List<NomeCategoriaPadrao>> ObterTodas()
        {
            var categorias = _servico.ObterTodas();
            return Ok(categorias);
        }
    }
}
