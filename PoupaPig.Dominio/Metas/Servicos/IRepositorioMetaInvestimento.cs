namespace PoupaPig.Dominio.Metas.Servicos
{
    public interface IRepositorioMetaInvestimento
    {
        List<MetaInvestimento> ObterTodas();
        MetaInvestimento ObterPorId(int id);
        void Criar(MetaInvestimento dados);
        void Atualizar(MetaInvestimento dados);
        void Excluir(int id);
    }
}
