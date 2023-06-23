import React, { useState } from 'react'

export default function Condition() {
    const [status,SetStatus] = useState(2)
    const[status1,SetStatus1] = useState(true)
    return (
        <div>
        <h2>Single Condition</h2>
        {
            status1? <h3>TRUE</h3> : <h3>FALSE</h3>
        }
        <h2>Multiple Conditions</h2>
        {   
            status==1? <h3>Status 1</h3>:status==2? <h3>Status 2</h3>: <h3>Status 3</h3>
        }
        </div>
    )
}
