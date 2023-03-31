import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export const BlueDiv = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;

width: 30%;
height: 100%;
margin: auto;
justify-content: center;
align-items: center;

left: -70%;
top: 0%;

background: #000CB2;
border-radius: 40px 0px 0px 16px;
`

export const WhiteDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 90%;
  margin: auto;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`

const LoginPage = () => {
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
    <div className={WhiteDiv}>
      <h1>Faça login na sua conta</h1>
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
          <label htmlFor="login">Login:</label>
          <input
            id="login"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          />

          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Entrar</button>

          {errorMessage && <p>{errorMessage}</p>}
        </form>
      )}
      <div className={BlueDiv}>
      <button onClick={handleRegisterButtonClick}>
        Ainda não tem uma conta? Registre</button>            
        </div>
        </div>
)}

export default LoginPage