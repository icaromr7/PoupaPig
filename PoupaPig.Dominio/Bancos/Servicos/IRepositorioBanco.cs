namespace PoupaPig.Dominio.Bancos.Servicos
{
    public interface IRepositorioBanco
    {
        List<banco> ObterTodas();
        banco ObterPorId(int id);
        void Criar(banco dados);
        void Atualizar(banco dados);
        void Excluir(int id);
    }
}
