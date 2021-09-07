import utils from "utils";

import * as S from "./styles";

interface CardProps {
  bg?: string;
  color?: string;
  outcome?: boolean;
  amount: number;
  name: string;
  image: string;
}

export function Card({ amount, color, image, outcome, name, bg }: CardProps) {
  return (
    <S.CardTransaction bg={bg} color={color}>
      <S.CardHeader>
        <p>{name}</p>
        <img src={image} alt={name} />
      </S.CardHeader>
      <h1>
        {outcome ? "- " : ""}
        {utils.formattedCurrency(amount)}
      </h1>
    </S.CardTransaction>
  );
}
