namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public interface IServicoTipoPagamento
    {
        List<TipoPagamento> ObterTodas();
        TipoPagamento ObterPorId(int id);
        void Criar(TipoPagamento dados);
        void Atualizar(TipoPagamento dados);
        void Excluir(int id);
    }
}
