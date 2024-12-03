namespace PoupaPig.Dominio.Bancos.Servicos
{
    public interface IRepositorioUsuarioBanco
    {
        List<UsuarioBanco> ObterTodas();
        List<UsuarioBanco> ObterPorId(int id);
        void Criar(UsuarioBanco dados);
        void Atualizar(UsuarioBanco dados);
        void Excluir(int id);
    }
}
