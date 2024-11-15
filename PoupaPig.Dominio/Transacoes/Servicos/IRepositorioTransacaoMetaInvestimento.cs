namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public interface IRepositorioTransacaoMetaInvestimento
    {
        List<TransacaoMetaInvestimento> ObterTodas();
        TransacaoMetaInvestimento ObterPorId(int id);
        void Criar(TransacaoMetaInvestimento dados);
        void Atualizar(TransacaoMetaInvestimento dados);
        void Excluir(int id);
        List<TransacaoMetaInvestimento> ObterPorUsuarioId(int usuarioId);
    }
}
