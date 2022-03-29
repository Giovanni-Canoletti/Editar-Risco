import { useState } from 'react'
import * as Style from '../styles/buttonStylesHeader'

export default function ToggleGroup({updateSelecao}) {

  const [options] = useState( [ { type: "Agente Risco", id: 1}, { type: "Controle Exposição", id: 2}, { type: "Controle Proteção", id: 3} ] );

  const [active, setAtivo] = useState(1);

  return (
    <div>
      {options.map((option) =>
          <Style.ButtonToggle ativo={active === option.id} onClick={() => { setAtivo(option.id); updateSelecao(option.id) } }>
            {option.type}
          </Style.ButtonToggle>
      )}
    </div>
  );
}

/*
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <a href="/agente_risco" onClick={handleClick}>
    </a>
  );
}

class ButtonExampleToggle extends Component {
  state = {}
  Click = () =>
    this.setState((prevState) => ({ active: !prevState.active }))

  render() {
    const { active } = this.state

    return (
      <>
      <Link to="/agente_risco">
        <Button toggle active={active} onClick={this.Click}>
          Agente Risco
        </Button>
      </Link>
      <Link to="/controle_exposicao">
        <Button toggle active={active} onClick={this.Click}>
          Controle Exposicao
        </Button>
      </Link>
      <Link to="/controle_protecao">
        <Button toggle active={active} onClick={this.Click}>
          Controle Proteção
        </Button>
      </Link>
      </>
    )
  }
}
*/