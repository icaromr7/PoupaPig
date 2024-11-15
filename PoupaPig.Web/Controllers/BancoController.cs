using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Bancos;
using PoupaPig.Dominio.Bancos.Servicos;

[ApiController]
[Route("api/[controller]")]
public class BancoController : ControllerBase
{
    private readonly ServicoBanco _servicoBanco;

    public BancoController(ServicoBanco servicoBanco)
    {
        _servicoBanco = servicoBanco;
    }

    [HttpPost]
    public IActionResult Criar([FromBody] Banco banco)
    {
        _servicoBanco.Criar(banco);
        return Ok("banco criado com sucesso!");
    }

    [HttpPut]
    public IActionResult Atualizar([FromBody] Banco banco)
    {
        _servicoBanco.Atualizar(banco);
        return Ok("banco atualizado com sucesso!");
    }

    [HttpDelete("{id}")]
    public IActionResult Excluir(int id)
    {
        _servicoBanco.Excluir(id);
        return Ok("banco excluído com sucesso!");
    }

    [HttpGet("{id}")]
    public IActionResult ObterPorId(int id)
    {
        var banco = _servicoBanco.ObterPorId(id);
        if (banco == null) return NotFound();
        return Ok(banco);
    }

    [HttpGet]
    public IActionResult ObterTodas()
    {
        List<Banco> bancos = _servicoBanco.ObterTodas();
        return Ok(bancos);
    }
}
