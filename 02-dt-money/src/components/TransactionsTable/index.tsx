import CountUp from "react-countup";

import incomeSvg from "assets/income.svg";
import outcomeSvg from "assets/outcome.svg";
import { Loading } from "components/Loading";
import { useTransaction } from "hooks/useTransaction";

import * as S from "./styles";

export function TransactionsTable() {
  const { isLoading, transactions } = useTransaction();

  return (
    <S.Container>
      {isLoading ? (
        <Loading />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {transactions?.map((trans) => (
              <tr key={trans.id}>
                <td>{trans.title}</td>
                <td>
                  <CountUp
                    end={trans.amount}
                    prefix={"R$ "}
                    separator="."
                    decimal=","
                    decimals={2}
                  />
                </td>
                <td
                  className={trans.type === "deposit" ? "deposit" : "withdrawn"}
                >
                  <img
                    src={trans.type === "deposit" ? incomeSvg : outcomeSvg}
                    alt="Entrada"
                  />
                  {trans.type === "deposit" ? "Entrada" : "Saída"}
                </td>
                <td>{trans.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </S.Container>
  );
}
