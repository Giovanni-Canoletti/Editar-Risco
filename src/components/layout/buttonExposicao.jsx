import { useEffect, useState } from 'react'
import * as Style from '../styles/buttonExposicaoStyles'
// import SeveridadeButtons from './buttonGroupSeveridade'
// import ProbabilidadeButtons from './buttonGroupProbabilidade'

export default function ExposicaoButton({ grauExposicao, probabilidade, severidade }) {

  const [type, setType] = useState();

  const [value, setValue] = useState();

  useEffect(() => {
    const grauExposicao = probabilidade * severidade;
    switch(grauExposicao) {
      default:
        setType('AUSENTE')
        setValue(0)
        break;
      case 1:
        setType('ACEITÁVEL')
        setValue(1)
        break;
      case 2:
        setType('ACEITÁVEL')
        setValue(2)
        break;
      case 3:
        setType('ACEITÁVEL')
        setValue(3)
        break;
      case 4:
        setType('ACEITÁVEL')
        setValue(4)
        break;
      case 6:
         setType('SUBSTANCIAL')
         setValue(5)
        break;
      case 9:
        setType('INTOLERÁVEL')
        setValue(6)
        break;
    }
  }, [ grauExposicao, probabilidade, severidade ] );
  
  return (
    <div>
        < Style.ButtonToggle colors={value}>
          {type}
        </ Style.ButtonToggle>
    </div>
  );
}