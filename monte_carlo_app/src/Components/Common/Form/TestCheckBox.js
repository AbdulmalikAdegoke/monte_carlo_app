import React from 'react'

import { Input, Label, FormGroup } from 'reactstrap'

import { useField } from 'formik';

export default function TestFormCheckbox({checkboxLabel,...formProps}) {
//   const [field,meta] = useField(formProps)

  return (
    <FormGroup>
      <Input 
        {...formProps}
      /> 
      {' '}
      <Label 
        for={formProps.id}
      >
        {checkboxLabel}
      </Label>
    </FormGroup>
  )
}
