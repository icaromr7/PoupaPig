using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Categorias;
using PoupaPig.Dominio.Categorias.Servicos;
using System.Collections.Generic;

[ApiController]
[Route("api/[controller]")]
public class CategoriaPersonalizadaController : ControllerBase
{
    private readonly ServicoCategoriaPersonalizada _servicoCategoriaPersonalizada;

    public CategoriaPersonalizadaController(ServicoCategoriaPersonalizada servicoCategoriaPersonalizada)
    {
        _servicoCategoriaPersonalizada = servicoCategoriaPersonalizada;
    }

    [HttpPost]
    public IActionResult Criar([FromBody] CategoriaPersonalizada categoria)
    {
        _servicoCategoriaPersonalizada.Criar(categoria);
        return Ok("Categoria personalizada criada com sucesso!");
    }

    [HttpPut]
    public IActionResult Atualizar([FromBody] CategoriaPersonalizada categoria)
    {
        _servicoCategoriaPersonalizada.Atualizar(categoria);
        return Ok("Categoria personalizada atualizada com sucesso!");
    }

    [HttpDelete("{id}")]
    public IActionResult Excluir(int id)
    {
        _servicoCategoriaPersonalizada.Excluir(id);
        return Ok("Categoria personalizada excluída com sucesso!");
    }

    [HttpGet("{id}")]
    public IActionResult ObterPorId(int id)
    {
        var categoria = _servicoCategoriaPersonalizada.ObterPorId(id);
        if (categoria == null) return NotFound();
        return Ok(categoria);
    }

    [HttpGet]
    public IActionResult ObterTodas()
    {
        List<CategoriaPersonalizada> categorias = _servicoCategoriaPersonalizada.ObterTodas();
        return Ok(categorias);
    }
}
