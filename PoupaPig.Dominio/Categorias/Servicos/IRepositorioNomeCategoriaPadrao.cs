namespace PoupaPig.Dominio.Categorias.Servicos
{
    public interface IRepositorioNomeCategoriaPadrao
    {
        List<NomeCategoriaPadrao> ObterTodas();
        NomeCategoriaPadrao ObterPorId(int id);
        void Criar(NomeCategoriaPadrao dados);
        void Atualizar(NomeCategoriaPadrao dados);
        void Excluir(int id);
    }
}
