import React from 'react'
import { mycontext } from './ContextAPI1'

export default function ContextAPI3() {
  return (
    <div>
        <h1>Context API - Component 3</h1>
        <mycontext.Consumer>
            {data => <h3>{data}</h3>}
        </mycontext.Consumer>
    </div>
  )
}




