import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
    return (
      <div>
          <h2>404 Page Not Found</h2>
          <Link to="/">Go to Home</Link>
      </div>
    )
}
