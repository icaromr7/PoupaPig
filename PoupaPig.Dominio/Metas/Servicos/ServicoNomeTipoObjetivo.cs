using PoupaPig.Dominio.Metas;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Metas.Servicos
{
    public class ServicoNomeTipoObjetivo
    {
        private readonly IRepositorioNomeTipoObjetivo _repositorio;

        // Injetando o repositório através do construtor
        public ServicoNomeTipoObjetivo(IRepositorioNomeTipoObjetivo repositorio)
        {
            _repositorio = repositorio;
        }

        // Método para criar um novo NomeTipoObjetivo
        public void Criar(NomeTipoObjetivo dados)
        {
            _repositorio.Criar(dados);
        }

        // Método para atualizar um NomeTipoObjetivo existente
        public void Atualizar(NomeTipoObjetivo dados)
        {
            _repositorio.Atualizar(dados);
        }

        // Método para excluir um NomeTipoObjetivo pelo ID
        public void Excluir(int id)
        {
            _repositorio.Excluir(id);
        }

        // Método para obter um NomeTipoObjetivo pelo ID
        public NomeTipoObjetivo ObterPorId(int id)
        {
            return _repositorio.ObterPorId(id);
        }

        // Método para obter todos os NomeTipoObjetivo
        public List<NomeTipoObjetivo> ObterTodas()
        {
            return _repositorio.ObterTodas();
        }
    }
}
