import { Estilos } from "./componetes/EstilosGloais/Estilos";
import { RegisterCard } from "./componetes/Card/Register/RegisterCard"
import { LoginPage } from "./componetes/Card/Login/LoginCard"
import { ProvedorTema } from "./componetes/ProvedorTema/ProvedorTema";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*import { LogInButton } from "./componetes/Card/Login/LoginStyled";*/
/*import { LoginPage } from "./componetes/Card/Login/LoginCard";*/

function App() {

  /*const handleLoginButtonClick = () => {
    window.location.href = "/LoginPage"; // Redireciona para a página de login
  };*/

/*<LogInButton onClick={handleLoginButtonClick}>ENTRAR</LogInButton>*/



  return (
<ProvedorTema>
  <Estilos/>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterCard/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </Router>
</ProvedorTema>      
  );
}

export default App;
