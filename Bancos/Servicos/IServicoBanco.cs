namespace PoupaPig.Dominio.Bancos.Servicos
{
    public interface IServicoBanco
    {
        List<Banco> ObterTodas();
        Banco ObterPorId(int id);
        void Criar(Banco dados);
        void Atualizar(Banco dados);
        void Excluir(int id);
    }
}
