using LinqToDB;
using PoupaPig.Dominio.Cartoes;
using PoupaPig.Dominio.Cartoes.Servicos;

namespace PoupaPig.Infra.Cartoes
{
    public class RepositorioCartao : IRepositorioCartao
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioCartao(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar um novo cartão
        public void Criar(Cartao dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar um cartão existente
        public void Atualizar(Cartao dados)
        {
            var cartaoExistente = _dataConnection.GetTable<Cartao>().FirstOrDefault(c => c.id == dados.id);
            if (cartaoExistente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir um cartão pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<Cartao>().Delete(c => c.id == id);
        }

        // Método para obter um cartão pelo ID
        public Cartao ObterPorId(int id)
        {
            return _dataConnection.GetTable<Cartao>().FirstOrDefault(c => c.id == id);
        }

        // Método para obter todos os cartões
        public List<Cartao> ObterTodas()
        {
            return _dataConnection.GetTable<Cartao>().ToList();
        }
        public List<Cartao> ObterCartoesPorUsuario(int usuarioId)
        {
            return (from usuarioCartao in _dataConnection.GetTable<UsuarioCartao>()
                    join cartao in _dataConnection.GetTable<Cartao>()
                    on usuarioCartao.cartao_id equals cartao.id
                    where usuarioCartao.usuario_id == usuarioId
                    select cartao).ToList();
        }
    }
}
