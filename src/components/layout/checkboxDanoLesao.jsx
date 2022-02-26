import React from 'react'
import { Checkbox } from 'semantic-ui-react'

export default function CheckboxDanoLesao() {
    
  const [value, setValue] = React.useState()

  return (
    <>
      <p></p>
        <Checkbox
          radio
          label='Leve &nbsp;'
          value='Leve'
          checked={value === 'Leve'}
          onChange={(e, data) => setValue(data.value)}
        />

        <Checkbox
          radio
          label='Moderado &nbsp;'
          value='Moderado'
          checked={value === 'Moderado'}
          onChange={(e, data) => setValue(data.value)}
        />

        <Checkbox
        radio
        label='Severo &nbsp;'
        value='Severo'
        checked={value === 'Severo'}
        onChange={(e, data) => setValue(data.value)}
        />
    </>
  )
}