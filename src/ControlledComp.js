import React, { useState } from 'react'

export default function ControlledComp() {
    const [name,setName] = useState("")
    return (
        <div>
        <label>Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <h4>{name}</h4>
        </div>
    )
}
