using LinqToDB;
using PoupaPig.Dominio.Metas;
using PoupaPig.Dominio.Metas.Servicos;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Metas
{
    public class RepositorioNomeTipoObjetivo : IRepositorioNomeTipoObjetivo
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioNomeTipoObjetivo(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar um novo NomeTipoObjetivo
        public void Criar(NomeTipoObjetivo dados)
        {
            _dataConnection.Insert(dados);
        }

        // Método para atualizar um NomeTipoObjetivo existente
        public void Atualizar(NomeTipoObjetivo dados)
        {
            var nomeTipoObjetivoExistente = _dataConnection.GetTable<NomeTipoObjetivo>().FirstOrDefault(n => n.id == dados.id);
            if (nomeTipoObjetivoExistente != null)
            {
                _dataConnection.Update(dados);
            }
        }

        // Método para excluir um NomeTipoObjetivo pelo ID
        public void Excluir(int id)
        {
            _dataConnection.GetTable<NomeTipoObjetivo>().Delete(n => n.id == id);
        }

        // Método para obter um NomeTipoObjetivo pelo ID
        public NomeTipoObjetivo ObterPorId(int id)
        {
            return _dataConnection.GetTable<NomeTipoObjetivo>().FirstOrDefault(n => n.id == id);
        }

        // Método para obter todos os NomeTipoObjetivo
        public List<NomeTipoObjetivo> ObterTodas()
        {
            return _dataConnection.GetTable<NomeTipoObjetivo>().ToList();
        }
    }
}
