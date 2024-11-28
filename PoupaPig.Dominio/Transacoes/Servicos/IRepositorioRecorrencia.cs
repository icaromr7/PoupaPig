namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public interface IRepositorioRecorrencia
    {
        List<Recorrencia> ObterTodas();
        Recorrencia ObterPorId(int id);
        void Criar(Recorrencia dados);
        void Atualizar(Recorrencia dados);
        void Excluir(int id);
    }
}
