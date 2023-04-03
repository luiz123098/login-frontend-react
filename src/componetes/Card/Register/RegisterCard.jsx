import styled from "@emotion/styled"
import InputMask from "react-input-mask";
import { useState } from "react";
import axios from "axios";
import './RegisterStyle.css';
import '../../Card/Global.css'
  
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

const InputName = styled.input`
  &::placeholder {
    color: #fff;
}
`

const InputCPF = styled(InputMask)`
  &::placeholder {
    color: #fff;
  }
}`

export const RegisterCard = ({ children }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [message, setMessage] = useState("");

  const handleLoginButtonClick = () => {
    window.location.href = "/login";
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      login: login,
      password: password,
      name: name,
      cpf: cpf,
    };

    setMessage("");

    axios
      .post("http://localhost:8089/user/register", newUser)
      .then((response) => {
        setMessage(response.data.message)
      }).catch((error) => {
        setMessage(error.response.data.message)
      });
  };


  return (
    <div className="whiteDiv">
      <label className="fisrtLabeTxt">Crie sua Conta</label>
      {message && <p className="message">{message}</p>}
      <label className="secondlabel">Preencha o formuário</label>
    
      <form onSubmit={handleFormSubmit}>

         <InputLogin
          className="inputLogin"
          id="login"
          value={login}
          placeholder="email"
          onChange={(event) => setLogin(event.target.value)}
        />

        <InputPassword
          className="inputPassword"
          id="password"
          value={password}
          placeholder="senha"
          onChange={(event) => setPassword(event.target.value)}
        />
        <InputName
          className="inputName"
          id="name"
          value={name}
          placeholder="nome"
          onChange={(event) => setName(event.target.value)}
        />
        <InputCPF
        className="inputCPF"
          mask="999.999.999-99"
          value={cpf}
          placeholder="CPF"
          onChange={(event) => setCpf(event.target.value)}
        /> 
        <button className="registerButton" type="submit">CADASTRAR</button>
      </form>
      <div className="blueDiv">
        <label className="trhirdLabel">Seja Bem Vindo!</label>
        <label className= "forfthLabel">Acesse sua Conta agora mesmo.</label>
        <button className="loginButton" onClick={handleLoginButtonClick}>Ir para Login</button>    
        
        {children}
      </div>
    </div>
  );
};  