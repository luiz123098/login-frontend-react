import "./AboutStyle.css"

export const AboutPage = () => {
    return(
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
  <label className="Label">
    Sobre A empresa
  </label>
  <div className="blueDiv"></div>
        <label className="labelw">infos</label>
        </div>
        </div>
    )
}