using Microsoft.Extensions.DependencyInjection;
using PoupaPig.Dominio.Assinaturas.Servicos;
using PoupaPig.Dominio.Bancos.Servicos;
using PoupaPig.Dominio.Cartoes.Servicos;
using PoupaPig.Dominio.Categorias.Servicos;
using PoupaPig.Dominio.Classes.Servicos;
using PoupaPig.Dominio.Metas.Servicos;
using PoupaPig.Dominio.Questionarios.Servicos;
using PoupaPig.Dominio.Transacoes.Servicos;
using PoupaPig.Dominio.Usuarios.Servicos;
using PoupaPig.Infra.Assinaturas;
using PoupaPig.Infra.Bancos;
using PoupaPig.Infra.Cartoes;
using PoupaPig.Infra.Categorias;
using PoupaPig.Infra.Classes;
using PoupaPig.Infra.Metas;
using PoupaPig.Infra.Questionarios;
using PoupaPig.Infra.Transacoes;
using PoupaPig.Infra.Usuarios;

namespace PoupaPig.Dominio
{
    public static class ModuloDeInjecaoDominio
    {
        public static IServiceCollection RegistrarServicos(this IServiceCollection services)
        {
            services.AddScoped<ServicoAssinatura>();
            services.AddScoped<ServicoUsuarioAssinatura>();
            services.AddScoped<ServicoBanco>();
            services.AddScoped<ServicoUsuarioBanco>();
            services.AddScoped<ServicoCartao>();
            services.AddScoped<ServicoUsuarioCartao>();
            services.AddScoped<ServicoCategoriaPadrao>();
            services.AddScoped<ServicoCategoriaPersonalizada>();
            services.AddScoped<ServicoNomeCategoriaPadrao>();
            services.AddScoped<ServicoClasse>();
            services.AddScoped<ServicoUsuarioClasse>();
            services.AddScoped<ServicoMetaInvestimento>();
            services.AddScoped<ServicoNomeTipoInvestimento>();
            services.AddScoped<ServicoNomeTipoObjetivo>();
            services.AddScoped<ServicoQuestionario>();
            services.AddScoped<ServicoPeriodicidadeTransacao>();
            services.AddScoped<ServicoRecorrencia>();
            services.AddScoped<ServicoSentimentoTransacao>();
            services.AddScoped<ServicoSituacaoTransacao>();
            services.AddScoped<ServicoTipoPagamento>();
            services.AddScoped<ServicoTipoTransacao>();
            services.AddScoped<ServicoTransacao>();
            services.AddScoped<ServicoUsuario>();
            services.AddScoped<IRepositorioUsuario, RepositorioUsuario>();
            services.AddScoped<IRepositorioTransacao, RepositorioTransacao>();
            services.AddScoped<IRepositorioQuestionario, RepositorioQuestionario>();
            services.AddScoped<IRepositorioMetaInvestimento, RepositorioMetaInvestimento>();
            services.AddScoped<IRepositorioClasse, RepositorioClasse>();
            services.AddScoped<IRepositorioCategoriaPadrao, RepositorioCategoriaPadrao>();
            services.AddScoped<IRepositorioCategoriaPersonalizada, RepositorioCategoriaPersonalizada>();
            services.AddScoped<IRepositorioCartao, RepositorioCartao>();
            services.AddScoped<IRepositorioBanco, RepositorioBanco>();
            services.AddScoped<IRepositorioAssinatura, RepositorioAssinatura>();

            return services;
        }
    }
}
