/* eslint-disable react/jsx-pascal-case */
import Agente_Risco from "./components/pages/agenteRisco";
import Controle_Exposicao from "./components/pages/controleExposicao";
import Controle_Protecao from "./components/pages/controleProtecao";
import Container from "./components/layout/Container";
import { useState } from "react";
import "./components/styles/Container.Module.css";
import { Button, Header } from "semantic-ui-react";
import  ToggleGroup from "./components/layout/button";
import { useDispatch } from "react-redux";

function App() {

  const [id, setType] = useState(1);
 

  return (
    <body>
      <Container className='container'>
          <div className="header" >
            <Header as="h2"> &nbsp; Editar Risco</Header>
            <ToggleGroup class="ui divider" updateSelecao={setType} />
          </div>
          <div className="content">
            { id === 1 && <Agente_Risco/> }
            { id === 2 &&  <Controle_Exposicao/> }
            { id === 3 && <Controle_Protecao/> }
          </div>
      </Container>
    </body>
  );
}

export default App;

//