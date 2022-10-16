import React from 'react'

import { Input, Label, FormGroup, FormFeedback } from 'reactstrap'



export const TestFormInput = ({inputLabel, ...formProps}) => {
  return (
    <FormGroup>
        {
            inputLabel!==""&&
            <Label
                size="lg"
                for={formProps.id}
            >
                {inputLabel}
            </Label>
        }
        
        <Input
          bsSize="lg"
          {...formProps}
        //   invalid={meta.touched && Boolean(meta.error)} 
          // valid={meta.touched && meta.error===undefined}
        />
        
      </FormGroup>
  )
}
