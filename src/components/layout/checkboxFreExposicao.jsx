import React from 'react'
import { Checkbox } from 'semantic-ui-react'

export default function CheckboxFreExposicao() {
    
  const [value, setValue] = React.useState()

  return (
    <>
      <p></p>
        <Checkbox
          radio
          label='Habitual &nbsp;'
          value='Habitual'
          checked={value === 'Habitual'}
          onChange={(e, data) => setValue(data.value)}
        />

        <Checkbox
          radio
          label='Intermitente &nbsp;'
          value='Intermitente'
          checked={value === 'Intermitente'}
          onChange={(e, data) => setValue(data.value)}
        />

       <Checkbox
        radio
        label='Eventual &nbsp;'
        value='Eventual'
        checked={value === 'Eventual'}
        onChange={(e, data) => setValue(data.value)}
        />
    </>
  )
}