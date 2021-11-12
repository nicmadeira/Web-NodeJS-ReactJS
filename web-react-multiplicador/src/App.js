import './App.css';
import { Container } from 'react-bootstrap';
import Numero from './componentes/forms';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Multiplicador de Números</h1>
          <Container fluid>
            <Numero />
          </Container>
      </header>
    </div>
  );
}

export default App;
