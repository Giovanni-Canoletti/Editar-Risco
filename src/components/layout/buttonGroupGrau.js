import { useEffect, useState } from 'react'
import * as Style from '../styles/buttonStylesGeneral'

export default function Group({updateSelecao}) {

  const [options] = useState( [ { type: "BAIXO", id: 1}, { type: "MÉDIO", id: 2}, { type: "ALTO", id: 3} ] );

  const [active, setAtivo] = useState();

  useEffect(() => {
    
  }, []);

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