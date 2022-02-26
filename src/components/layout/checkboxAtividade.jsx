import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Checkbox } from 'semantic-ui-react'
//import { setAgenteAtual } from '../redux/agenteRiscoReducer'

export default function CheckboxAtividade({data, onCheckHandler}) {
    
  const [objectStore] = useState(useSelector(store => store.agenteRisco.agenteAtual))
  const [object, setObject] = useState(objectStore);

  return (
    <>
      <p></p>
        <Checkbox
          radio
          label='Ausente &nbsp;'
          value='Ausente'
          checked={data === 'Ausente'}
          onChange={(e, data) => onCheckHandler(data.value)}
        />

        <Checkbox
          radio
          label='Rotineira &nbsp;'
          value='Rotineira'
          checked={data === 'Rotineira'}
          onChange={(e, data) => onCheckHandler(data.value)}
        />

       <Checkbox
        radio
        label='Não Rotineira &nbsp;'
        value='Não Rotineira'
        checked={data === 'Não Rotineira'}
        onChange={(e, data) => onCheckHandler(data.value)}
        />
    </>
  )
}


/* import { useState } from 'react';
import { Checkbox } from 'semantic-ui-react'

export function Check({updateSelecao}) {

  const [options] = useState( [ { type: "Ausente", id: 1}, { type: "Rotineira", id: 2}, { type: "Não Rotineira", id: 3} ] );

  const [active] = useState();

  return (
    <>
      <div>
        {options.map((option) =>
          <>
            <Checkbox ativo={active === option.id} onClick={() => { updateSelecao(option.id) } }>
              {option.type}
            </Checkbox>
          </>
        )}
      </div>
    </>
  );
}
*/
