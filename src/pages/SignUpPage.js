import React, { useState } from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { Input } from "../components/Input";
import { ButtonForm } from "../components/Buttonform";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [signUpForm, setsingUpForm] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });

  return (
    <>
      <Container>
        <Logo src={logo} alt="logo" />
        <Form>
          <Input
            name="name"
            placeholder="Nome"
            data-test="name"
            value={signUpForm.name}
            onChange={(e) =>
              setsingUpForm({ ...signUpForm, [e.target.name]: e.target.value })
            }
            type="text"
          />
          <Input
            name="email"
            placeholder="E-mail"
            data-test="email"
            value={signUpForm.email}
            onChange={(e) =>
              setsingUpForm({ ...signUpForm, [e.target.name]: e.target.value })
            }
            type="email"
          />
          <Input
            name="email"
            placeholder="Senha"
            data-test="password"
            value={signUpForm.password}
            onChange={(e) =>
              setsingUpForm({ ...signUpForm, [e.target.name]: e.target.value })
            }
            type="password"
          />
          <Input
            name="email"
            placeholder="Confirme a Senha"
            data-test="conf-password"
            value={signUpForm.cPassword}
            onChange={(e) =>
              setsingUpForm({ ...signUpForm, [e.target.name]: e.target.value })
            }
            type="password"
          />
          <ButtonForm data-test="sign-up-submit">Cadastrar</ButtonForm>
        </Form>
        <Link to={"/wallet "}>
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
  flex-direction: column;
`;
const LinkSign = styled.h3`
  margin-top: 20px;
  font-size: 17px;
  line-height: 16px;
`;
