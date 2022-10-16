import React, {useState} from 'react'

import { Input, Label, FormGroup, FormFeedback } from 'reactstrap'

import { useField, ErrorMessage } from 'formik';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../style.css'

export const FormInput = ({inputLabel,...formProps}) => {

    // const [inputValue,setInputValue]= useState('');

    // function changeHandler(e) {
    //     setInputValue(e.target.value)
    // }

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
