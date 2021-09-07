import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: -4rem;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: transparent;
    }
  }
`;
