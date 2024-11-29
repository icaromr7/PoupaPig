namespace PoupaPig.Dominio.Categorias.Servicos
{
    public interface IRepositorioCategoria
    {
        List<Categoria> ObterTodas(int usuarioId);
        Categoria ObterPorId(int id);
        void Criar(Categoria dados);
        void Atualizar(Categoria dados);
        void Excluir(int id);
        Categoria ObterPorNome(string nome, int usuarioId);
    }
}
