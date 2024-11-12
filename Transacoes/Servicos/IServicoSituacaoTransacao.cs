namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public interface IServicoSituacaoTransacao
    {
        List<SituacaoTransacao> ObterTodas();
        SituacaoTransacao ObterPorId(int id);
        void Criar(SituacaoTransacao dados);
        void Atualizar(SituacaoTransacao dados);
        void Excluir(int id);
    }
}
