import React, { useState } from "react";
import { Container } from "../components/Container";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { Input } from "../components/Input";
import { ButtonForm } from "../components/Buttonform";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/urls";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpPage() {
  const [signUpForm, setsingUpForm] = useState({
    name: "",
    email: "",
    password: "",
    Cpassword: "",
  });
  const body = {
    nome: signUpForm.nome,
    email: signUpForm.email,
    senha: signUpForm.senha,
    Cpassword: signUpForm.Cpassword,
  };
  const navigate = useNavigate();
  function signRequest(e) {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/sign-up`, body)
      .then((resp) => {
        console.log(resp);

        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <>
      <Container>
        <Logo src={logo} alt="logo" />
        <Form onSubmit={signRequest}>
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
            name="password"
            placeholder="Senha"
            data-test="password"
            value={signUpForm.password}
            onChange={(e) =>
              setsingUpForm({ ...signUpForm, [e.target.name]: e.target.value })
            }
            type="password"
          />
          <Input
            name="Cpassword"
            placeholder="Confirme a Senha"
            data-test="conf-password"
            value={signUpForm.Cpassword}
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
