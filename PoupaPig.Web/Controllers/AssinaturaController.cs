using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Assinaturas;
using PoupaPig.Dominio.Assinaturas.Servicos;
using System.Collections.Generic;

[ApiController]
[Route("api/[controller]")]
public class AssinaturaController : ControllerBase
{
    private readonly ServicoAssinatura _servicoAssinatura;

    public AssinaturaController(ServicoAssinatura servicoAssinatura)
    {
        _servicoAssinatura = servicoAssinatura;
    }

    [HttpPost]
    public IActionResult Criar([FromBody] Assinatura assinatura)
    {
        _servicoAssinatura.Criar(assinatura);
        return Ok("Assinatura criada com sucesso!");
    }

    [HttpPut]
    public IActionResult Atualizar([FromBody] Assinatura assinatura)
    {
        _servicoAssinatura.Atualizar(assinatura);
        return Ok("Assinatura atualizada com sucesso!");
    }

    [HttpDelete("{id}")]
    public IActionResult Excluir(int id)
    {
        _servicoAssinatura.Excluir(id);
        return Ok("Assinatura excluída com sucesso!");
    }

    [HttpGet("{id}")]
    public IActionResult ObterPorId(int id)
    {
        var assinatura = _servicoAssinatura.ObterPorId(id);
        if (assinatura == null) return NotFound();
        return Ok(assinatura);
    }

    [HttpGet]
    public IActionResult ObterTodas()
    {
        List<Assinatura> assinaturas = _servicoAssinatura.ObterTodas();
        return Ok(assinaturas);
    }
}
