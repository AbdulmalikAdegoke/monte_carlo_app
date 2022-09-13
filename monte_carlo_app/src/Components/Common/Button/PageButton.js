import React from 'react'

import { Button } from 'reactstrap'

export default function PageButton({buttonLabel}) {
  return (
    <>
      <Button>
        {buttonLabel}
      </Button>
    </>
  )
}
