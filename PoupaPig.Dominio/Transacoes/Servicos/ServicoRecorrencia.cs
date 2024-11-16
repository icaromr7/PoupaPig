using PoupaPig.Dominio.Transacoes;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public class ServicoRecorrencia
    {
        private readonly IRepositorioRecorrencia _repositorio;

        // Construtor com injeção de dependência
        public ServicoRecorrencia(IRepositorioRecorrencia repositorio)
        {
            _repositorio = repositorio;
        }

        // Método para criar uma nova recorrência
        public void Criar(Recorrencia dados)
        {
            _repositorio.Criar(dados);
        }

        // Método para atualizar uma recorrência existente
        public void Atualizar(Recorrencia dados)
        {
            _repositorio.Atualizar(dados);
        }

        // Método para excluir uma recorrência pelo ID
        public void Excluir(int id)
        {
            _repositorio.Excluir(id);
        }

        // Método para obter uma recorrência pelo ID
        public Recorrencia ObterPorId(int id)
        {
            return _repositorio.ObterPorId(id);
        }

        // Método para obter todas as recorrências
        public List<Recorrencia> ObterTodas()
        {
            return _repositorio.ObterTodas();
        }
    }
}
