using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Categorias;
using PoupaPig.Dominio.Categorias.Servicos;


[ApiController]
[Route("api/[controller]")]
public class CategoriaPersonalizadaController : ControllerBase
{
    private readonly ServicoCategoriaPersonalizada _servicoCategoriaPersonalizada;

    public CategoriaPersonalizadaController(ServicoCategoriaPersonalizada servicoCategoriaPersonalizada)
    {
        _servicoCategoriaPersonalizada = servicoCategoriaPersonalizada;
    }

    // Endpoint para criar uma nova categoria personalizada
    [HttpPost]
    public IActionResult Criar([FromBody] CategoriaPersonalizada categoria)
    {
        try
        {
            _servicoCategoriaPersonalizada.Criar(categoria);
            return Ok("Categoria personalizada criada com sucesso!");
        }
        catch (Exception ex)
        {
            return BadRequest($"Erro ao criar categoria personalizada: {ex.Message}");
        }
    }

    // Endpoint para atualizar uma categoria personalizada existente
    [HttpPut]
    public IActionResult Atualizar([FromBody] CategoriaPersonalizada categoria)
    {
        try
        {
            _servicoCategoriaPersonalizada.Atualizar(categoria);
            return Ok("Categoria personalizada atualizada com sucesso!");
        }
        catch (Exception ex)
        {
            return BadRequest($"Erro ao atualizar categoria personalizada: {ex.Message}");
        }
    }

    // Endpoint para excluir uma categoria personalizada pelo ID
    [HttpDelete("{id}")]
    public IActionResult Excluir(int id)
    {
        try
        {
            _servicoCategoriaPersonalizada.Excluir(id);
            return Ok("Categoria personalizada excluída com sucesso!");
        }
        catch (Exception ex)
        {
            return BadRequest($"Erro ao excluir categoria personalizada: {ex.Message}");
        }
    }

    // Endpoint para obter uma categoria personalizada pelo ID
    [HttpGet("{id}")]
    public IActionResult ObterPorId(int id)
    {
        var categoria = _servicoCategoriaPersonalizada.ObterPorId(id);
        if (categoria == null)
        {
            return NotFound("Categoria personalizada não encontrada.");
        }

        return Ok(categoria);
    }

    // Endpoint para obter todas as categorias personalizadas
    [HttpGet("usuario/{usuarioId}")]
    public IActionResult ObterTodas(int usuarioId)
    {
        var categorias = _servicoCategoriaPersonalizada.ObterTodas(usuarioId);
        return Ok(categorias);
    }
}

