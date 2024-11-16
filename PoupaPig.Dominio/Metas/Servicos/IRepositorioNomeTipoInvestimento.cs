namespace PoupaPig.Dominio.Metas.Servicos
{
    public interface IRepositorioNomeTipoInvestimento
    {
        List<NomeTipoInvestimento> ObterTodas();
        NomeTipoInvestimento ObterPorId(int id);
        void Criar(NomeTipoInvestimento dados);
        void Atualizar(NomeTipoInvestimento dados);
        void Excluir(int id);
    }
}
