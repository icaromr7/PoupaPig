using PoupaPig.Dominio.Transacoes;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Transacoes.Servicos
{
    public class ServicoTransacaoMetaInvestimento
    {
        private readonly IRepositorioTransacaoMetaInvestimento _repositorioTransacaoMetaInvestimento;

        // Injetando o repositório no construtor
        public ServicoTransacaoMetaInvestimento(IRepositorioTransacaoMetaInvestimento repositorioTransacaoMetaInvestimento)
        {
            _repositorioTransacaoMetaInvestimento = repositorioTransacaoMetaInvestimento;
        }

        // Método para criar uma nova TransacaoMetaInvestimento
        public void Criar(TransacaoMetaInvestimento dados)
        {
            _repositorioTransacaoMetaInvestimento.Criar(dados);
        }

        // Método para atualizar uma TransacaoMetaInvestimento existente
        public void Atualizar(TransacaoMetaInvestimento dados)
        {
            _repositorioTransacaoMetaInvestimento.Atualizar(dados);
        }

        // Método para excluir uma TransacaoMetaInvestimento pelo ID
        public void Excluir(int id)
        {
            _repositorioTransacaoMetaInvestimento.Excluir(id);
        }

        // Método para obter uma TransacaoMetaInvestimento pelo ID
        public TransacaoMetaInvestimento ObterPorId(int id)
        {
            return _repositorioTransacaoMetaInvestimento.ObterPorId(id);
        }

        // Método para obter todas as TransacaoMetaInvestimento
        public List<TransacaoMetaInvestimento> ObterTodas()
        {
            return _repositorioTransacaoMetaInvestimento.ObterTodas();
        }

        // Método para obter TransacaoMetaInvestimento por usuario_id
        public List<TransacaoMetaInvestimento> ObterPorUsuarioId(int usuarioId)
        {
            return _repositorioTransacaoMetaInvestimento.ObterPorUsuarioId(usuarioId);
        }
    }
}
