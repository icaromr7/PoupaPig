namespace PoupaPig.Dominio.Assinaturas.Servicos
{
    public class ServicoAssinatura
    {
        private readonly IRepositorioAssinatura _repositorioAssinatura;

        // Injetando o RepositorioAssinatura através do construtor
        public ServicoAssinatura(IRepositorioAssinatura repositorioAssinatura)
        {
            _repositorioAssinatura = repositorioAssinatura;
        }

        // Método para criar uma nova assinatura
        public void Criar(Assinatura dados)
        {
            _repositorioAssinatura.Criar(dados);
        }

        // Método para atualizar uma assinatura existente
        public void Atualizar(Assinatura dados)
        {
            _repositorioAssinatura.Atualizar(dados);
        }

        // Método para excluir uma assinatura pelo ID
        public void Excluir(int id)
        {
            _repositorioAssinatura.Excluir(id);
        }

        // Método para obter uma assinatura pelo ID
        public Assinatura ObterPorId(int id)
        {
            return _repositorioAssinatura.ObterPorId(id);
        }

        // Método para obter todas as assinaturas
        public List<Assinatura> ObterTodas()
        {
            return _repositorioAssinatura.ObterTodas();
        }
        public List<Assinatura> ObterAssinaturasPorUsuario(int usuarioId)
        {
            return _repositorioAssinatura.ObterAssinaturasPorUsuario(usuarioId);
        }
    }
}
