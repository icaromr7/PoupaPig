using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Cartoes;
using PoupaPig.Dominio.Cartoes.Servicos;
using System.Collections.Generic;

[ApiController]
[Route("api/[controller]")]
public class CartaoController : ControllerBase
{
    private readonly ServicoCartao _servicoCartao;

    public CartaoController(ServicoCartao servicoCartao)
    {
        _servicoCartao = servicoCartao;
    }

    [HttpPost]
    public IActionResult Criar([FromBody] Cartao cartao)
    {
        _servicoCartao.Criar(cartao);
        return Ok("Cartão criado com sucesso!");
    }

    [HttpPut]
    public IActionResult Atualizar([FromBody] Cartao cartao)
    {
        _servicoCartao.Atualizar(cartao);
        return Ok("Cartão atualizado com sucesso!");
    }

    [HttpDelete("{id}")]
    public IActionResult Excluir(int id)
    {
        _servicoCartao.Excluir(id);
        return Ok("Cartão excluído com sucesso!");
    }

    [HttpGet("{id}")]
    public IActionResult ObterPorId(int id)
    {
        var cartao = _servicoCartao.ObterPorId(id);
        if (cartao == null) return NotFound();
        return Ok(cartao);
    }

    [HttpGet]
    public IActionResult ObterTodas()
    {
        List<Cartao> cartoes = _servicoCartao.ObterTodas();
        return Ok(cartoes);
    }
}
