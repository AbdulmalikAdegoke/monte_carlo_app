import React, {useState} from 'react'

import { Input, Label, FormGroup } from 'reactstrap'

export default function FormInput({inputLabel,inputId,inputName,inputType,inputPlaceholder}) {

    const [inputValue,setInputValue]= useState('');

    function changeHandler(e) {
        setInputValue(e.target.value)
    }

  return (
    <FormGroup>
        <Label
            for={inputId}
        >
            {inputLabel}
        </Label>
        <Input
            id={inputId}
            type={inputType}
            value={inputValue}
            name={inputName}
            onChange={changeHandler}
            placeholder={inputPlaceholder}
        />
    </FormGroup>
  )
}
