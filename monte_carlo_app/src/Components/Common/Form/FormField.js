import React from 'react'
import { Button, Input, Form, FormGroup, FormFeedback, Label } from 'reactstrap'; // reactstrap module importsimport { Button, Input, InputGroup, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // reactstrap module imports
import { useField, useFormik, useFormikContext, ErrorMessage, Field } from "formik";

export default function FormField({label, fieldType, ...formProps}) {
    const [field,meta] = useField(formProps);

  return (
    <div>      
      {console.log(meta)}
      {console.log("-----")}
      {console.log(meta.touched && meta.error!=="")}
      {console.log("--error---")}
      {console.log(meta.error)}
      {console.log("-----")}
        {console.log(field, meta)}
        {fieldType === "textField" &&
          <FormGroup>
          {label!==null&&
            <Label
            for={field.name}
            style={{fontWeight:"bold"}}
            size="lg" 
            >
                {label}
            </Label>
          }

          <Input
          {...field}
          {...formProps}
          invalid={meta.touched && meta.error}
          // innerRef={field.ref}
          bsSize="lg"
          // onKeyDown={enterKeyPressRegister}
          />
          <ErrorMessage name={field.name} />
          {/* <FormFeedback>
              
          </FormFeedback> */}
          </FormGroup>
        }

        {fieldType ==="buttonField"&&
          <Button 
          {...field}
          {...formProps}
          disabled={meta.error!=="" && meta.error.emailAddress==="" && meta.error.password!=="" && meta.error.phoneNumber!==""}
          >
            {label}
          </Button>
        }
        
        

    </div>
  )
}
