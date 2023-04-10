import "./HomeStyled.css";
import { useState } from "react";
import {isLoggedIn } from "localStorage.getItem(isLoggedIn)";

export const HomePage = () => {

  const logout = () => {
    isLoggedIn(false);
  }


    return(
<div>
<nav>
  <ul>
    <li><a href="/">Página Inicial</a></li>
    <li><a href="/about">Sobre Nós</a></li>
    {sessionStorage.getItem(isLoggedIn) ? (
      <>
        <li><a href="/profile">{userData.name}</a></li>
        <li><button onClick={logout}>Logout</button></li>
      </>
    ) : (
      <>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Registre-se</a></li>
      </>
    )}
  </ul>
</nav>
<div class="conteudo">
<label>Conteudo</label>
</div>
</div>
    )
}