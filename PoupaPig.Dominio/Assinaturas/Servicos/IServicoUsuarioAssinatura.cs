namespace PoupaPig.Dominio.Assinaturas.Servicos
{
    public interface IServicoUsuarioAssinatura
    {
        List<UsuarioAssinatura> ObterTodas();
        UsuarioAssinatura ObterPorId(int id);
        void Criar(UsuarioAssinatura dados);
        void Atualizar(UsuarioAssinatura dados);
        void Excluir(int id);
    }
}
