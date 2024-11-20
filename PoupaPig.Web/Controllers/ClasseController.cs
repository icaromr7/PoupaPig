using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Classes;
using PoupaPig.Dominio.Classes.Servicos;
using PoupaPig.Infra.Classes;
using System.Collections.Generic;

[ApiController]
[Route("api/[controller]")]
public class ClasseController : ControllerBase
{
    private readonly ServicoClasse _servicoClasse;

    public ClasseController(ServicoClasse servicoClasse)
    {
        _servicoClasse = servicoClasse;
    }

    [HttpPost]
    public IActionResult Criar([FromBody] Classe classe)
    {
        _servicoClasse.Criar(classe);
        return Ok("Classe criada com sucesso!");
    }

    [HttpPut]
    public IActionResult Atualizar([FromBody] Classe classe)
    {
        _servicoClasse.Atualizar(classe);
        return Ok("Classe atualizada com sucesso!");
    }

    [HttpDelete("{id}")]
    public IActionResult Excluir(int id)
    {
        _servicoClasse.Excluir(id);
        return Ok("Classe excluída com sucesso!");
    }

    [HttpGet("{id}")]
    public IActionResult ObterPorId(int id)
    {
        var classe = _servicoClasse.ObterPorId(id);
        if (classe == null) return NotFound();
        return Ok(classe);
    }

    [HttpGet]
    public IActionResult ObterTodas()
    {
        List<Classe> classes = _servicoClasse.ObterTodas();
        return Ok(classes);
    }

    [HttpGet("usuario/{usuarioId}")]
    public IActionResult ObterClassesPorUsuario(int usuarioId)
    {
        var classes = _servicoClasse.ObterClassesPorUsuario(usuarioId);
        return Ok(classes);
    }
}
