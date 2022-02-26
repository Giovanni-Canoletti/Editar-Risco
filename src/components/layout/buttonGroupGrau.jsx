import { useState } from 'react';
import { ButtonToggle } from '../styles/buttonStylesOrange';

export default function Group({updateSelecao}) {

  const [options] = useState( [ { type: "BAIXO", id: 1}, { type: "MÉDIO", id: 2}, { type: "ALTO", id: 3} ] );

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

