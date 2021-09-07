import { useState, FormEvent, ChangeEvent } from "react";
import Modal from "react-modal";

import closeSvg from "assets/close.svg";
import outcomeSvg from "assets/outcome.svg";
import incomeSvg from "assets/income.svg";
import { Loading } from "components/Loading";
import { useTransaction } from "hooks/useTransaction";
import * as S from "./styles";
import utils from "utils";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const stylesModal = {
  overlay: {
    background: "rgba(0,0,0,0.7)",
  },
  content: {
    width: "390px",
    height: "460px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

const initialState = {
  title: "",
  amount: "",
  category: "",
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [isFilled, setIsFilled] = useState(false);
  const [type, setType] = useState("deposit");
  const [values, setValue] = useState(initialState);
  const { isLoading, createTransaction } = useTransaction();

  const isValid = () => {
    if (values.amount && values.category && values.title) {
      setIsFilled(false);
      return true;
    }

    setIsFilled(true);
    return false;
  };

  const clearState = () => {
    setValue(initialState);
    setType("deposit");
    setIsFilled(false);
  };

  const handleCloseModalNewTransaction = () => {
    clearState();
    onRequestClose();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const date = new Date();

    if (isValid()) {
      createTransaction({
        createdAt: utils.formattedDate(date.toString()),
        amount: Number(values.amount),
        category: values.category,
        title: values.title,
        type,
      });

      handleCloseModalNewTransaction();
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setValue({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      {isLoading && <Loading />}

      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick
        onRequestClose={handleCloseModalNewTransaction}
        contentLabel="Cadastrar transação"
        style={stylesModal}
      >
        <S.Content>
          <h2>Cadastrar transação</h2>

          <button type="button" onClick={handleCloseModalNewTransaction}>
            <img src={closeSvg} alt="Fechar modal" />
          </button>

          <S.Form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Título"
              name="title"
              value={values.title}
              onChange={onChange}
            />
            <input
              type="text"
              placeholder="Valor"
              name="amount"
              value={values.amount.replace(/\D/g, "")}
              onChange={onChange}
            />

            <S.Wrapper>
              <S.Button
                isActive={type === "deposit"}
                type="button"
                onClick={() => setType("deposit")}
              >
                <img src={incomeSvg} alt="Entrada" />
                Entrada
              </S.Button>
              <S.Button
                isActive={type === "withdrawn"}
                type="button"
                onClick={() => setType("withdrawn")}
              >
                <img src={outcomeSvg} alt="Saída" />
                Saída
              </S.Button>
            </S.Wrapper>

            <input
              type="text"
              placeholder="Categoria"
              name="category"
              value={values.category}
              onChange={onChange}
            />
            <button type="submit">
              {isLoading ? "Carregando..." : "Cadastrar"}
            </button>

            {isFilled && <S.Error>*Totos os campos são obrigatórios!</S.Error>}
          </S.Form>
        </S.Content>
      </Modal>
    </>
  );
}
