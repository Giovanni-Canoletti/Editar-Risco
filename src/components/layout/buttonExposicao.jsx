import { useState } from 'react';
import { ButtonToggle } from '../styles/buttonExposicaoStyles';

export default function Group({updateSelecao}) {

  const [options] = useState( [ { type: "AUSENTE", id: 1} ] );

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

