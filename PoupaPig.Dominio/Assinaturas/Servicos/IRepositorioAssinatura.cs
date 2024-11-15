namespace PoupaPig.Dominio.Assinaturas.Servicos
{
    public interface IRepositorioAssinatura
    {
        List<assinatura> ObterTodas();
        assinatura ObterPorId(int id);
        void Criar(assinatura dados);
        void Atualizar(assinatura dados);
        void Excluir(int id);
    }
}
