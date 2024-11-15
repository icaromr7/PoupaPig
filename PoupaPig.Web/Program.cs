using PoupaPig.Dominio;

public class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Registrar os serviços do domínio através do módulo de injeção
        builder.Services.RegistrarServicos();

        // Adicionar controladores para a aplicação
        builder.Services.AddControllers();

        // Adicionar serviços do Swagger
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();

        // Configurar o pipeline de requisições HTTP
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection(); // Forçar uso de HTTPS
        app.UseAuthorization(); // Ativar autorização
        app.MapControllers(); // Mapear os controllers
        app.Run(); // Rodar a aplicação
    }
}
