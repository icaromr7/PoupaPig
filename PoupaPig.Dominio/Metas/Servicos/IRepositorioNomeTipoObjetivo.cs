namespace PoupaPig.Dominio.Metas.Servicos
{
    public interface IRepositorioNomeTipoObjetivo
    {
        List<NomeTipoObjetivo> ObterTodas();
        NomeTipoObjetivo ObterPorId(int id);
        void Criar(NomeTipoObjetivo dados);
        void Atualizar(NomeTipoObjetivo dados);
        void Excluir(int id);
    }
}
