namespace PoupaPig.Dominio.Bancos.Servicos
{
    public interface IRepositorioUsuarioBanco
    {
        List<UsuarioBanco> ObterTodas();
        UsuarioBanco ObterPorId(int id);
        void Criar(UsuarioBanco dados);
        void Atualizar(UsuarioBanco dados);
        void Excluir(int id);
    }
}
