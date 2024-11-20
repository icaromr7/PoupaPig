using LinqToDB;
using PoupaPig.Dominio.Classes;
using PoupaPig.Dominio.Classes.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Classes
{
    public class RepositorioClasse : IRepositorioClasse
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioClasse(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar uma nova classe
        public void Criar(Classe dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar uma classe existente
        public void Atualizar(Classe dados)
        {
            var classeExistente = _dataConnection.GetTable<Classe>().FirstOrDefault(c => c.id == dados.id);
            if (classeExistente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir uma classe pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<Classe>().Delete(c => c.id == id);
        }

        // Método para obter uma classe pelo ID
        public Classe ObterPorId(int id)
        {
            return _dataConnection.GetTable<Classe>().FirstOrDefault(c => c.id == id);
        }

        // Método para obter todas as classes
        public List<Classe> ObterTodas()
        {
            return _dataConnection.GetTable<Classe>().ToList();
        }

        public List<Classe> ObterClassesPorUsuario(int usuarioId)
        {
            return (from uc in _dataConnection.GetTable<UsuarioClasse>()
                    join c in _dataConnection.GetTable<Classe>()
                    on uc.classe_id equals c.id
                    where uc.usuario_id == usuarioId
                    select c).ToList();
        }

    }
}
