import { useState } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default function ConfirmModal() {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button color='orange'>Salvar Modal</Button>}
    >
      <Header icon>
        <Icon name='archive' />
        Archive Old Messages
      </Header>
      <Modal.Content>
        <p>
          Deseja salvar o conteúdo?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}



/* import { useState } from 'react'
import { ButtonToggle } from '../styles/buttonStyles'
// import { useDispatch, useSelector } from 'react-redux'
// import { setAgenteAtual } from '../redux/editarRiscoReducer'


export default function Save({updateSelecao}) {

  const [options] = useState( [ { type: "Salvar", id: 1}, { type: "Cancelar", id: 2} ] );

  const [active, setAtivo] = useState(1);

  return (
    <>
      <div>
        {options.map((option) =>
          <>
            <ButtonToggle ativo={active === option.id} onClick={() => { setAtivo(option.id); updateSelecao(option.id) } }>
              {option.type}
            </ButtonToggle>
          </>
        )}
      </div>
    </>
  );
}
*/