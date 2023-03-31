import styled from "@emotion/styled"
import InputMask from "react-input-mask";
import { useState } from "react";
import axios from "axios";
import { stringify } from "json5";

const BlueDiv = styled.div`
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

const WhiteDiv = styled.div`
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

const InputLogin = styled.input`
position: absolute;
width: 50%;
height: 8%;
left: 40%;
top: 20%;
background: #4651ea;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;
padding: 2%;
font-size: 16px;
color: #fff;
border: none;
outline: none;

&::placeholder {
  color: #fff;
}
`

const InputPassword = styled.input`
position: absolute;
width: 50%;
height: 8%;
left: 40%;
top: 35%;
background: #4651ea;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;
padding: 2%;
font-size: 16px;
color: #fff;
border: none;
outline: none;

&::placeholder {
  color: #fff;
}
`

const InputName = styled.input`
position: absolute;
width: 50%;
height: 8%;
left: 40%;
top: 50%;
background: #4651ea;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;
padding: 2%;
font-size: 16px;
color: #fff;
border: none;
outline: none;

&::placeholder {
  color: #fff;
}
`

const InputCPF = styled(InputMask)`
  position: absolute;
  width: 50%;
  height: 8%;
  left: 40%;
  top: 65%;
  background: #4651ea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  padding: 2%;
  font-size: 16px;
  color: #fff;
  border: none;
  outline: none;

  &::placeholder {
    color: #fff;
  }
  const handleChange = (event) => {
    onChange(event.target.value);
  };
}`
const RegisterButton = styled.button`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(30%);
  width: 20%;
  height: 8%;
  background-color: #000CB2;
  border: none;
  border-radius: 40px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: #3140b3;
  }
`

const FisrtLabeTxt = styled.h1`
position: absolute;
width: 30%;
height: 10%;
left: 50%;
top: 4%;

background-color: transparent;

font-style: normal;
font-weight: 800;
font-size: 120%;
line-height: 100%;
text-align: center;
`

const SecondLabel = styled.h6`
position: absolute;
width: 30%;
height: 10%;
left: 50%;
top: 7%;

background-color: transparent;

font-style: normal;
font-weight: 400;
font-size: 120%;
line-height: 100%;
text-align: center;
`

const Message = styled.p`
position: absolute;
width: 100%;
height: 10%;
left: 15%;
top: 7%;

background-color: transparent;

font-style: normal;
font-weight: 400;
font-size: 120%;
line-height: 100%;
text-align: center;
`

const TrhirdLabel = styled.h1`
position: absolute;
width: 100%;
height: 0%;
left: 0%;
top: 40%;

color: white;
background-color: transparent;

font-style: normal;
font-weight: 800;
font-size: 150%;
line-height: 100%;
text-align: center;
`

const ForfthLabel =styled.h4`
position: absolute;
width: 80%;
height: 0%;
left: 10%;
top: 46%;

color: white;
background-color: transparent;

font-style: normal;
font-weight: 500;
font-size: 100%;
line-height: 100%;
text-align: center;
`
export const Card = ({ children }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [message, setMessage] = useState("");

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
    <WhiteDiv>
      <FisrtLabeTxt>Crie sua Conta</FisrtLabeTxt>
      <SecondLabel>Preencha o formuário</SecondLabel>
      {message && <Message>{message}</Message>}
    
      <form onSubmit={handleFormSubmit}>
        <InputLogin
          id="login"
          value={login}
          placeholder="email"
          onChange={(event) => setLogin(event.target.value)}
        />
        <InputPassword
          id="password"
          value={password}
          placeholder="senha"
          onChange={(event) => setPassword(event.target.value)}
        />
        <InputName
          id="name"
          value={name}
          placeholder="nome"
          onChange={(event) => setName(event.target.value)}
        />
        <InputCPF
          mask="999.999.999-99"
          value={cpf}
          placeholder="CPF"
          onChange={(event) => setCpf(event.target.value)}
        />
        <RegisterButton type="submit">CADASTRAR</RegisterButton>

      </form>
      <BlueDiv>
        <TrhirdLabel>Seja Bem Vindo!</TrhirdLabel>
        <ForfthLabel>Acesse sua Conta agora mesmo.</ForfthLabel>
        
        {children}
      </BlueDiv>
    </WhiteDiv>
  );
};