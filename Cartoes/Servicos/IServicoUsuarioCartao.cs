namespace PoupaPig.Dominio.Cartoes.Servicos
{
    public interface IServicoUsuarioCartao
    {
        List<UsuarioCartao> ObterTodas();
        UsuarioCartao ObterPorId(int id);
        void Criar(UsuarioCartao dados);
        void Atualizar(UsuarioCartao dados);
        void Excluir(int id);
    }
}
