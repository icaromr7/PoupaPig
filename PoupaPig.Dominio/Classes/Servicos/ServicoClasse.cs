namespace PoupaPig.Dominio.Classes.Servicos
{
    public class ServicoClasse
    {
        private readonly IRepositorioClasse _repositorioClasse;

        // Injetando o RepositorioClasse através do construtor
        public ServicoClasse(IRepositorioClasse repositorioClasse)
        {
            _repositorioClasse = repositorioClasse;
        }

        // Método para criar uma nova classe
        public void Criar(Classe dados)
        {
            _repositorioClasse.Criar(dados);
        }

        // Método para atualizar uma classe existente
        public void Atualizar(Classe dados)
        {
            _repositorioClasse.Atualizar(dados);
        }

        // Método para excluir uma classe pelo ID
        public void Excluir(int id)
        {
            _repositorioClasse.Excluir(id);
        }

        // Método para obter uma classe pelo ID
        public Classe ObterPorId(int id)
        {
            return _repositorioClasse.ObterPorId(id);
        }

        // Método para obter todas as classes
        public List<Classe> ObterTodas()
        {
            return _repositorioClasse.ObterTodas();
        }

        public List<Classe> ObterClassesPorUsuario(int usuarioId)
        {
            return _repositorioClasse.ObterClassesPorUsuario(usuarioId);
        }        
    }
}
