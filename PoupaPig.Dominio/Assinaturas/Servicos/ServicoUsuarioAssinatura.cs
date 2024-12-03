using PoupaPig.Dominio.Assinaturas;
using PoupaPig.Dominio.Assinaturas.Servicos;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Assinaturas.Servicos
{
    public class ServicoUsuarioAssinatura
    {
        private readonly IRepositorioUsuarioAssinatura _repositorio;

        // Injetando o repositório através do construtor
        public ServicoUsuarioAssinatura(IRepositorioUsuarioAssinatura repositorio)
        {
            _repositorio = repositorio;
        }

        public void Criar(UsuarioAssinatura dados)
        {
            _repositorio.Criar(dados);
        }

        public void Atualizar(UsuarioAssinatura dados)
        {
            _repositorio.Atualizar(dados);
        }

        public void Excluir(int id)
        {
            _repositorio.Excluir(id);
        }

        public UsuarioAssinatura ObterPorId(int id)
        {
            return _repositorio.ObterPorId(id);
        }

        public List<UsuarioAssinatura> ObterTodas()
        {
            return _repositorio.ObterTodas();
        }

        public List<UsuarioAssinatura> ObterPorUsuario(int usuario_id)
        {
            return _repositorio.ObterTodas().Where(u => u.usuario_id == usuario_id).ToList();
        }
    }
}
