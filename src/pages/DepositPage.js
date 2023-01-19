import React from "react";
import styled from "styled-components";
import { ButtonForm } from "../components/Buttonform";
import { Container } from "../components/Container";
import { Input } from "../components/Input";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DepositPage() {
  const [depositForm, setDepositForm] = useState({
    amount: "",
    description: "",
  });

  return (
    <>
      <Container>
        <Header>Nova entrada</Header>
        <Input
          name="amount"
          placeholder="Valor"
          data-test="registry-amount-input"
          value={depositForm.amount}
          onChange={(e) =>
            setDepositForm({ ...depositForm, [e.target.name]: e.target.value })
          }
          type="number"
        />
        <Input
          name="description"
          placeholder="Descrição"
          data-test="registry-name-input"
          value={depositForm.description}
          onChange={(e) =>
            setDepositForm({ ...depositForm, [e.target.name]: e.target.value })
          }
          type="text"
        />
        <Link to="/wallet">
          <ButtonForm data-teste="resgistry-save">Salvar entrada</ButtonForm>
        </Link>
      </Container>
    </>
  );
}

const Header = styled.div`
  width: 320px;
  height: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: 700;
  font-size: 28px;
  margin: 20px 0;
`;
