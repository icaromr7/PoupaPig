using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Entidades;
using PoupaPig.Dominio.Service;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PoupaPig.Web.Controllers
{
    

    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : Controller
    {
        private readonly ServiceValues _serviceValues;

        public ValuesController(ServiceValues serviceValues)
        {
            _serviceValues = serviceValues;
        }

        // GET: api/values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Values>>> GetValues()
        {
            var values = await _serviceValues.ObterTodosAsync();
            return Ok(values);
        }

        // GET: api/values/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Values>> GetValue(int id)
        {
            var value = await _serviceValues.ObterPorIdAsync(id);
            if (value == null)
            {
                return NotFound();
            }
            return Ok(value);
        }

        // POST: api/values
        [HttpPost]
        public async Task<ActionResult<Values>> PostValue(Values value)
        {
            var result = await _serviceValues.AdicionarAsync(value);
            if (!result)
            {
                return BadRequest();
            }

            return CreatedAtAction(nameof(GetValue), new { id = value.ID_Value }, value);
        }

        // PUT: api/values/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutValue(int id, Values value)
        {
            if (id != value.ID_Value)
            {
                return BadRequest();
            }

            var result = await _serviceValues.AtualizarAsync(value);
            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }

        // DELETE: api/values/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteValue(int id)
        {
            var result = await _serviceValues.RemoverAsync(id);
            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }
    }

}
