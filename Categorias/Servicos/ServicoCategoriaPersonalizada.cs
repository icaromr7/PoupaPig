using PoupaPig.Dominio.Categorias;
using System.Collections.Generic;

namespace PoupaPig.Dominio.Categorias.Servicos
{
    public class ServicoCategoriaPersonalizada
    {
        private readonly IRepositorioCategoriaPersonalizada _repositorioCategoriaPersonalizada;

        // Injetando o RepositorioCategoriaPersonalizada através do construtor
        public ServicoCategoriaPersonalizada(IRepositorioCategoriaPersonalizada repositorioCategoriaPersonalizada)
        {
            _repositorioCategoriaPersonalizada = repositorioCategoriaPersonalizada;
        }

        // Método para criar uma nova categoria personalizada
        public void Criar(CategoriaPersonalizada dados)
        {
            _repositorioCategoriaPersonalizada.Criar(dados);
        }

        // Método para atualizar uma categoria personalizada existente
        public void Atualizar(CategoriaPersonalizada dados)
        {
            _repositorioCategoriaPersonalizada.Atualizar(dados);
        }

        // Método para excluir uma categoria personalizada pelo ID
        public void Excluir(int id)
        {
            _repositorioCategoriaPersonalizada.Excluir(id);
        }

        // Método para obter uma categoria personalizada pelo ID
        public CategoriaPersonalizada ObterPorId(int id)
        {
            return _repositorioCategoriaPersonalizada.ObterPorId(id);
        }

        // Método para obter todas as categorias personalizadas
        public List<CategoriaPersonalizada> ObterTodas()
        {
            return _repositorioCategoriaPersonalizada.ObterTodas();
        }
    }
}
