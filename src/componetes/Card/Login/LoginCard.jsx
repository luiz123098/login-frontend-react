import React from 'react';
import styled from 'styled-components';

const LoginDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

`


const LoginPage = () => {
  return (
    <div>
      <LoginDiv>Login Page</LoginDiv>
      {/* Aqui vão os elementos do formulário de login */}
    </div>
  );
}

export default LoginPage;
