import { Checkbox } from 'semantic-ui-react'

export default function CheckboxFreExposicao({data, onCheckHandler}) {
    
  return (
    <>
      <p></p>
        <Checkbox
          radio
          label='Habitual &nbsp;'
          value='Habitual'
          checked={data === 'Habitual'}
          onChange={(e, data) => onCheckHandler(data.value)}
        />

        <Checkbox
          radio
          label='Intermitente &nbsp;'
          value='Intermitente'
          checked={data === 'Intermitente'}
          onChange={(e, data) => onCheckHandler(data.value)}
        />

       <Checkbox
        radio
        label='Eventual &nbsp;'
        value='Eventual'
        checked={data === 'Eventual'}
        onChange={(e, data) => onCheckHandler(data.value)}
        />
    </>
  )
}