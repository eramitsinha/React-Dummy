import React, { useState } from 'react'

export default function ShowHide() {
    const [status,setStatus] = useState(true);

    return (
        <div>
            {
                status? <h1>Hello</h1>:null
            }
            <button onClick={()=>setStatus(true)}>Show</button>
            <button onClick={()=>setStatus(false)}>Hide</button>
        </div>
    )
}

