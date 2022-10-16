import React from 'react'

import { Button } from 'reactstrap'

import { useField } from 'formik'

export const SubmitButton = ({buttonLabel,...formProps}) => {

  const [field,meta] = useField(formProps)

  return (
    <>
      {console.log(field)}
      <Button
        color='primary'
        size='lg'
        type='submit'
        disabled={meta.touched && Boolean(meta.error)}
      >
        {buttonLabel}
      </Button>
    </>
  )
}
