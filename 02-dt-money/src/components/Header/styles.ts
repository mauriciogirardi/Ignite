import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
  height: 13rem;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  padding: 2rem 1rem 0 1rem;
  margin: 0 auto;

  > img {
    width: 14rem;
  }

  @media (max-width: 500px) {
    > img {
      width: 10rem;
    }
  }
`;

export const Button = styled.button`
  background-color: var(--blue-light);
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  height: 3rem;
  width: 11rem;
`;
