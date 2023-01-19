import React from "react";
import { Container } from "../components/Container";
import voltar from "../assets/images/voltar.svg";
import styled from "styled-components";
import { primaryColor } from "../constants/colors";
import deposito from "../assets/images/deposito.svg";
import saque from "../assets/images/saque.svg";
import { Link } from "react-router-dom";

export default function WalletPage() {
  return (
    <>
      <Container>
        <StyledHeader>
          <h1 data-test="user-name">Olá, nome-do-usuario</h1>
          <Link to="/">
            <img src={voltar} alt="voltar" data-test="logout" />
          </Link>
        </StyledHeader>
        <Display></Display>
        <BtnContainer>
          <Link to="/deposit">
            <WalletBtn data-test="new-income">
              <img src={deposito} alt="deposito" />
              <h1>Nova entrada</h1>
            </WalletBtn>
          </Link>
          <Link to="/withdraw">
            <WalletBtn data-test="new-expense">
              <img src={saque} alt="saque" />
              <h1>Nova saida</h1>
            </WalletBtn>
          </Link>
        </BtnContainer>
      </Container>
    </>
  );
}

const StyledHeader = styled.div`
  width: 370px;
  height: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: 700;
  font-size: 28px;
  margin: 20px 0;
`;
const Display = styled.div`
  width: 370px;
  height: 444px;
  border-radius: 7px;
  background-color: white;
  overflow-y: scroll;
`;
const WalletBtn = styled.button`
  width: 175px;
  height: 114px;
  margin: 17px 0;
  border-radius: 7px;
  background-color: ${primaryColor};
  cursor: pointer;
  font-weight: 700;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
`;
const BtnContainer = styled.div`
  width: 369px;
  height: 130px;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
`;
