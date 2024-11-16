namespace PoupaPig.Dominio.Classes.Servicos
{
    public interface IRepositorioUsuarioClasse
    {
        List<UsuarioClasse> ObterTodas();
        UsuarioClasse ObterPorId(int id);
        void Criar(UsuarioClasse dados);
        void Atualizar(UsuarioClasse dados);
        void Excluir(int id);
    }
}
