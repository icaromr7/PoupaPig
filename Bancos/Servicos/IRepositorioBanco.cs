namespace PoupaPig.Dominio.Bancos.Servicos
{
    public interface IRepositorioBanco
    {
        List<Banco> ObterTodas();
        Banco ObterPorId(int id);
        void Criar(Banco dados);
        void Atualizar(Banco dados);
        void Excluir(int id);
    }
}
