using PoupaPig.Dominio;

public class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Registrar os servi�os do dom�nio atrav�s do m�dulo de inje��o
        builder.Services.RegistrarServicos();

        // Adicionar controladores para a aplica��o
        builder.Services.AddControllers();

        // Adicionar servi�os do Swagger
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        // Adicionar o serviço de CORS
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowAll", policy =>
            {
                policy.AllowAnyOrigin() // Permitir qualquer origem
                      .AllowAnyMethod() // Permitir qualquer método (GET, POST, etc.)
                      .AllowAnyHeader(); // Permitir qualquer cabeçalho
            });
        });

        var app = builder.Build();

        // Configurar o pipeline de requisi��es HTTP
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection(); // For�ar uso de HTTPS

        // Usar o CORS antes de mapear os controllers
        app.UseCors("AllowAll");

        app.UseAuthorization(); // Ativar autoriza��o
        app.MapControllers(); // Mapear os controllers
        app.Run(); // Rodar a aplica��o
    }
}
