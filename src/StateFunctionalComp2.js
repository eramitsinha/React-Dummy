import React, { useState } from 'react'

export default function StateFunctionalComp2() {
    let [data,setData] = useState(0);
    
    function abc()
    {
        setData(data+1)
    }

    return (
    <div>
      <h1>{data}</h1>
      <button onClick={abc}>Increment</button>
    </div>
  )
}

