import "./HomeStyled.css";

export const HomePage = () => {
    return(
<div>
<nav>
  <ul>
        <li><a href="/">Página Inicial</a></li>
        <li><a href="/about">Sobre Nós</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Registre-se</a></li>
        <li><a href="/user">User</a></li>
  </ul>
</nav>
<div class="conteudo">
<label>Conteudo</label>
</div>
</div>
    )
}