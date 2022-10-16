import React from 'react'

import { Link } from 'react-router-dom';

export const PageLink = ({ pageHref,linkLabel }) => {
  return (
    <Link 
        to={pageHref}
    >
        {linkLabel}
    </Link>
  )
}
