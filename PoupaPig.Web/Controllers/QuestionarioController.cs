using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Questionarios;
using PoupaPig.Dominio.Questionarios.Servicos;

[ApiController]
[Route("api/[controller]")]
public class QuestionarioController : ControllerBase
{
    private readonly ServicoQuestionario _servicoQuestionario;

    // Injeção de dependência do serviço
    public QuestionarioController(ServicoQuestionario servicoQuestionario)
    {
        _servicoQuestionario = servicoQuestionario;
    }

    // Endpoint para criar um questionário
    [HttpPost]
    public IActionResult Criar([FromBody] Questionario dados)
    {
        // Chama o serviço para criar o questionário
        _servicoQuestionario.Criar(dados);
        return Ok("Questionário criado com sucesso!");
    }

    // Endpoint para obter um questionário por ID
    [HttpGet("{id}")]
    public IActionResult ObterPorId(int id)
    {
        // Chama o serviço para buscar o questionário
        var questionario = _servicoQuestionario.ObterPorId(id);
        if (questionario == null)
            return NotFound("Questionário não encontrado.");
        return Ok(questionario);
    }

    // Endpoint para obter todos os questionários
    [HttpGet]
    public IActionResult ObterTodos()
    {
        // Chama o serviço para buscar todos os questionários
        var questionarios = _servicoQuestionario.ObterTodas();
        return Ok(questionarios);
    }

    // Endpoint para excluir um questionário por ID
    [HttpDelete("{id}")]
    public IActionResult Excluir(int id)
    {
        // Chama o serviço para excluir o questionário
        _servicoQuestionario.Excluir(id);
        return Ok("Questionário excluído com sucesso!");
    }
}
