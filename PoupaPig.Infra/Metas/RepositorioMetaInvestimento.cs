using LinqToDB;
using LinqToDB.Data;
using PoupaPig.Dominio.Metas;
using PoupaPig.Dominio.Metas.Servicos;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PoupaPig.Infra.Metas
{
    public class RepositorioMetaInvestimento : IRepositorioMetaInvestimento, IDisposable
    {
        private readonly PoupaPigDataConnection _dataConnection;

        // Injetando o PoupaPigDataConnection através do construtor
        public RepositorioMetaInvestimento(PoupaPigDataConnection dataConnection)
        {
            _dataConnection = dataConnection;
        }

        // Método para criar uma nova meta de investimento
        public void Criar(MetaInvestimento dados)
        {
            try
            {
                using (var transaction = _dataConnection.BeginTransaction())
                {
                    _dataConnection.Insert(dados);
                    transaction.Commit();
                }
            }
            catch (Exception ex)
            {
                // Logar o erro (exemplo: Console.WriteLine ou usando um logger)
                Console.WriteLine($"Erro ao criar MetaInvestimento: {ex.Message}");
                throw;
            }
        }

        // Método para atualizar uma meta de investimento existente
        public void Atualizar(MetaInvestimento dados)
        {
            try
            {
                using (var transaction = _dataConnection.BeginTransaction())
                {
                    _dataConnection.Update(dados);
                    transaction.Commit();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao atualizar MetaInvestimento: {ex.Message}");
                throw;
            }
        }

        // Método para excluir uma meta de investimento pelo ID
        public void Excluir(int id)
        {
            try
            {
                _dataConnection.GetTable<MetaInvestimento>().Delete(m => m.id == id);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao excluir MetaInvestimento: {ex.Message}");
                throw;
            }
        }

        // Método para obter uma meta de investimento pelo ID
        public MetaInvestimento ObterPorId(int id)
        {
            try
            {
                return _dataConnection.GetTable<MetaInvestimento>().FirstOrDefault(m => m.id == id);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao obter MetaInvestimento por ID: {ex.Message}");
                throw;
            }
        }

        // Método para obter todas as metas de investimento
        public List<MetaInvestimento> ObterTodas()
        {
            try
            {
                return _dataConnection.GetTable<MetaInvestimento>().ToList();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao obter todas as MetaInvestimento: {ex.Message}");
                throw;
            }
        }

        // Liberar recursos explicitamente
        public void Dispose()
        {
            _dataConnection.Dispose();
        }
    }
}
