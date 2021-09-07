import logoSvg from "assets/logo.svg";
import * as S from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <img src={logoSvg} alt="dtmoney" />

        <S.Button onClick={onOpenNewTransactionModal}>Nova transação</S.Button>
      </S.Content>
    </S.Container>
  );
}
