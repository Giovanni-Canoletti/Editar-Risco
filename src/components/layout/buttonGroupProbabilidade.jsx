import { useState } from 'react';
import { ButtonToggle } from '../styles/buttonStylesOrange';

export default function ToggleGroup({updateSelecao}) {

  const [options] = useState( [ { type: "BAIXA", id: 1}, { type: "MÉDIA", id: 2}, { type: "ALTA", id: 3} ] );

  const [active, setAtivo] = useState();

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
