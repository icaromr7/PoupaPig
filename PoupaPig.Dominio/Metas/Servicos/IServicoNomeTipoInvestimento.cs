namespace PoupaPig.Dominio.Metas.Servicos
{
    public interface IServicoNomeTipoInvestimento
    {
        List<NomeTipoInvestimento> ObterTodas();
        NomeTipoInvestimento ObterPorId(int id);
        void Criar(NomeTipoInvestimento dados);
        void Atualizar(NomeTipoInvestimento dados);
        void Excluir(int id);
    }
}
