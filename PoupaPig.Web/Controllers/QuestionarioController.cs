using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Classes.Servicos;
using PoupaPig.Dominio.Questionarios;
using PoupaPig.Dominio.Questionarios.Servicos;
using System;

namespace PoupaPig.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionarioController : ControllerBase
    {
        private readonly ServicoQuestionario _servicoQuestionario;
        private readonly ServicoUsuarioClasse _servico;


        // Injeção de dependência do serviço
        public QuestionarioController(ServicoQuestionario servicoQuestionario, ServicoUsuarioClasse servico)
        {
            _servicoQuestionario = servicoQuestionario;
            _servico = servico;
        }

        // Endpoint para criar um questionário
        [HttpPost]
        public IActionResult Criar([FromBody] Questionario dados)
        {
            if (dados == null)
            {
                return BadRequest("Os dados do questionário são inválidos.");
            }

            try
            {
                // Chama o serviço para criar o questionário
                _servicoQuestionario.Criar(dados);
                _servico.DefinirClasseSocial(dados);
                return Ok("Questionário criado com sucesso!");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao criar o questionário: {ex.Message}");
            }
        }

        // Endpoint para obter um questionário por ID
        [HttpGet("{id}")]
        public IActionResult ObterPorId(int id)
        {
            try
            {
                var questionario = _servicoQuestionario.ObterPorId(id);
                if (questionario == null)
                    return Ok(new Questionario());

                return Ok(questionario);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao buscar o questionário: {ex.Message}");
            }
        }

        // Endpoint para obter todos os questionários
        [HttpGet]
        public IActionResult ObterTodos()
        {
            try
            {
                var questionarios = _servicoQuestionario.ObterTodas();
                return Ok(questionarios);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao buscar os questionários: {ex.Message}");
            }
        }

        // Endpoint para atualizar um questionário
        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, [FromBody] Questionario dados)
        {
            if (dados == null || dados.id != id)
            {
                return BadRequest("Dados do questionário são inválidos.");
            }

            try
            {
                var existente = _servicoQuestionario.ObterPorId(id);
                if (existente == null)
                    return NotFound("Questionário não encontrado para atualização.");

                _servicoQuestionario.Atualizar(dados);
                _servico.DefinirClasseSocial(dados);
                return Ok("Questionário atualizado com sucesso!");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao atualizar o questionário: {ex.Message}");
            }
        }

        // Endpoint para excluir um questionário por ID
        [HttpDelete("{id}")]
        public IActionResult Excluir(int id)
        {
            try
            {
                var questionario = _servicoQuestionario.ObterPorId(id);
                if (questionario == null)
                    return NotFound("Questionário não encontrado para exclusão.");

                _servicoQuestionario.Excluir(id);
                return Ok("Questionário excluído com sucesso!");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao excluir o questionário: {ex.Message}");
            }
        }

        [HttpGet("usuario/{id}")]
        public IActionResult ObterPorUsuarioId(int id)
        {
            try
            {
                var questionario = _servicoQuestionario.ObterPorUsuarioId(id);
                if (questionario == null)
                    return Ok(new Questionario());

                return Ok(questionario);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro ao buscar o questionário: {ex.Message}");
            }
        }

    }
}
