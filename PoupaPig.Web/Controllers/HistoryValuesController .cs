using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Entidades;
using PoupaPig.Dominio.Service;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PoupaPig.Web.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class HistoryValuesController : ControllerBase
    {
        private readonly ServiceHistoryValues _serviceHistoryValues;

        public HistoryValuesController(ServiceHistoryValues serviceHistoryValues)
        {
            _serviceHistoryValues = serviceHistoryValues;
        }

        // GET: api/historyvalues
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HistoryValues>>> GetHistoryValues()
        {
            var historyValues = await _serviceHistoryValues.ObterTodosAsync();
            return Ok(historyValues);
        }

        // GET: api/historyvalues/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<HistoryValues>> GetHistoryValue(int id)
        {
            var historyValue = await _serviceHistoryValues.ObterPorIdAsync(id);
            if (historyValue == null)
            {
                return NotFound();
            }
            return Ok(historyValue);
        }

        // POST: api/historyvalues
        [HttpPost]
        public async Task<ActionResult<HistoryValues>> PostHistoryValue(HistoryValues historyValue)
        {
            var result = await _serviceHistoryValues.AdicionarAsync(historyValue);
            if (!result)
            {
                return BadRequest();
            }

            return CreatedAtAction(nameof(GetHistoryValue), new { id = historyValue.ID_Value_History }, historyValue);
        }

        // PUT: api/historyvalues/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHistoryValue(int id, HistoryValues historyValue)
        {
            if (id != historyValue.ID_Value_History)
            {
                return BadRequest();
            }

            var result = await _serviceHistoryValues.AtualizarAsync(historyValue);
            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }

        // DELETE: api/historyvalues/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHistoryValue(int id)
        {
            var result = await _serviceHistoryValues.RemoverAsync(id);
            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }
    }

}
