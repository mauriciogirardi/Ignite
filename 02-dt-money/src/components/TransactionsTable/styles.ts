import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  overflow-x: auto;
  max-height: 500px;
  position: relative;

  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 5px;
  }
  ::-webkit-scrollbar {
    background: #fff;
    border-radius: 5px;
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--text-title);
    border-radius: 5px;
  }

  @media (max-width: 500px) {
    margin-top: 0rem;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    padding-right: 0.5em;

    @media (max-width: 500px) {
      overflow-y: auto;
      width: 700px;
    }

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--shape);
      border-radius: 0.25rem;
      color: var(--text-body);

      :first-child {
        color: var(--text-title);
      }

      &.deposit,
      &.withdrawn {
        display: flex;
        align-items: center;

        img {
          width: 1.2rem;
          margin-right: 0.5rem;
        }
      }

      &.deposit {
        color: #47cc95;
      }

      &.withdrawn {
        color: var(--red);
      }
    }
  }
`;
