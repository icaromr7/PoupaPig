using PoupaPig.Dominio.Metas;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Metas.Servicos
{
    public class ServicoMetaInvestimento
    {
        private readonly IRepositorioMetaInvestimento _repositorioMeta;

        // Injetando o RepositorioMetaInvestimento através do construtor
        public ServicoMetaInvestimento(IRepositorioMetaInvestimento repositorioMeta)
        {
            _repositorioMeta = repositorioMeta;
        }

        // Método para criar uma nova meta de investimento
        public void Criar(MetaInvestimento dados)
        {
            _repositorioMeta.Criar(dados);
        }

        // Método para atualizar uma meta de investimento existente
        public void Atualizar(MetaInvestimento dados)
        {
            _repositorioMeta.Atualizar(dados);
        }

        // Método para excluir uma meta de investimento pelo ID
        public void Excluir(int id)
        {
            _repositorioMeta.Excluir(id);
        }

        // Método para obter uma meta de investimento pelo ID
        public MetaInvestimento ObterPorId(int id)
        {
            return _repositorioMeta.ObterPorId(id);
        }

        // Método para obter todas as metas de investimento
        public List<MetaInvestimento> ObterTodas()
        {
            return _repositorioMeta.ObterTodas();
        }
    }
}
