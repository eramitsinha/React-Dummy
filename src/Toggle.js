import React, { useState } from 'react'

export default function Toggle() {
    const [status,setStatus] = useState(true)
    return (
        <div>
        {  
            status? <h1>Hello World</h1> : null
        }
        <button onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    )
}

