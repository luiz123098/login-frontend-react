import { Estilos } from "./componetes/ProvedorTema/Estilos";
import { RegisterPage } from "./componetes/Card/Register/RegisterCard"
import { LoginPage } from "./componetes/Card/Login/LoginCard"
import { HomePage } from "./componetes/Card/Home/HomeCard";
import { ProvedorTema } from "./componetes/ProvedorTema/ProvedorTema";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutPage } from "./componetes/Card/About/AboutCard";
import { Profile } from "./componetes/Card/Profile/ProfileCard";

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
            <Route path="/Profile" element={<Profile/>}/>
          </Routes>
        </Router>
  </ProvedorTema>   
  );
}

export default App;
