import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import logo from "../assets/images/logo.svg";
import { Input } from "../components/Input";
import { ButtonForm } from "../components/Buttonform";
import { Link } from "react-router-dom";

export default function SignInPage() {
  return (
    <>
      <Container>
        <Logo src={logo} alt="logo" />
        <Form>
          <Input
            placeholder="E-mail"
            data-test="email"
            
            
            type="email"
          />
          <Input
            placeholder="Senha"
            data-teste="password"
            
            
            type="password"
          />
          <ButtonForm>Entrar</ButtonForm>
        </Form>
        <Link>
            <LinkSign>Não possuí uma conta? Cadastre-se</LinkSign>
        </Link>
      </Container>
    </>
  );
}

const Logo = styled.img`
  margin-bottom: 25px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LinkSign = styled.h3`
    margin-top: 20px;
    font-size: 17px;
    line-height: 16px;
`;