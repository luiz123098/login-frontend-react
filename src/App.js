import { Card } from "./componetes/Card/LeftCard";
import { RigthCard } from "./componetes/Card/RigthCard";
import { Estilos } from "./componetes/EstilosGloais/Estilos";

function App() {
  return (
    <div>
      <Estilos/>
      <RigthCard>
      </RigthCard>
      <Card>
        <h1>Registro de Novos Usuarios</h1>
      </Card>
      
    </div>
  );
}

export default App;
