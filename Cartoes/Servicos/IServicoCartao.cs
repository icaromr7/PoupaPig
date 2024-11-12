namespace PoupaPig.Dominio.Cartoes.Servicos
{
    public interface IServicoCartao
    {
        List<Cartao> ObterTodas();
        Cartao ObterPorId(int id);
        void Criar(Cartao dados);
        void Atualizar(Cartao dados);
        void Excluir(int id);
    }
}
