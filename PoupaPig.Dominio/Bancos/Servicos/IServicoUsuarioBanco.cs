namespace PoupaPig.Dominio.Bancos.Servicos
{
    public interface IServicoUsuarioBanco
    {
        List<UsuarioBanco> ObterTodas();
        UsuarioBanco ObterPorId(int id);
        void Criar(UsuarioBanco dados);
        void Atualizar(UsuarioBanco dados);
        void Excluir(int id);
    }
}
