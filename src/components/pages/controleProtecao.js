import { Input } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'
import {useEffect, useState} from 'react'
import { Form } from 'semantic-ui-react'
import { DisplayContent, EPC } from '../styles/contentStyles'

/* import { useDispatch, useSelector } from 'react-redux'
import { setAgenteAtual } from '../redux/editarRiscoReducer'
import { update } from '../redux/slice'
*/

function Controle_Protecao({data, updateDataHandler}) {

    const options = [
        { key: 'n', text: 'Não se Aplica', value: 'nao se aplica' },
        { key: 'u', text: 'Utiliza', value: 'utiliza' },
        { key: 'o', text: 'Outros', value: 'outro' },
      ]

      const [object, setObject] = useState(data);

      useEffect(() => {
          updateDataHandler(object);
      }, [object, updateDataHandler]);


    return (
        <DisplayContent>
            <div> Descrição </div>
            <Input type="text"  value={object.descricao3} 
                onChange={(e) => (setObject({...object, descricao3: e.target.value}))} fluid />
                <br/>
            <div> Utiliza EPC </div>
            <EPC>
                <Form.Select
                options={options}/>
                <Checkbox label='EPC Eficaz' />
            </EPC>
                <br/>
            <div>Utiliza EPI</div>
            <div>
            <Form.Select
            options={options} />
            </div>            
        </DisplayContent>
    )
}

export default Controle_Protecao

    // const [object, setObject] = useState ( {descricao:''} )
