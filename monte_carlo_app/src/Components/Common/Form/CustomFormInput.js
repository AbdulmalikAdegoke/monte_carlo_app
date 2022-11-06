import React from 'react'

import { FormGroup, Input, Label, ErrorMessage } from 'reactstrap'
import { useField } from 'formik'

import 'bootstrap/dist/css/bootstrap.min.css';
import './../style.css'

export default function CustomFormInput({ inputLabel, ...formProps }) {
    const [field,meta] = useField(formProps)

  return (
    <FormGroup>
        {
            inputLabel!==""&&
            <Label
                size="lg"
                for={field.id}
            >
                {inputLabel}
            </Label>
        }
        
        <Input
          bsSize="lg"
          {...field}{...formProps}
          invalid={meta.touched && Boolean(meta.error)} 
          // valid={meta.touched && meta.error===undefined}
        />
        <div
            className="errorMsg"
        >
            <ErrorMessage  
                name={field.name} 
            />
        </div>
        
    </FormGroup>
  )
}
