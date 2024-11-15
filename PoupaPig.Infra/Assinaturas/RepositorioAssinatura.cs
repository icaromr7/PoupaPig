using LinqToDB;
using PoupaPig.Dominio.Assinaturas;
using PoupaPig.Dominio.Assinaturas.Servicos;

namespace PoupaPig.Infra.Assinaturas
{
    public class RepositorioAssinatura : IRepositorioAssinatura
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o DataConnection através do construtor
        public RepositorioAssinatura(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar uma nova assinatura
        public void Criar(Assinatura dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar uma assinatura existente
        public void Atualizar(Assinatura dados)
        {
            var assinaturaExistente = _dataConnection.GetTable<Assinatura>().FirstOrDefault(a => a.id == dados.id);
            if (assinaturaExistente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir uma assinatura pelo ID
        public void Excluir(int id)
        {
            var assinatura = _dataConnection.GetTable<Assinatura>().FirstOrDefault(a => a.id == id);
            if (assinatura != null)
            {
                _dataConnection.Delete(assinatura);
            }
        }

        // Método para obter uma assinatura pelo ID
        public Assinatura ObterPorId(int id)
        {
            return _dataConnection.GetTable<Assinatura>().FirstOrDefault(a => a.id == id);
        }

        // Método para obter todas as assinaturas
        public List<Assinatura> ObterTodas()
        {
            return _dataConnection.GetTable<Assinatura>().ToList();
        }
    }
}
