import { Estilos } from "./componetes/EstilosGloais/Estilos";
import { Card } from "./componetes/Card/Register/RegisterCard"
import { ProvedorTema } from "./componetes/ProvedorTema/ProvedorTema";
/*import { LogInButton } from "./componetes/Card/Login/LoginStyled";*/
/*import { LoginPage } from "./componetes/Card/Login/LoginCard";*/

function App() {

  /*const handleLoginButtonClick = () => {
    window.location.href = "/LoginPage"; // Redireciona para a página de login
  };*/


/*<LogInButton onClick={handleLoginButtonClick}>ENTRAR</LogInButton>*/


  return (
    <ProvedorTema>
      <Estilos></Estilos>
        <Card>
          
        </Card>
      
    </ProvedorTema>
  );
}

export default App;
