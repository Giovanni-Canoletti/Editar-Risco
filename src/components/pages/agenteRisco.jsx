import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { useState } from 'react'
import CheckboxAtividade from '../layout/checkboxAtividade'
import CheckboxDanoLesao from '../layout/checkboxDanoLesao'
import CheckboxFreExposicao from '../layout/checkboxFreExposicao'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setAgenteAtual } from '../redux/agenteRiscoReducer'
import  ToggleGroup from "../layout/buttonGroupGrau";

//import Save from '../pages/save'

function Agente_risco() {

    //const [object, setObject] = useState( {risco:'', descricao:'', fonteGeradora:'', tecnicaMedicao:'', 
    //intensidade:'', unidade:'', limiteExposicao:'', possiveisDanos:''} );

    const [objectStore] = useState(useSelector(store => store.agenteRisco.agenteAtual))
    const [object, setObject] = useState(objectStore);

    const dispatch = useDispatch();

    const update = (e) => {
        e.preventDefault();
        dispatch(setAgenteAtual(object))
    }

    return (

        <div className='display_content'>
            <div>Risco</div> 
                <Input type="text" value={object.risco} 
                onChange={(e) => (setObject({...object, risco: e.target.value}))} fluid />
            <div>Descrição</div>
                <Input type="text" value={object.descricao} 
                onChange={(e) => (setObject({...object, descricao: e.target.value}))} fluid />
            <div>Fonte Geradora</div>
                <Input type="text" icon='search' value={object.fonteGeradora} 
                onChange={(e) => (setObject({...object, fonteGeradora: e.target.value}))} fluid />
            <br></br>
            <div>Atividade</div>
                <CheckboxAtividade data={object.atividade} onCheckHandler={(data) => (setObject({...object, atividade: data}))}/>
            <p></p>
            <div>Técnica de Medição</div>
                <Input type="text" icon='search' value={object.tecnicaMedicao} 
                onChange={(e) => (setObject({...object, tecnicaMedicao: e.target.value}))} fluid />
            <div>Intensidade</div>
                <Input value={object.intensidade} 
                onChange={(e) => (setObject({...object, intensidade: e.target.value}))} fluid />
            <div>Unidade</div>
                <Input type="text" icon='search' value={object.unidade} 
                onChange={(e) => (setObject({...object, unidade: e.target.value}))} fluid />
            <div>Limite de Exposição</div>
                <Input type="text" icon='search' value={object.limiteExposicao} 
                onChange={(e) => (setObject({...object, limiteExposicao: e.target.value}))} fluid />
            <div>Possíveis Danos à Saúde</div>
                <Input type="text" icon='search' value={object.possiveisDanos} 
                onChange={(e) => (setObject({...object, possiveisDanos: e.target.value}))} fluid />
            <br></br>
            <div>Potencial de Dano de Lesão</div>
                <CheckboxDanoLesao />
            <p></p>
            <div>Frequência de Exposição</div>
                <CheckboxFreExposicao />
            <p></p>
            <div>Grau de Risco</div>
                <ToggleGroup></ToggleGroup>     
                <div className='salvar'>
            <div class='ui divider'></div>
                <Button color='orange' onClick={update} >Salvar</Button>
                <Button>Cancelar</Button>
            </div>       
        </div>
        
    )
       
}

export default Agente_risco



 /*   
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