import React, { useEffect, useState } from "react";
import {
  Category,
  ContainerCategory,
  // Icon,
  ValueSpentLine,
  ValueSpent,
  LoadingBar,
  TotalCategory,
  LoadingBarDiv,
  SpentLine,
} from "./style";
import { CategoriaInt, TransacaoInt } from "../../interfaces";
import {
  getCategoriasUsuario,
  getLancamentosCompletos,
} from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import { showIconPicked } from "../../utils/bibli";

export function CategorySpending() {
  const { addToast, setLoading, userCode } = useAuth();
  const [lancamentos, setLancamentos] = useState<TransacaoInt[]>([]);
  const [categorias, setCategorias] = useState<CategoriaInt[]>([]);

  useEffect(() => {
    if (userCode) {
      const fetchData = async () => {
        try {
          setLoading(true);
          const lancamentos = await getLancamentosCompletos(Number(userCode));
          setLancamentos(lancamentos);
          const categorias = await getCategoriasUsuario(Number(userCode));
          setCategorias(categorias);
        } catch (error: any) {
          addToast({
            message: error.message,
            type: "error",
            title: "Erro ao obter lancamentos",
          });
          console.error("Erro ao obter lancamentos", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [userCode]);

  const categoryTotals = categorias.map((categoria) => {
    const lancamentosDaCategoria = lancamentos.filter(
      (lancamento) => lancamento.categoria_id === categoria.id
    );

    const totalGasto = lancamentosDaCategoria.reduce(
      (acc, lancamento) => acc + lancamento.valor,
      0
    );

    const valorMaximo = categoria.valor_max;

    const percent = valorMaximo
      ? Math.min((totalGasto / valorMaximo) * 100, 100)
      : 0;
    return {
      id: categoria.id,
      nome: categoria.nome,
      total: totalGasto,
      valor_max: valorMaximo,
      icone: categoria.icone,
      percent: percent.toFixed(0),
    };
  });

  return (
    <Category>
      {categoryTotals.map((categoria) => (
        <ContainerCategory key={categoria.id}>
          {showIconPicked(categoria.icone || "")}
          <ValueSpentLine>
            <ValueSpent>
              {categoria.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </ValueSpent>
            <LoadingBarDiv>
              <SpentLine $spent={categoria.percent}></SpentLine>
              <LoadingBar $spent={categoria.percent}></LoadingBar>
            </LoadingBarDiv>
          </ValueSpentLine>
          <TotalCategory>
            {categoria.valor_max
              ? `Máximo: ${categoria.valor_max.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}`
              : "Sem valor máximo"}
          </TotalCategory>
        </ContainerCategory>
      ))}
    </Category>
  );
}
