namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public interface IServicoTipoTransacao
    {
        List<TipoTransacao> ObterTodas();
        TipoTransacao ObterPorId(int id);
        void Criar(TipoTransacao dados);
        void Atualizar(TipoTransacao dados);
        void Excluir(int id);
    }
}
