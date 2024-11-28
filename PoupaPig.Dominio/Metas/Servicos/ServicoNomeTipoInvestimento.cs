using PoupaPig.Dominio.Metas;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Metas.Servicos
{
    public class ServicoNomeTipoInvestimento
    {
        private readonly IRepositorioNomeTipoInvestimento _repositorio;

        // Injetando o repositório através do construtor
        public ServicoNomeTipoInvestimento(IRepositorioNomeTipoInvestimento repositorio)
        {
            _repositorio = repositorio;
        }

        // Método para criar um novo NomeTipoInvestimento
        public void Criar(NomeTipoInvestimento dados)
        {
            _repositorio.Criar(dados);
        }

        // Método para atualizar um NomeTipoInvestimento existente
        public void Atualizar(NomeTipoInvestimento dados)
        {
            _repositorio.Atualizar(dados);
        }

        // Método para excluir um NomeTipoInvestimento pelo ID
        public void Excluir(int id)
        {
            _repositorio.Excluir(id);
        }

        // Método para obter um NomeTipoInvestimento pelo ID
        public NomeTipoInvestimento ObterPorId(int id)
        {
            return _repositorio.ObterPorId(id);
        }

        // Método para obter todos os NomeTipoInvestimento
        public List<NomeTipoInvestimento> ObterTodas()
        {
            return _repositorio.ObterTodas();
        }
    }
}
