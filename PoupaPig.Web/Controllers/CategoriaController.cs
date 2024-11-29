using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Categorias;
using PoupaPig.Dominio.Categorias.Servicos;


[ApiController]
[Route("api/[controller]")]
public class CategoriaController : ControllerBase
{
    private readonly ServicoCategoria _servicoCategoria;

    public CategoriaController(ServicoCategoria servicoCategoria)
    {
        _servicoCategoria = servicoCategoria;
    }

    // Endpoint para criar uma nova categoria personalizada
    [HttpPost]
    public IActionResult Criar([FromBody] Categoria categoria)
    {
        try
        {
            _servicoCategoria.Criar(categoria);
            return Ok("Categoria personalizada criada com sucesso!");
        }
        catch (Exception ex)
        {
            return BadRequest($"Erro ao criar categoria personalizada: {ex.Message}");
        }
    }

    // Endpoint para atualizar uma categoria personalizada existente
    [HttpPut]
    public IActionResult Atualizar([FromBody] Categoria categoria)
    {
        try
        {
            _servicoCategoria.Atualizar(categoria);
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
            _servicoCategoria.Excluir(id);
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
        var categoria = _servicoCategoria.ObterPorId(id);
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
        var categorias = _servicoCategoria.ObterTodas(usuarioId);
        return Ok(categorias);
    }
}

