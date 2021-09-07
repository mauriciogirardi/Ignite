import styled from "styled-components";

interface ButtonProps {
  isActive?: boolean;
}

export const Content = styled.div`
  position: relative;

  h2 {
    color: var(--text-title);
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }

  > button {
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
  }
`;

export const Form = styled.form`
  input {
    width: 100%;
    height: 3.5rem;
    padding: 0 1rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background-color: #f2f2f2;
    outline-color: var(--green);
    font-size: 1rem;

    ::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 0.8rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    border-radius: 0.25rem;
    margin-top: 1.5rem;
    background-color: var(--green);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    transition: background-color 0.2s;

    :hover {
      background-color: #42bf8b;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.8rem 0;
`;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 3.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  border: 1px solid #d7d7d7;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.2s;

  > img {
    margin-right: 0.5rem;
    width: 1.8rem;
  }

  :hover {
    border: 1px solid #a1a1a1;
  }

  :first-child {
    background-color: ${(props) => (props.isActive ? "#defcef" : "")};
  }

  :last-child {
    background-color: ${(props) => (props.isActive ? "#ffe8e8" : "")};
  }
`;

export const Error = styled.span`
  font-size: 0.7rem;
  color: var(--red);
`;
