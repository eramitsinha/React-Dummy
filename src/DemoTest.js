import React, { useState } from 'react'

export default function DemoTest() {

    const [count,setcount] = useState(0)

    function abc()
    {
        setcount(count+2)
    }
    

  return (
    <div>

        <h1>{count}</h1>

        <button onClick={abc}>Update</button>     
    </div>
  )
}
