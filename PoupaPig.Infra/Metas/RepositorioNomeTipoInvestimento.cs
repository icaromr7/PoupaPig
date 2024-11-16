using LinqToDB;
using PoupaPig.Dominio.Metas;
using PoupaPig.Dominio.Metas.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Metas
{
    public class RepositorioNomeTipoInvestimento : IRepositorioNomeTipoInvestimento
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioNomeTipoInvestimento(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar um novo NomeTipoInvestimento
        public void Criar(NomeTipoInvestimento dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar um NomeTipoInvestimento existente
        public void Atualizar(NomeTipoInvestimento dados)
        {
            var nomeTipoInvestimentoExistente = _dataConnection.GetTable<NomeTipoInvestimento>().FirstOrDefault(n => n.id == dados.id);
            if (nomeTipoInvestimentoExistente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir um NomeTipoInvestimento pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<NomeTipoInvestimento>().Delete(n => n.id == id);
        }

        // Método para obter um NomeTipoInvestimento pelo ID
        public NomeTipoInvestimento ObterPorId(int id)
        {
            return _dataConnection.GetTable<NomeTipoInvestimento>().FirstOrDefault(n => n.id == id);
        }

        // Método para obter todos os NomeTipoInvestimento
        public List<NomeTipoInvestimento> ObterTodas()
        {
            return _dataConnection.GetTable<NomeTipoInvestimento>().ToList();
        }
    }
}
