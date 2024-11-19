namespace PoupaPig.Dominio.Categorias.Servicos
{
    public interface IRepositorioCategoriaPersonalizada
    {
        List<CategoriaPersonalizada> ObterTodas();
        CategoriaPersonalizada ObterPorId(int id);
        void Criar(CategoriaPersonalizada dados);
        void Atualizar(CategoriaPersonalizada dados);
        void Excluir(int id);
        CategoriaPersonalizada ObterPorNome(string nome);
    }
}
