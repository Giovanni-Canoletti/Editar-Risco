import { Input } from 'semantic-ui-react'
// import { Button } from 'semantic-ui-react'
import { useState } from 'react'
import { Form } from 'semantic-ui-react'
import  ToggleGroup from "../layout/buttonGroupProbabilidade";
import Group from '../layout/buttonExposicao';

// import { useDispatch, useSelector } from 'react-redux'
// import { update } from '../redux/slice'

function Controle_exposicao() {

    const [objeto, setObject] = useState ( {descricao:''}, {tipoExposicao:''}, {resultadoExposicao:''} )

    // const [object] = useState(useSelector(store => store.Controle_Exposicao))

    /*const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(update(object))
    }
*/

    const options = [
        { key: 'c', text: 'Contato Dermal', value: 'contato dermal' },
        { key: 'n', text: 'Nenhum', value: 'nenhum' },
        { key: 'o', text: 'Outros', value: 'outro' },
      ]

    return (
        <div className='display_content'>
            <div>Descrição</div>
                <Input type="text" value={objeto.descricao} 
                onChange={(e) => setObject({...objeto, descricao: e.target.value})} fluid />
                <div className='flex-container'>
                    <div>Probalidade <ToggleGroup /></div>
                    <div>Severidade <ToggleGroup /></div>
                    <div > Grau de Exposição <Group /> </div>

                </div>
                    
            <div>Tipo de Exposição</div>
            <div>
                <Form.Select
                options={options}/>
            </div>
            <div class="flexbox-item-6">Resultado da Exposição</div>
                <Input type="text" value={objeto.resultado} 
                onChange={(e) => setObject({...objeto, resultado: e.target.value})} fluid />
        </div>
    
    )
}

export default Controle_exposicao
