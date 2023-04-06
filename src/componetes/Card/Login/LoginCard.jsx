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
  const [userDTO, setUserDTO] = useState({ login: '', password: '' });
  const [message, setMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    setMessage('');
  
    axios.get(`http://localhost:8089/login`, { params: userDTO })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDTO((prevUserDTO) => ({ ...prevUserDTO, [name]: value }));
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
      {message && <p className="memessageLoginPagessage">{message}</p>}
      <label className="secondlabelLoginPage">Preencha o formulário</label>

      <form onSubmit={handleFormSubmit}>
        <InputLogin
          className="inputLoginLoginPage"
          id="login"
          name="login"
          value={userDTO.login}
          onChange={handleInputChange}
          placeholder="Email"
        />

        <InputPassword
          className="inputPasswordLoginPage"
          id="password"
          name="password"
          type="password"
          value={userDTO.password}
          onChange={handleInputChange}
          placeholder="Senha"
        />

        <button className="logInButtonLoginPage" type="submit">
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

