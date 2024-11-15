using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Usuarios;
using PoupaPig.Dominio.Usuarios.Servicos;

[ApiController]
[Route("api/[controller]")]
public class UsuarioController : ControllerBase
{
    private readonly ServicoUsuario _servicoUsuario;

    public UsuarioController(ServicoUsuario servicoUsuario)
    {
        _servicoUsuario = servicoUsuario;
    }

    // Endpoint para criar um novo usuário
    [HttpPost]
    public IActionResult CriarUsuario([FromBody] Usuario dados)
    {
        if (dados == null)
        {
            return BadRequest("Dados do usuário são inválidos.");
        }

        _servicoUsuario.Criar(dados);
        return Ok("Usuário criado com sucesso!");
    }

    // Endpoint para obter um usuário por ID
    [HttpGet("{id}")]
    public IActionResult ObterUsuarioPorId(int id)
    {
        var usuario = _servicoUsuario.ObterPorId(id);
        if (usuario == null)
        {
            return NotFound("Usuário não encontrado.");
        }
        return Ok(usuario);
    }

    // Endpoint para atualizar um usuário
    [HttpPut("{id}")]
    public IActionResult AtualizarUsuario(int id, [FromBody] Usuario dados)
    {
        if (dados == null || id != dados.id)
        {
            return BadRequest("Dados inválidos ou ID não corresponde.");
        }

        _servicoUsuario.Atualizar(dados);
        return Ok("Usuário atualizado com sucesso!");
    }

    // Endpoint para excluir um usuário
    [HttpDelete("{id}")]
    public IActionResult ExcluirUsuario(int id)
    {
        var usuario = _servicoUsuario.ObterPorId(id);
        if (usuario == null)
        {
            return NotFound("Usuário não encontrado.");
        }

        _servicoUsuario.Excluir(id);
        return Ok("Usuário excluído com sucesso!");
    }

    // Endpoint para obter todos os usuários
    [HttpGet]
    public IActionResult ObterTodosUsuarios()
    {
        var usuarios = _servicoUsuario.ObterTodas();
        return Ok(usuarios);
    }
}
