using Microsoft.AspNetCore.Mvc;
using PoupaPig.Dominio.Usuarios.Servicos;
using PoupaPig.Dominio.Usuarios;

namespace PoupaPig.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ServicoLogin _servicoLogin;

        public LoginController(ServicoLogin servicoLogin)
        {
            _servicoLogin = servicoLogin;
        }

        [HttpPost]
        public IActionResult Login([FromBody] Login login)
        {
            try
            {
                var usuario = _servicoLogin.RealizarLogin(login);

                // Retorna o usuário autenticado (apenas como exemplo, pode ser retornado um token JWT, etc.)
                return Ok(usuario);
            }
            catch (Exception)
            {
                // Caso o login falhe, retorna uma mensagem de erro
                throw new Exception("Senha ou usuário inválidos.");
            }
        }
    }

}
