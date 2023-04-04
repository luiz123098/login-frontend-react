import styled from "styled-components";
import { useState } from "react";
import '../../Card/Global.css'
import './LoginStyled.css'
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
      <h1 className ="fisrtLabeTxtLoginPage">Faça login na sua conta</h1>
      <label className ="secondlabelLoginPage">Preencha o formulário</label>
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
            className="inputLoginLoginPage"
            id="login"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            placeholder="Email"
          />

          <InputPassword
          className="inputPasswordLoginPage"
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Senha"
            />

          <button 
            className='logInButtonLoginPage' 
            type="submit">Entrar</button>

          {errorMessage && <p>{errorMessage}</p>}
        </form>
      )}
      <div className ='blueDiv'>
         <label className ="trhirdLabelLoginPage">Seja Bem Vindo!</label>
         <label className ="forfthLabelLoginPage">Acesse sua Conta agora mesmo.</label>
         <label className ="fifthLabelLoginPage">É novo?<br/>crie sua conta aqui</label>
         <button 
          className='registerButtonLoginPage' 
          onClick={handleRegisterButtonClick}>
          Registre</button>            
        
        </div>
        </div>
        
  )}
