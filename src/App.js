import { Estilos } from "./componetes/ProvedorTema/Estilos";
import { RegisterPage } from "./componetes/Card/Register/RegisterCard"
import { LoginPage } from "./componetes/Card/Login/LoginCard"
import { HomePage } from "./componetes/Card/Home/HomeCard";
import { ProvedorTema } from "./componetes/ProvedorTema/ProvedorTema";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutPage } from "./componetes/Card/About/AboutCard";
import { UserPage } from "./componetes/Card/User/UserCard";

function App() {


  return (
  <ProvedorTema>
    <Estilos/>
        <Router>
          <Routes>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/user" element={<UserPage/>}/>
          </Routes>
        </Router>
  </ProvedorTema>   
  );
}

export default App;
