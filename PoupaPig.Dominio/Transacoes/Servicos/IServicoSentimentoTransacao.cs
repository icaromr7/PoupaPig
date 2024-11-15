namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public interface IServicoSentimentoTransacao
    {
        List<SentimentoTransacao> ObterTodas();
        SentimentoTransacao ObterPorId(int id);
        void Criar(SentimentoTransacao dados);
        void Atualizar(SentimentoTransacao dados);
        void Excluir(int id);
    }
}
