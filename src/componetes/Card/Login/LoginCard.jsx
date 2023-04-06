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
  const [message, setMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios.get(`http://localhost:8089/user/login`, { login, password })
      .then((response) => {
        setMessage('Login bem sucedido');
        // vai pro home IHUUUUUU
        window.location.href = '/home';
      })
      .catch((error) => {
        setMessage('Ocorreu um erro ao entrar');
      });
  };
  
  const handleRegisterButtonClick = () => {
    window.location.href = '/register';
  };

  return (
    <div>
    <nav>
<ul>
  <li><a href="/">Página Inicial</a></li>
  <li><a href="/about">Sobre Nós</a></li>
  <li><a href="/login">Login</a></li>
  <li><a href="/register">Registre-se</a></li>
</ul>
</nav>

    <div className="whiteDiv">
      <h1 className="fisrtLabeTxtLoginPage">Faça login na sua conta</h1>
      <label className="secondlabelLoginPage">Preencha o formulário</label>
        

      <form onSubmit={handleFormSubmit}>
        <InputLogin
          className="inputLoginLoginPage"
          id="login"
          name="login"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          placeholder="Email"
        />

        <InputPassword
          className="inputPasswordLoginPage"
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Senha"
        />
        {message && <p className="messageLogin">{message}</p>}
        <button className="logInButtonLoginPage" 
        onClick={handleFormSubmit}
        type="submit">
          Entrar
        </button>
      </form>
      <div className="blueDiv">
      

        <label className="trhirdLabelLoginPage">Seja Bem Vindo!</label>
        <label className="forfthLabelLoginPage">
          Acesse sua Conta agora mesmo.
        </label>
        <label className="fifthLabelLoginPage">
          É novo?
          <br />
          crie sua conta aqui
        </label>
        <button
          className="registerButtonLoginPage"
          onClick={handleRegisterButtonClick}
        >
          Registre
        </button>
      </div>
    </div>
    </div>
  );
};

