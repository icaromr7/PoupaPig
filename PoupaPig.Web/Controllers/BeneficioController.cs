using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Beneficios.Servicos;

namespace PoupaPig.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BeneficioController : ControllerBase
    {
        private readonly ServicoBeneficio _servicobeneficio;

        public BeneficioController(ServicoBeneficio servicobeneficio)
        {
            _servicobeneficio = servicobeneficio;
        }

        [HttpGet ("banco")]
        public IActionResult ObterBeneficioBanco(int id)
        {
            var beneficio = _servicobeneficio.ObterBeneficioBanco (id);
            return Ok (beneficio);
        }

        [HttpGet("cartao")]
        public IActionResult ObterBeneficioCartao(int id)
        {
            var beneficio = _servicobeneficio.ObterBeneficioCartao(id);
            return Ok(beneficio);
        }

        [HttpGet("assinatura")]
        public IActionResult ObterBeneficioAssinatura(int id)
        {
            var beneficio = _servicobeneficio.ObterBeneficioAssinatura(id);
            return Ok(beneficio);
        }
    }
}
