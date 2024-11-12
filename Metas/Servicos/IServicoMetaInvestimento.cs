namespace PoupaPig.Dominio.Metas.Servicos
{
    public interface IServicoMetaInvestimento
    {
        List<MetaInvestimento> ObterTodas();
        MetaInvestimento ObterPorId(int id);
        void Criar(MetaInvestimento dados);
        void Atualizar(MetaInvestimento dados);
        void Excluir(int id);
    }
}
