using PoupaPig.Dominio.Usuarios;

namespace PoupaPig.Infra
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // DbSet para cada entidade que você deseja mapear
        public DbSet<Usuario> Usuarios { get; set; }

        // Configurações adicionais podem ser definidas aqui
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.ToTable("usuarios");             
            });
        }
    }
}
