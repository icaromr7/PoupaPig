namespace PoupaPig.Dominio.Categorias.Servicos
{
    public interface IRepositorioCategoriaPadrao
    {
        List<CategoriaPadrao> ObterTodas();
        CategoriaPadrao ObterPorId(int id);
        void Criar(CategoriaPadrao dados);
        void Atualizar(CategoriaPadrao dados);
        void Excluir(int id);
        
    }
}
