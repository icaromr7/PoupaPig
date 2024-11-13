using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Transacoes;
using PoupaPig.Dominio.Transacoes.Servicos;

[ApiController]
[Route("api/[controller]")]
public class TransacaoController : ControllerBase
{
    private readonly ServicoTransacao _servicoTransacao;

    // Injeção de dependência do serviço de transação
    public TransacaoController(ServicoTransacao servicoTransacao)
    {
        _servicoTransacao = servicoTransacao;
    }

    // Endpoint para criar uma nova transação
    [HttpPost]
    public IActionResult Criar([FromBody] Transacao transacao)
    {
        if (transacao == null)
        {
            return BadRequest("Dados da transação são inválidos.");
        }

        // Chama o serviço para criar a transação
        _servicoTransacao.Criar(transacao);
        return Ok("Transação criada com sucesso!");
    }

    // Endpoint para obter uma transação pelo ID
    [HttpGet("{id}")]
    public IActionResult ObterPorId(int id)
    {
        var transacao = _servicoTransacao.ObterPorId(id);
        if (transacao == null)
            return NotFound("Transação não encontrada.");

        return Ok(transacao);
    }

    // Endpoint para listar todas as transações (opcional)
    [HttpGet]
    public IActionResult ObterTodas()
    {
        var transacoes = _servicoTransacao.ObterTodas();
        return Ok(transacoes);
    }
}
