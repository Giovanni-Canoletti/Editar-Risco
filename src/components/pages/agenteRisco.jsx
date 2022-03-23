import { Input } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import CheckboxAtividade from '../layout/checkboxAtividade'
import CheckboxDanoLesao from '../layout/checkboxDanoLesao'
import CheckboxFreExposicao from '../layout/checkboxFreExposicao'
import  ToggleGroup from '../layout/buttonGroupGrau'
import { DisplayContent } from '../styles/contentStyles'
/* import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setAgenteAtual } from '../redux/editarRiscoReducer'
import { Button } from 'semantic-ui-react'
import Save from '../layout/save'
*/

function Agente_risco({data, updateDataHandler}) {

    const [object, setObject] = useState(data);

    useEffect(() => {
        updateDataHandler(object);
    }, [object, updateDataHandler]);

    return (

        <DisplayContent>
            <div> Risco </div> 
                <Input type="text" value={object.risco} 
                onChange={(e) => (setObject({...object, risco: e.target.value}))} fluid />
                <br/>
            <div> Descrição </div>
                <Input type="text" value={object.descricao} 
                onChange={(e) => (setObject({...object, descricao: e.target.value}))} fluid />
                <br/>
            <div> Fonte Geradora </div>
                <Input type="text" icon='search' value={object.fonteGeradora} 
                onChange={(e) => (setObject({...object, fonteGeradora: e.target.value}))} fluid />
                <br/>
            <div> Atividade </div>
                <CheckboxAtividade data={object.atividade} onCheckHandler={(data) => (setObject({...object, atividade: data}))}/>
            <p></p>
            <div> Técnica de Medição </div>
                <Input type="text" icon='search' value={object.tecnicaMedicao} 
                onChange={(e) => (setObject({...object, tecnicaMedicao: e.target.value}))} fluid />
                <br/>
            <div> Intensidade </div>
                <Input value={object.intensidade} 
                onChange={(e) => (setObject({...object, intensidade: e.target.value}))} fluid />
                <br/>
            <div> Unidade </div>
                <Input type="text" icon='search' value={object.unidade} 
                onChange={(e) => (setObject({...object, unidade: e.target.value}))} fluid />
                <br/>
            <div> Limite de Exposição </div>
                <Input type="text" icon='search' value={object.limiteExposicao} 
                onChange={(e) => (setObject({...object, limiteExposicao: e.target.value}))} fluid />
                <br/>
            <div> Possíveis Danos à Saúde </div>
                <Input type="text" icon='search' value={object.possiveisDanos} 
                onChange={(e) => (setObject({...object, possiveisDanos: e.target.value}))} fluid />
                <br/>
            <div> Potencial de Dano de Lesão </div>
                <CheckboxDanoLesao data={object.potencialDano} onCheckHandler={(data) => (setObject({...object, potencialDano: data}))}/>
            <p></p>
            <div> Frequência de Exposição </div>
                <CheckboxFreExposicao data={object.frequenciaExposicao} onCheckHandler={(data) => (setObject({...object, frequenciaExposicao: data}))}/>
            <p></p>
            <div> Grau de Risco </div>
                <ToggleGroup />
        </DisplayContent>
    )
}

export default Agente_risco

/*
const [objectStore] = useState(useSelector(store => store.agenteRisco.agenteAtual))

const [object, setObject] = useState( {risco:'', descricao:'', fonteGeradora:'', tecnicaMedicao:'', 
intensidade:'', unidade:'', limiteExposicao:'', possiveisDanos:''} );


handleInputChange(event) {
const target = event.target;
const value = target.name === 'nome' ? target.checked : target.value;
const name = target.name;

this.setState({
[name]: value
});
}

<Checkbox label='Ausente' />
<Checkbox label='Rotineira' />
<Checkbox label='Não Rotineira' />
*/