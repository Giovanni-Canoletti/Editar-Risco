import { Input } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'
import {useState} from 'react'
import { Form } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
// import { update } from '../redux/slice'

function Controle_protecao() {

    const options = [
        { key: 'n', text: 'Não se Aplica', value: 'nao se aplica' },
        { key: 'u', text: 'Utiliza', value: 'utiliza' },
        { key: 'o', text: 'Outros', value: 'outro' },
      ]

    // const [object] = useState(useSelector(store => store.Controle_Protecao))

    /*const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(update(object))
    }
*/

    const [object, setObject] = useState ( {descricao:''} )

    return (
        <div className='display_content'>
            <div class="flexbox-item-1">Descrição</div>
            <Input type="text" value={object.descricao} 
            onChange={(e) => ({...object, descricao: e.target.value})} fluid />
            <div class="flexbox-item-2">Utiliza EPC</div>
            <div className='EPC'>
            <Form.Select
            options={options}/>
            <Checkbox label='EPC Eficaz' />
            </div>
            <div class="flexbox-item-3">Utiliza EPI</div>
            <div>
            <Form.Select
            options={options} />
            </div>
        </div>
    )
}

export default Controle_protecao
