import incomeSvg from "assets/income.svg";
import outcomeSvg from "assets/outcome.svg";
import totalSvg from "assets/total.svg";
import { Card } from "components/Card";
import { TransactionsTable } from "components/TransactionsTable";
import { useTransaction } from "hooks/useTransaction";

import * as S from "./styles";

export function Dashboard() {
  const { transactions } = useTransaction();

  const summary = transactions.reduce(
    (acc, trans) => {
      if (trans.type === "deposit") {
        acc.deposits += trans.amount;
        acc.total += trans.amount;
      } else {
        acc.withdraws += trans.amount;
        acc.total -= trans.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      total: 0,
      withdraws: 0,
    }
  );

  return (
    <S.Container>
      <S.Wrapper>
        <Card name="Entradas" amount={summary.deposits} image={incomeSvg} />
        <Card
          name="Saídas"
          amount={summary.withdraws}
          image={outcomeSvg}
          outcome
        />
        <Card
          name="Total"
          amount={summary.total}
          image={totalSvg}
          bg="#47cc95"
          color="#fff"
        />
      </S.Wrapper>

      <TransactionsTable />
    </S.Container>
  );
}
