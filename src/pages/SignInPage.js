import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import logo from "../assets/images/logo.svg";
import { Input } from "../components/Input";
import { ButtonForm } from "../components/Buttonform";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/urls";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignInPage() {
  const [signInForm, setsignInForm] = useState({
    email: "",
    password: "",
  });
  const { userToken, setUserToken, userNome, setUserNome } =
    useContext(UserContext);
  const navigate = useNavigate();

  function logRequest(e) {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/sign-in`, signInForm)
      ?.then((res) => {
        console.log("logou", res);
        localStorage.setItem("tokenData", JSON.stringify(res.token));
        setUserToken(JSON.parse(localStorage.getItem("tokenData")));
        setUserNome(res);
        navigate("/wallet");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  }

  return (
    <>
      <Container>
        <Logo src={logo} alt="logo" />
        <Form onSubmit={logRequest}>
          <Input
            name="email"
            placeholder="E-mail"
            data-test="email"
            value={signInForm.email}
            onChange={(e) =>
              setsignInForm({ ...signInForm, [e.target.name]: e.target.value })
            }
            type="email"
          />
          <Input
            name="password"
            placeholder="Senha"
            data-teste="password"
            value={signInForm.password}
            onChange={(e) =>
              setsignInForm({ ...signInForm, [e.target.name]: e.target.value })
            }
            type="password"
          />
          <ButtonForm data-test="sign-in-submit">Entrar</ButtonForm>
        </Form>
        <Link to={"/signUp"}>
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
