using PoupaPig.Dominio.Questionarios;

namespace PoupaPig.Dominio.Classes.Servicos
{
    public class ServicoUsuarioClasse
    {
        private readonly IRepositorioUsuarioClasse _repositorio;

        // Injetando o repositório através do construtor
        public ServicoUsuarioClasse(IRepositorioUsuarioClasse repositorio)
        {
            _repositorio = repositorio;
        }

        public void Criar(UsuarioClasse dados)
        {
            _repositorio.Criar(dados);
        }

        public void Atualizar(UsuarioClasse dados)
        {
            _repositorio.Atualizar(dados);
        }

        public void Excluir(int id)
        {
            _repositorio.Excluir(id);
        }

        public UsuarioClasse ObterPorId(int id)
        {
            return _repositorio.ObterPorId(id);
        }

        public List<UsuarioClasse> ObterTodas()
        {
            return _repositorio.ObterTodas();
        }
        public void DefinirClasseSocial(Questionario questionario)
        {
            var pontos = 0;

            // Banheiros
            if (questionario.banheiros == 0)
                pontos += 0;
            else if (questionario.banheiros == 1)
                pontos += 3;
            else if (questionario.banheiros == 2)
                pontos += 7;
            else if (questionario.banheiros >= 3)
                pontos += 10;

            // Trabalhadores domésticos
            if (questionario.trabalhadores_domesticos == 0)
                pontos += 0;
            else if (questionario.trabalhadores_domesticos == 1)
                pontos += 3;
            else if (questionario.trabalhadores_domesticos == 2)
                pontos += 7;
            else if (questionario.trabalhadores_domesticos >= 3)
                pontos += 10;

            // Automóveis
            if (questionario.automoveis == 0)
                pontos += 0;
            else if (questionario.automoveis == 1)
                pontos += 3;
            else if (questionario.automoveis == 2)
                pontos += 5;
            else if (questionario.automoveis >= 3)
                pontos += 8;

            // Microcomputadores
            if (questionario.microcomputadores == 0)
                pontos += 0;
            else if (questionario.microcomputadores == 1)
                pontos += 3;
            else if (questionario.microcomputadores == 2)
                pontos += 6;
            else if (questionario.microcomputadores >= 3)
                pontos += 8;

            // Máquinas de lavar roupa
            if (questionario.maquinas_lavar_roupa == 0)
                pontos += 0;
            else if (questionario.maquinas_lavar_roupa == 1)
                pontos += 2;
            else if (questionario.maquinas_lavar_roupa == 2)
                pontos += 4;
            else if (questionario.maquinas_lavar_roupa >= 3)
                pontos += 6;

            // Geladeiras
            if (questionario.geladeiras == 0)
                pontos += 0;
            else if (questionario.geladeiras == 1)
                pontos += 2;
            else if (questionario.geladeiras == 2)
                pontos += 3;
            else if (questionario.geladeiras >= 3)
                pontos += 5;

            // Freezers
            if (questionario.freezers == 0)
                pontos += 0;
            else if (questionario.freezers == 1)
                pontos += 2;
            else if (questionario.freezers == 2)
                pontos += 4;
            else if (questionario.freezers >= 3)
                pontos += 6;

            // DVDs
            if (questionario.dvds == 0)
                pontos += 0;
            else if (questionario.dvds == 1)
                pontos += 1;
            else if (questionario.dvds == 2)
                pontos += 3;
            else if (questionario.dvds >= 3)
                pontos += 4;

            // Fornos de micro-ondas
            if (questionario.fornos_microondas == 0)
                pontos += 0;
            else if (questionario.fornos_microondas == 1)
                pontos += 2;
            else if (questionario.fornos_microondas == 2)
                pontos += 4;
            else if (questionario.fornos_microondas >= 3)
                pontos += 4;

            // Motocicletas
            if (questionario.motocicletas == 0)
                pontos += 0;
            else if (questionario.motocicletas == 1)
                pontos += 1;
            else if (questionario.motocicletas == 2)
                pontos += 3;
            else if (questionario.motocicletas >= 3)
                pontos += 3;

            // Máquinas secadoras de roupas
            if (questionario.maquinas_secar_roupa == 0)
                pontos += 0;
            else if (questionario.maquinas_secar_roupa == 1)
                pontos += 2;
            else if (questionario.maquinas_secar_roupa == 2)
                pontos += 2;
            else if (questionario.maquinas_secar_roupa >= 3)
                pontos += 2;

            // Grau de instrução
            if (questionario.grau_instrucao == 0)
                pontos += 0;
            else if (questionario.grau_instrucao == 1)
                pontos += 1;
            else if (questionario.grau_instrucao == 2)
                pontos += 2;
            else if (questionario.grau_instrucao == 3)
                pontos += 4;
            else if (questionario.grau_instrucao >= 4)
                pontos += 7;

            // Água
            if (questionario.origem_agua == 0)
                pontos += 0;
            else if (questionario.origem_agua == 1)
                pontos += 2;
            else
                pontos += 4;

            // Rua
            if (questionario.tipo_rua == 1)
                pontos += 2;
            else
                pontos += 0;

            var usuarioClasse = new UsuarioClasse();
            usuarioClasse.usuario_id = questionario.usuario_id;
            if (pontos >= 45)
                usuarioClasse.classe_id = 1;
            else if (pontos >= 38 && pontos < 45)
                usuarioClasse.classe_id = 2;
            else if (pontos >= 29 && pontos < 38)
                usuarioClasse.classe_id = 3;
            else if (pontos >= 23 && pontos < 29)
                usuarioClasse.classe_id = 4;
            else if (pontos >= 17 && pontos< 23)
                usuarioClasse.classe_id = 5;
            else
                usuarioClasse.classe_id = 6;

            _repositorio.Criar(usuarioClasse);
        }
    }
}
