import { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import ExposicaoButton from '../layout/buttonExposicao'
import SeveridadeButtons from '../layout/buttonGroupSeveridade'
import ProbabilidadeButtons from '../layout/buttonGroupProbabilidade'
import { Input } from 'semantic-ui-react'
import { DisplayContent, FlexButtons } from '../styles/contentStyles'
/* import { update } from '../redux/slice'
import { Button } from 'semantic-ui-react'
import { setAgenteAtual } from '../redux/editarRiscoReducer'
import { useDispatch, useSelector } from 'react-redux'
*/

function Controle_exposicao({ data, updateDataHandler }) {

    const [object, setObject] = useState(data);

    useEffect(() => {
        updateDataHandler(object);
    }, [object, updateDataHandler]);

    const options = [
        { key: 'n', text: 'Nenhum', value: 'nenhum' },
        { key: 'c', text: 'Contato dermal', value: 'contato dermal' },
        { key: 'o', text: 'Outros', value: 'outro' },
    ]

    return (
        <DisplayContent>
            <div> Descrição </div>
                <Input type="text" value={object.descricao2} 
                onChange={(e) => (setObject({...object, descricao2: e.target.value}))} fluid />
                    <br/>
                <FlexButtons>
                    <div> Probalidade <ProbabilidadeButtons updateValueHandler={(value) => setObject( {...object, probabilidade: value} ) } /> </div>
                    <div> Severidade <SeveridadeButtons updateValueHandler={(value) => setObject( {...object, severidade: value} ) } /> </div>
                    <div> &nbsp; Grau de Exposição <ExposicaoButton probabilidade={object.probabilidade} severidade={object.severidade} /> </div>
                </FlexButtons>
                    <br/>
            <div> Tipo de Exposição </div>
            <div>
                <Form.Select
                options={options}/>
            </div>
                <br/>
            <div> Resultado da Exposição </div>
                <Input type="text" value={object.resultadoExposicao} 
                onChange={(e) => (setObject({...object, resultadoExposicao: e.target.value}))} fluid />
        </DisplayContent>
    )
}

export default Controle_exposicao

/*
const [objeto, setObject] = useState ( {descricao:''}, {tipoExposicao:''}, {resultadoExposicao:''} )
const [objectStore] = useState(useSelector(store => store.agenteRisco.agenteAtual))
    const [object, setObject] = useState(objectStore);

    const dispatch = useDispatch();

    const update = (e) => {
        e.preventDefault();
        dispatch(setAgenteAtual(object))
    }
*/