import styled from "styled-components";

interface CardTransactionProps {
  color?: string;
  bg?: string;
}

export const CardTransaction = styled.div<CardTransactionProps>`
  background-color: ${(props) => (props.bg ? props.bg : "#fff")};
  color: ${(props) => (props.bg ? props.color : "#333")};
  width: 33.3%;
  padding: 1rem 2rem;
  border-radius: 0.25rem;

  > h1 {
    font-weight: 400;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    min-width: 280px;
    margin-bottom: 1rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1rem;
  }

  > img {
    width: 2rem;
  }
`;
