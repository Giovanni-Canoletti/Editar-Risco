/* eslint-disable react/jsx-pascal-case */
import Agente_Risco from './components/pages/agenteRisco'
import Controle_Exposicao from './components/pages/controleExposicao'
import Controle_Protecao from './components/pages/controleProtecao'
import { useState } from 'react'
import './components/styles/Container.Module.css'
import { Button, Header } from 'semantic-ui-react'
import  ToggleGroup from './components/layout/button'
import { useDispatch, useSelector } from 'react-redux'
import { setAgenteAtual } from './components/redux/editarRiscoReducer'
import { Container, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Salvar } from './components/styles/contentStyles'

function App() {

  const [open, setOpen] = useState(false)

  const [objectStore] = useState(useSelector(store => store.agenteRisco.agenteAtual))
  const [object, setObject] = useState(objectStore);
 
  const [id, setType] = useState(1);

  const dispatch = useDispatch();

  const update = (e) => {
    e.preventDefault();
    dispatch(setAgenteAtual(object))
  }

  return (
    <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<Button primary>Editar Risco</Button>}
    >
      <Container>
        <Modal.Header>
          <Header as="h2"> &nbsp; Editar Risco </Header>
          <ToggleGroup updateSelecao={setType} />
          <div class='ui divider'></div>
        </Modal.Header>
        <Modal.Content>
          { id === 1 && <Agente_Risco data={object} updateDataHandler={setObject} />}
          { id === 2 &&  <Controle_Exposicao data={object} updateDataHandler={setObject} /> }
          { id === 3 && <Controle_Protecao data={object} updateDataHandler={setObject} /> }
        </Modal.Content>
        <Modal.Actions>
          <Salvar>
            <div class='ui divider'></div>
            <Button color='orange' onClick={() => update}>Salvar</Button>
            <Button onClick={() => setOpen(false)}>Cancelar</Button>
          </Salvar>
        </Modal.Actions>            
      </Container>
    </Modal>
  
  );
}

export default App;