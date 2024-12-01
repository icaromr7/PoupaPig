namespace PoupaPig.Dominio.Beneficios.Servicos
{
    public class ServicoBeneficio
    {
        private const int Itau_Id = 1;
        private const int BancoBrasil_Id = 2;
        private const int Bradesco_Id = 3;
        private const int Caixa_Id = 4;
        private const int Santader_Id = 5;
        private const int C6Bank_Id = 6;
        private const int Safra_Id = 7;
        private const int Sicoob_Id = 8;
        private const int Nubank_Id = 9;
        private const int VisaClassic_Id = 1;
        private const int VisaGold_Id = 2;
        private const int VisaPlatinum_Id = 3;
        private const int VisaSignature_Id = 4;
        private const int VisaInfinite_Id = 5;
        private const int MastercardStandard_Id = 6;
        private const int MastercardGold_Id = 7;
        private const int MastercardPlatinum_Id = 8;
        private const int MastercardBlack_Id = 9;
        private const int EloDinersClub_Id = 10;
        private const int EloNanquimDinersClub_Id = 11;
        private const int EloNanquim_Id = 12;
        private const int EloGrafite_Id = 13;
        private const int EloMais_Id = 14;
        private const int EloBasicoInternacional_Id = 15;
        private const int EloBasicoNacional = 16;
        private const int Tim_Id = 1;
        private const int AmazonPrime_Id = 2;
        private const int SamsClub_Id = 3;
        public Beneficio ObterBeneficioBanco(int banco_id)
        {
            var beneficio = new Beneficio();
            switch (banco_id)
            {
                case Itau_Id:
                    beneficio.LinkInfo = "https://www.itau.com.br/contas/conta-corrente?utm_source=google&utm_medium=search&utm_campaign=gl-midia_paga-personnalite-conversao-novamarca_search_ins&utm_content=google-2nd-cpc-all_devices-audience-extensao_site_link-paid_search-vantagens_ins_ip-ga2520099293&gad_source=1&gclid=Cj0KCQiAr7C6BhDRARIsAOUKifgVcXlq7zAWJm1NA0FT_7LFbJo6c5wN7ySC9FeCxrEYYL3kvly4dnQaApUhEALw_wcB";
                    beneficio.Beneficios = "Itaú Uniclass\r\nItaú Personnalité\r\n\r\nInvestimento\r\niPhone pra Sempre\r\nSamsung no Itaú\r\nApp Itaú\r\nAssistência para o seu Pet\r\nItaú Shop";
                    break;
                case BancoBrasil_Id:
                    beneficio.LinkInfo = "https://www.bb.com.br/site/pra-voce/beneficios-bb/";
                    beneficio.Beneficios = "Shopping BB\r\nClube de Benefícios\r\nRecompensas Financeiras\r\nParcerias: Casa Bauducco e Área Gamer\r\nUso de Pontos e Cashback\r\nInvestimento e Cashback";
                    break;
                case Bradesco_Id:
                    beneficio.LinkInfo = "https://banco.bradesco/html/classic/index.shtm";
                    beneficio.Beneficios = "Uso de Pontos e Cashback\r\nInvestimento e Cashback\r\nSeguro Residencial\r\nPlano Odontológico\r\nConsórcios\r\nEspecialistas em investimento\r\nBradesco Shop\r\nMimos\r\nTag de Pedágio";
                    break;
                case Caixa_Id:
                    beneficio.LinkInfo = "https://www.caixa.gov.br/Paginas/home-caixa.aspx";
                    beneficio.Beneficios = "Azulzinha - a maquininha da CAIXA\r\nSeguro Acidentes Pessoas Bem-estar\r\nSeguros Residencial e Habitacional\r\nTAG Caixa\r\nConsórcios\r\nCartões CAIXA Mulher\r\nvtCAIXA";
                    break;
                case Santader_Id:
                    beneficio.LinkInfo = "https://abrasuaconta.santander.com.br/landing/";
                    beneficio.Beneficios = "Van Gogh Plus\r\nSelect Plus\r\nTag Santander Sem Parar\r\nCréditos e Financiamentos\r\nInvestimentos e previdência\r\nRenegociação\r\nDin Din\r\nConsórcio\r\nSeguros\r\nSoluções Internacionais e câmbio\r\nMaquininha Getnet\r\nAssistências helpS\r\nTarifas e Pacotes\r\nEmpréstimo c/ garantia de imóvel";
                    break;
                case C6Bank_Id:
                    beneficio.LinkInfo = "https://www.c6bank.com.br/";
                    beneficio.Beneficios = "Conta Global\r\nLimite Garantido\r\nC6 Auto\r\nSeguros\r\nC6 Átomos\r\nC6 Yellow\r\nC6 Tag\r\nC6 Store + Desconto de Parceiros\r\nC6+ Benefícios\r\nC6 Global Invest\r\nC6 Invest\r\nExtrato de Carbono\r\nHome Equity";
                    break;
                case Safra_Id:
                    beneficio.LinkInfo = "https://www.safra.com.br/";
                    beneficio.Beneficios = "PRIVATE BANKING - curadoria para  investimentos\r\nSeguros\r\n\r\nSafra Financeira\r\nFinanciamento de Veículos\r\nCrédito Consignado\r\nEmpréstimo Saque Aniversário FGTS\r\n\r\nSafra Asset\r\nLista de Fundos\r\nJS Real Estate (FII)\r\nJSAF11\r\nCopérnico FIP IE\r\nJSCR11\r\nETF Ibovespa\r\nProdutos\r\nInformações relevantes\r\nSafra Fiduciária\r\nSafra Invest\r\nEscritórios Credenciados\r\n\r\nSafra Corretora\r\nCustos Operacionais\r\nLista de Ofertas Públicas\r\n\r\nBanco de investimentos\r\nAnálise de Operações Financeiras";
                    break;
                case Sicoob_Id:
                    beneficio.LinkInfo = "https://www.sicoob.com.br/";
                    beneficio.Beneficios = "Sicoob Tag \r\nVerificador de autenticidade de documentos\r\nSipag\r\nSaque sem Cartão\r\nSaque Digital\r\nDDA - Débito Direto Autorizado\r\nSeguros\r\nConsórcios\r\nCoopera Shop";
                    break;
                case Nubank_Id:
                    beneficio.LinkInfo = "https://nubank.com.br/";
                    beneficio.Beneficios = "Nubank+\r\nSeguro de Vida \r\nNu Celular Seguro\r\nNu Lar Seguro\r\nShopping do Nu\r\nNubank Ultravioleta\r\nNuTag\r\nUso de Pontos Smiles e Cashback";
                    break;
            }
            return beneficio;
        }
        
        public Beneficio ObterBeneficioCartao(int cartao_id)
        {
            var beneficio = new Beneficio();
            switch (cartao_id)
            {
                case VisaClassic_Id:
                    beneficio.LinkInfo = "https://www.visa.com.br/pague-com-visa/cartoes/cartoes-credito.html";
                    beneficio.Beneficios = "Serviço de Saque Emergencial\r\nPlataforma Vai de Visa\r\nSubstituição Emergencial de Cartão";
                    break;
                case VisaGold_Id:
                    beneficio.LinkInfo = "https://www.visa.com.br/pague-com-visa/cartoes/cartoes-credito.html";
                    beneficio.Beneficios = "Serviço de Saque Emergencial\r\nPlataforma Vai de Visa\r\nSubstituição Emergencial de Cartão\r\nSeguro de Proteção de Preços\r\nProteção de Compra\r\nGarantia Estendida Original";
                    break;
                case VisaPlatinum_Id:
                    beneficio.LinkInfo = "https://www.visa.com.br/pague-com-visa/cartoes/cartoes-credito.htm";
                    beneficio.Beneficios = "Serviço de Saque Emergencial\r\nPlataforma Vai de Visa\r\nSubstituição Emergencial de Cartão\r\nSeguro de Proteção de Preços\r\nProteção de Compra\r\nGarantia Estendida Original\r\nVisa Airport Companion\r\nSeguro Emergência Médica Internacional\r\nSeguro para Veículos de Locadora\r\nVisa Concierge\r\nVisa Luxury Hotel Collection\r\nVisa Médico Online";
                    break;
                case VisaSignature_Id:
                    beneficio.LinkInfo = "https://www.visa.com.br/pague-com-visa/cartoes/cartoes-credito.html";
                    beneficio.Beneficios = "Serviço de Saque Emergencial\r\nPlataforma Vai de Visa\r\nSubstituição Emergencial de Cartão\r\nSeguro de Proteção de Preços\r\nProteção de Compra\r\nGarantia Estendida Original\r\nVisa Airport Companion\r\nSeguro Emergência Médica Internacional\r\nSeguro para Veículos de Locadora\r\nVisa Concierge\r\nVisa Luxury Hotel Collection\r\nVisa Médico Online\r\nCobertura de Perda ou Roubo de Bagagem\r\nSeguro Atraso de Embarque\r\nCancelamento de Viagem";
                    break;
                case VisaInfinite_Id:
                    beneficio.LinkInfo = "https://www.visa.com.br/pague-com-visa/cartoes/cartoes-credito.html";
                    beneficio.Beneficios = "Serviço de Saque Emergencial\r\nPlataforma Vai de Visa\r\nSubstituição Emergencial de Cartão\r\nSeguro de Proteção de Preços\r\nProteção de Compra\r\nGarantia Estendida Original\r\nVisa Airport Companion\r\nSeguro Emergência Médica Internacional\r\nSeguro para Veículos de Locadora\r\nVisa Concierge\r\nVisa Luxury Hotel Collection\r\nVisa Médico Online\r\nCobertura de Perda ou Roubo de Bagagem\r\nSeguro Atraso de Embarque\r\nCancelamento de Viagem";
                    break;
                case MastercardStandard_Id:
                    beneficio.LinkInfo = "https://www.mastercard.com.br/pt-br/consumidores/encontre-seu-cartao/cartoes-credito.html";
                    beneficio.Beneficios = "Mastercard Global Service™\r\nMastercard Surpreenda";
                    break;
                case MastercardGold_Id:
                    beneficio.LinkInfo = "https://www.mastercard.com.br/pt-br/consumidores/encontre-seu-cartao/cartoes-credito.html";
                    beneficio.Beneficios = "Mastercard Global Service™\r\nMastercard Surpreenda\r\nSeguro Proteção de Preço\r\nCompra Protegida\r\nGarantia Estendida Original";
                    break;
                case MastercardPlatinum_Id:
                    beneficio.LinkInfo = "https://www.mastercard.com.br/pt-br/consumidores/encontre-seu-cartao/cartoes-credito.html";
                    beneficio.Beneficios = "Mastercard Global Service™\r\nMastercard Surpreenda\r\nMastercard Platinum Concierge\r\nPriceless Cities\r\nTravel Rewards\r\nAirport Concierge\r\nSeguro Médico em Viagens - MasterAssist Plus\r\nMasterSeguro de Automóveis\r\nIsenção de Rolha";
                    break;
                case MastercardBlack_Id:
                    beneficio.LinkInfo = "https://www.mastercard.com.br/pt-br/consumidores/encontre-seu-cartao/cartoes-credito.html";
                    beneficio.Beneficios = "Mastercard Global Service™\r\nMastercard Surpreenda\r\nPriceless Cities\r\nTravel Rewards\r\nAirport Concierge\r\nSeguro Médico em Viagens - MasterAssist Black\r\nMasterSeguro de Automóveis\r\nIsenção de Rolha\r\nSalas VIP Mastercard Black\r\nMastercard Black Concierge\r\nMastercard Airport Experiences fornecido por LoungeKey\r\nProteção de Bagagem";
                    break;
                case EloDinersClub_Id:
                    beneficio.LinkInfo = "https://www.elo.com.br/cartoes/?utm_source=google-search&utm_medium=social&utm_content=alp_elo_inst_24_always-on-marca_google-sch_SEAH_bot_cpc_opn_marca-elo-cartoes_tead_NU_elo-cartoes_24al00079el&utm_campaign=alp_elo_inst_24_always-on-marca_google-sch_SEAH_bot_cpc&gclid=Cj0KCQiAr7C6BhDRARIsAOUKifjX17HXlwpWe6WyjjS1p_jWb07ZyA3XO9lfaxKx5oyp1-C656ezdaoaAihyEALw_wcB";
                    beneficio.Beneficios = "FIXOS\r\nPontuação Turbinada\r\nPontos que Nunca Expiram\r\nTransfer Voo Internacional\r\nSala VIP\r\nSeguro Viagem\r\nShows\r\nOfertas\r\nGanhar pontos turbinados\r\n\r\nFLEXÍVEIS (Escolher mais 4 benefícios flexíveis sem custo adicional.)\r\nSeguro Garantia Estendida\r\nSeguro Proteção de Compras\r\nCNA Go\r\nEduK\r\nPlaykids\r\n12 Min\r\nDeezer\r\nZen Klub\r\nCorpo e Mente\r\nAssistência Pet";
                    break;
                case EloNanquimDinersClub_Id:
                    beneficio.LinkInfo = "https://www.elo.com.br/cartoes/?utm_source=google-search&utm_medium=social&utm_content=alp_elo_inst_24_always-on-marca_google-sch_SEAH_bot_cpc_opn_marca-elo-cartoes_tead_NU_elo-cartoes_24al00079el&utm_campaign=alp_elo_inst_24_always-on-marca_google-sch_SEAH_bot_cpc&gclid=Cj0KCQiAr7C6BhDRARIsAOUKifjX17HXlwpWe6WyjjS1p_jWb07ZyA3XO9lfaxKx5oyp1-C656ezdaoaAihyEALw_wcB";
                    beneficio.Beneficios = "FIXOS\r\nPontuação Turbinada\r\nPontos que Nunca Expiram\r\nTransfer Voo Internacional\r\nSala VIP\r\nSeguro Viagem\r\nShows\r\nOfertas\r\nGanhar pontos turbinados\r\n\r\nFLEXÍVEIS (Escolher mais 4 benefícios flexíveis sem custo adicional.)\r\nSeguro Garantia Estendida\r\nSeguro Proteção de Compras\r\nCNA Go\r\nEduK\r\nPlaykids\r\n12 Min\r\nDeezer\r\nZen Klub\r\nCorpo e Mente\r\nAssistência Pet";
                    break;
                case EloNanquim_Id:
                    beneficio.LinkInfo = "https://www.elo.com.br/cartoes/?utm_source=google-search&utm_medium=social&utm_content=alp_elo_inst_24_always-on-marca_google-sch_SEAH_bot_cpc_opn_marca-elo-cartoes_tead_NU_elo-cartoes_24al00079el&utm_campaign=alp_elo_inst_24_always-on-marca_google-sch_SEAH_bot_cpc&gclid=Cj0KCQiAr7C6BhDRARIsAOUKifjX17HXlwpWe6WyjjS1p_jWb07ZyA3XO9lfaxKx5oyp1-C656ezdaoaAihyEALw_wcB";
                    beneficio.Beneficios = "FIXOS\r\nShows\r\nOfertas\r\n\r\nFLEXÍVEIS (Escolha até 6 sem custo adicional)\r\nCNA Go\r\nDeezer\r\nSeguro Garantia Estendida\r\nSeguro Proteção de Compras\r\nSala VIP\r\nSeguro Viagem\r\nClube Elo Mania\r\nAssistência Residencial\r\nAssistência Auto\r\nPlaykids\r\nAssistência Pet";
                    break;
                case EloGrafite_Id:
                    beneficio.LinkInfo = "https://www.elo.com.br/cartoes/?utm_source=google-search&utm_medium=social&utm_content=alp_elo_inst_24_always-on-marca_google-sch_SEAH_bot_cpc_opn_marca-elo-cartoes_tead_NU_elo-cartoes_24al00079el&utm_campaign=alp_elo_inst_24_always-on-marca_google-sch_SEAH_bot_cpc&gclid=Cj0KCQiAr7C6BhDRARIsAOUKifjX17HXlwpWe6WyjjS1p_jWb07ZyA3XO9lfaxKx5oyp1-C656ezdaoaAihyEALw_wcB";
                    beneficio.Beneficios = "FIXOS\r\nShows\r\nOfertas\r\n\r\nFLEXÍVEIS (Escolha até 5 sem custo adicional)\r\nCNA Go\r\nDeezer\r\nSeguro Garantia Estendida\r\nSeguro Proteção de Compras\r\nSeguro Viagem\r\nClube Elo Mania\r\nAssistência Residencial\r\nAssistência Auto\r\nPlaykids\r\nAssistência Pet\r\nBônus Celular";
                    break;
                case EloMais_Id:
                    beneficio.LinkInfo = "https://www.elo.com.br/cartoes/?utm_source=google-search&utm_medium=social&utm_content=alp_elo_inst_24_always-on-marca_google-sch_SEAH_bot_cpc_opn_marca-elo-cartoes_tead_NU_elo-cartoes_24al00079el&utm_campaign=alp_elo_inst_24_always-on-marca_google-sch_SEAH_bot_cpc&gclid=Cj0KCQiAr7C6BhDRARIsAOUKifjX17HXlwpWe6WyjjS1p_jWb07ZyA3XO9lfaxKx5oyp1-C656ezdaoaAihyEALw_wcB";
                    beneficio.Beneficios = "FIXOS\r\nShows\r\nOfertas\r\n\r\nFLEXÍVEIS (Escolha até 1 sem custo adicional)\r\nCNA Go\r\nDeezer\r\nSeguro Garantia Estendida\r\nSeguro Proteção de Compras\r\nSeguro Viagem\r\nClube Elo Mania\r\nAssistência Residencial\r\nAssistência Auto\r\nAssistência Pet\r\nBônus Celular";
                    break;
                case EloBasicoInternacional_Id:
                    beneficio.LinkInfo = "https://www.elo.com.br/cartoes/?utm_source=google-search&utm_medium=social&utm_content=alp_elo_inst_24_always-on-marca_google-sch_SEAH_bot_cpc_opn_marca-elo-cartoes_tead_NU_elo-cartoes_24al00079el&utm_campaign=alp_elo_inst_24_always-on-marca_google-sch_SEAH_bot_cpc&gclid=Cj0KCQiAr7C6BhDRARIsAOUKifjX17HXlwpWe6WyjjS1p_jWb07ZyA3XO9lfaxKx5oyp1-C656ezdaoaAihyEALw_wcB";
                    beneficio.Beneficios = "FIXOS\r\nShows\r\nOfertas";
                    break;
                case EloBasicoNacional:
                    beneficio.LinkInfo = "https://www.elo.com.br/cartoes/?utm_source=google-search&utm_medium=social&utm_content=alp_elo_inst_24_always-on-marca_google-sch_SEAH_bot_cpc_opn_marca-elo-cartoes_tead_NU_elo-cartoes_24al00079el&utm_campaign=alp_elo_inst_24_always-on-marca_google-sch_SEAH_bot_cpc&gclid=Cj0KCQiAr7C6BhDRARIsAOUKifjX17HXlwpWe6WyjjS1p_jWb07ZyA3XO9lfaxKx5oyp1-C656ezdaoaAihyEALw_wcB";
                    beneficio.Beneficios = "FIXOS\r\nShows\r\nOfertas";
                    break;

            }
            return beneficio;
        }

        public Beneficio ObterBeneficioAssinatura (int assinatura_id)
        {
            var beneficio = new Beneficio ();
            switch (assinatura_id)
            {
                case Tim_Id:
                    beneficio.LinkInfo = "https://www.tim.com.br/rj?gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQiAr7C6BhDRARIsAOUKifhBnd-wKOaEaHuss_r-OOJqYK4fyZuQfMIJa5Xk0BuKqB-cORg_mtgaAh1bEALw_wcB";
                    beneficio.Beneficios = "TIM PRÉ XIP\r\nPrime Video Versão Celular\r\nZé Delivery\r\nDescomplica\r\nCartão de TODOS\r\n\r\nTIM BETA\r\nPrime Video\r\nApp TIM FUN\r\nDeezer Premium\r\nApp TIM +Vantagens\r\nBabbel\r\nBancah Jornais II\r\nAya books light\r\ntim news\r\n\r\nTIM Black, TIM Black Plus ou TIM Black Premium (escolhe 1 por mês)\r\nAmazon Prime\r\nDeezer Premium\r\nDisney+ Padrão com anúncios\r\nAcesse todos os conteúdos do Disney+ e canais selecionados ESPN (ESPN e ESPN3).\r\nGloboplay\r\nMax Básico com anúncios\r\nNetflix Padrão com anúncios\r\nParamount+\r\nYouTube Premium\r\n\r\nTIM Black com Apple One\r\nAcesse o Apple Music, Apple TV+, Apple Arcade e iCloud+\r\n";
                    break;
                case AmazonPrime_Id:
                    beneficio.LinkInfo = "https://www.amazon.com.br/prime?tag=hydrbrgk-20&ref=pd_sl_9cp14sts25_e";
                    beneficio.Beneficios = "Frete GRÁTIS e rápido\r\nPrime Video\r\nAmazon Music Prime\r\nPrime Reading\r\nAcesso a ofertas exclusivas Prime\r\n1 hora de acesso antecipado a Ofertas Relâmpago selecionadas.";
                    break;
                case SamsClub_Id:
                    beneficio.LinkInfo = "https://sejasocio.samsclub.com.br/index.php/cadastro-de-socio/?gad_source=1&gclid=Cj0KCQiAr7C6BhDRARIsAOUKifiBumjZgqFGhB9VIjYrqCdvVdipXHmCTScOrzPljpxxgRiu7QDC6k4aAmlVEALw_wcB";
                    beneficio.Beneficios = "Produtos Importados\r\nProdutos Members Mark\r\nCashback\r\nEdição limitadas de produtos\r\n+1 Pessoa Gratuitamente\r\nDesconto em parceiros";
                    break;

            }
            return beneficio;
        }
    }
}
