using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Metas;
using PoupaPig.Dominio.Metas.Servicos;

namespace PoupaPig.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MetaInvestimentoController : ControllerBase
    {
        private readonly ServicoMetaInvestimento _servicoMetaInvestimento;
        private readonly ServicoMetaInvestimentoDetalhes _servicoMetaInvestimentoDetalhes;

        // Injeção de dependência dos serviços de MetaInvestimento e MetaInvestimentoDetalhes
        public MetaInvestimentoController(ServicoMetaInvestimento servicoMetaInvestimento, ServicoMetaInvestimentoDetalhes servicoMetaInvestimentoDetalhes)
        {
            _servicoMetaInvestimento = servicoMetaInvestimento;
            _servicoMetaInvestimentoDetalhes = servicoMetaInvestimentoDetalhes;
        }

        [HttpPost]
        public IActionResult Criar([FromBody] MetaInvestimento meta)
        {
            _servicoMetaInvestimento.Criar(meta);
            return Ok("Meta de investimento criada com sucesso!");
        }

        [HttpPut]
        public IActionResult Atualizar([FromBody] MetaInvestimento meta)
        {
            _servicoMetaInvestimento.Atualizar(meta);
            return Ok("Meta de investimento atualizada com sucesso!");
        }

        [HttpDelete("{id}")]
        public IActionResult Excluir(int id)
        {
            _servicoMetaInvestimento.Excluir(id);
            return Ok("Meta de investimento excluída com sucesso!");
        }

        [HttpGet("{id}")]
        public IActionResult ObterPorId(int id)
        {
            var meta = _servicoMetaInvestimento.ObterPorId(id);
            if (meta == null) return NotFound();
            return Ok(meta);
        }

        [HttpGet]
        public IActionResult ObterTodas()
        {
            var metas = _servicoMetaInvestimento.ObterTodas();
            return Ok(metas);
        }

        // Novo endpoint para obter detalhes do objetivo (meta de investimento)
        [HttpGet("detalhes/{id}")]
        public IActionResult ObterDetalhesObjetivo(int id)
        {
            try
            {
                // Chama o serviço para obter os detalhes da meta de investimento
                var detalhes = _servicoMetaInvestimentoDetalhes.ObterDetalhesObjetivo(id);
                return Ok(detalhes);
            }
            catch (ArgumentException ex)
            {
                // Retorna uma resposta 404 se a meta de investimento não for encontrada
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                // Retorna uma resposta 500 em caso de erro inesperado
                return StatusCode(500, "Erro ao processar a requisição: " + ex.Message);
            }
        }
    }
}
