namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public interface IServicoTransacao
    {
        List<Transacao> ObterTodas();
        Transacao ObterPorId(int id);
        void Criar(Transacao dados);
        void Atualizar(Transacao dados);
        void Excluir(int id);
    }
}
