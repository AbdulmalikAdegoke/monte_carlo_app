import React from 'react'

import { PageLink } from '../PageLink/PageLink';
import { Button, Result } from 'antd';

export default function ErrorPage() {
  return (
    <div>
      
      <Result
        status="404"
        title="ErrorPage"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary">
            <PageLink
              pageHref="/dashboard"
              linkLabel="Back Home"
            />
          </Button>}
      />

    </div>
  )
}
