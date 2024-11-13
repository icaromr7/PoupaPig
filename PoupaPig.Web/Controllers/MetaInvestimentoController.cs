using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Metas;
using PoupaPig.Dominio.Metas.Servicos;

[ApiController]
[Route("api/[controller]")]
public class MetaInvestimentoController : ControllerBase
{
    private readonly ServicoMetaInvestimento _servicoMeta;

    public MetaInvestimentoController(ServicoMetaInvestimento servicoMeta)
    {
        _servicoMeta = servicoMeta;
    }

    [HttpPost]
    public IActionResult Criar([FromBody] MetaInvestimento meta)
    {
        _servicoMeta.Criar(meta);
        return Ok("Meta de investimento criada com sucesso!");
    }

    [HttpPut]
    public IActionResult Atualizar([FromBody] MetaInvestimento meta)
    {
        _servicoMeta.Atualizar(meta);
        return Ok("Meta de investimento atualizada com sucesso!");
    }

    [HttpDelete("{id}")]
    public IActionResult Excluir(int id)
    {
        _servicoMeta.Excluir(id);
        return Ok("Meta de investimento excluída com sucesso!");
    }

    [HttpGet("{id}")]
    public IActionResult ObterPorId(int id)
    {
        var meta = _servicoMeta.ObterPorId(id);
        if (meta == null) return NotFound();
        return Ok(meta);
    }

    [HttpGet]
    public IActionResult ObterTodas()
    {
        var metas = _servicoMeta.ObterTodas();
        return Ok(metas);
    }
}
