import InputMask from "react-input-mask";
import styled from "styled-components";
import { useState } from "react";
import '../../Card/Global.css'
import axios from "axios";

const InputLogin = styled.input`
  &::placeholder {
    color: #fff; /* Define a cor branca */
}
`

const InputPassword = styled.input`
  &::placeholder {
    color: #fff;
}
`

export const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`http://localhost:8089/user/consult/{id}}`)
      .then((response) => {
        setUser(response.data);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("Login ou senha incorretos");
        setUser(null);
      });
  };

  const handleRegisterButtonClick = () => {
    window.location.href = "/register";
  };

  return (
    <div className ='whiteDiv'>
      <h1 className="fisrtLabeTxt">Faça login na sua conta</h1>
      {user ? (
        <>
          <p>Seus dados:</p>
          <ul>
            <li>Nome: {user.name}</li>
            <li>Login: {user.login}</li>
            <li>CPF: {user.cpf}</li>
          </ul>
        </>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <InputLogin
            className="inputLogin"
            id="login"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            placeholder="Email"
          />

          <InputPassword
          className="inputPassword"
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Senha"
          />

          <button className="loginButton" type="submit">Entrar</button>

          {errorMessage && <p>{errorMessage}</p>}
        </form>
      )}
      <div className ='blueDiv'>
      <button className="loginButton" onClick={handleRegisterButtonClick}>
        Registre</button>            
        </div>
        </div>
)}
