namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public interface IServicoRecorrencia
    {
        List<Recorrencia> ObterTodas();
        Recorrencia ObterPorId(int id);
        void Criar(Recorrencia dados);
        void Atualizar(Recorrencia dados);
        void Excluir(int id);
    }
}
