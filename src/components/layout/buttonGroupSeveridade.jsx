import {  useState } from 'react'
import * as Style from '../styles/buttonStylesGeneral'

export default function SeveridadeButtons({updateValueHandler}) {

  const [options] = useState( [ { type: "BAIXA", id: 1}, { type: "MÉDIA", id: 2}, { type: "ALTA", id: 3} ] );

  const [active, setAtivo] = useState();

  return (
    <div>
      {options.map((option) =>
          <Style.ButtonToggle ativo={active === option.id} value={option.id}
            onClick={(e) => { setAtivo(option.id); updateValueHandler(e.target.value) } } >
            {option.type}
          </Style.ButtonToggle>
      )}
    </div>
  );
}