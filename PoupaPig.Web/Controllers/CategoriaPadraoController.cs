using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Categorias;
using PoupaPig.Dominio.Categorias.Servicos;
using System.Collections.Generic;

[ApiController]
[Route("api/[controller]")]
public class CategoriaPadraoController : ControllerBase
{
    private readonly ServicoCategoriaPadrao _servicoCategoriaPadrao;

    public CategoriaPadraoController(ServicoCategoriaPadrao servicoCategoriaPadrao)
    {
        _servicoCategoriaPadrao = servicoCategoriaPadrao;
    }

    [HttpPost]
    public IActionResult Criar([FromBody] CategoriaPadrao categoria)
    {
        _servicoCategoriaPadrao.Criar(categoria);
        return Ok("Categoria criada com sucesso!");
    }

    [HttpPut]
    public IActionResult Atualizar([FromBody] CategoriaPadrao categoria)
    {
        _servicoCategoriaPadrao.Atualizar(categoria);
        return Ok("Categoria atualizada com sucesso!");
    }

    [HttpDelete("{id}")]
    public IActionResult Excluir(int id)
    {
        _servicoCategoriaPadrao.Excluir(id);
        return Ok("Categoria excluída com sucesso!");
    }

    [HttpGet("{id}")]
    public IActionResult ObterPorId(int id)
    {
        var categoria = _servicoCategoriaPadrao.ObterPorId(id);
        if (categoria == null) return NotFound();
        return Ok(categoria);
    }

    [HttpGet]
    public IActionResult ObterTodas()
    {
        List<CategoriaPadrao> categorias = _servicoCategoriaPadrao.ObterTodas();
        return Ok(categorias);
    }
}
