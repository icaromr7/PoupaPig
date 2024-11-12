namespace PoupaPig.Dominio.Usuarios.Servicos
{
    public interface IRepositorioUsuario
    {
        List<Usuario> ObterTodas();
        Usuario ObterPorId(int id);
        void Criar(Usuario dados);
        void Atualizar(Usuario dados);
        void Excluir(int id);
    }
}
