namespace PoupaPig.Dominio.Assinaturas.Servicos
{
    public interface IServicoAssinatura
    {
        List<Assinatura> ObterTodas();
        Assinatura ObterPorId(int id);
        void Criar(Assinatura dados);
        void Atualizar(Assinatura dados);
        void Excluir(int id);
    }
}
