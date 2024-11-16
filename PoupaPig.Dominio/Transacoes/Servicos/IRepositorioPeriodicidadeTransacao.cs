namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public interface IRepositorioPeriodicidadeTransacao
    {
        List<PeriodicidadeTransacao> ObterTodas();
        PeriodicidadeTransacao ObterPorId(int id);
        void Criar(PeriodicidadeTransacao dados);
        void Atualizar(PeriodicidadeTransacao dados);
        void Excluir(int id);
    }
}
