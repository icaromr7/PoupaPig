namespace PoupaPig.Dominio.Classes.Servicos
{
    public interface IServicoClasse
    {
        List<Classe> ObterTodas();
        Classe ObterPorId(int id);
        void Criar(Classe dados);
        void Atualizar(Classe dados);
        void Excluir(int id);
    }
}
