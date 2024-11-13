namespace PoupaPig.Dominio.Questionarios.Servicos
{
    public interface IRepositorioQuestionario
    {
        List<Questionario> ObterTodas();
        Questionario ObterPorId(int id);
        void Criar(Questionario dados);
        void Atualizar(Questionario dados);
        void Excluir(int id);
    }
}
