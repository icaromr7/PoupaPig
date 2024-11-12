using PoupaPig.Dominio;

var builder = WebApplication.CreateBuilder(args);

// Registrar os serviços do domínio através do módulo de injeção
builder.Services.RegistrarServicos();

// Adicionar controladores para a aplicação
builder.Services.AddControllers();

var app = builder.Build();

// Configurar o pipeline de requisições HTTP

app.UseHttpsRedirection(); // Forçar uso de HTTPS

app.UseAuthorization(); // Ativar autorização

app.MapControllers(); // Mapear os controllers

app.Run(); // Rodar a aplicação

