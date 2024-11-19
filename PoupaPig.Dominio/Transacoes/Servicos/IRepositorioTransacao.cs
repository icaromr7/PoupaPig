namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public interface IRepositorioTransacao
    {
        List<Transacao> ObterTodas();
        Transacao ObterPorId(int id);
        void Criar(Transacao dados);
        void Atualizar(Transacao dados);
        void Excluir(int id);
        decimal ObterSaldoPorUsuario(int usuario_id);
        List<Transacao> ObterTransacoesPorMetaInvestimento(int idMetaInvestimento);
    }
}
