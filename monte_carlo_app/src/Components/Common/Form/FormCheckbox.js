import React from 'react'

import { Input, Label, FormGroup } from 'reactstrap'

import { useField } from 'formik';

export default function FormCheckbox({checkboxLabel,...formProps}) {
  const [field,meta] = useField(formProps)

  return (
    <FormGroup>
      <Input 
        {...field}{...formProps}
      /> 
      {' '}
      <Label 
        for={field.id}
      >
        {checkboxLabel}
      </Label>
    </FormGroup>
  )
}
