import { Checkbox } from 'semantic-ui-react'


export default function CheckboxAtividade({data, onCheckHandler}) {    

  return (
    <>
      <p></p>
        <Checkbox
          radio
          label='Leve &nbsp;'
          value='Leve'
          checked={data === 'Leve'}
          onChange={(e, data) => onCheckHandler(data.value)}
        />

        <Checkbox
          radio
          label='Moderado &nbsp;'
          value='Moderado'
          checked={data === 'Moderado'}
          onChange={(e, data) => onCheckHandler(data.value)}
        />

        <Checkbox
        radio
        label='Severo &nbsp;'
        value='Severo'
        checked={data === 'Severo'}
        onChange={(e, data) => onCheckHandler(data.value)}
        />
    </>
  )
}