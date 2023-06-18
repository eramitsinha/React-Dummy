import React, { useState } from 'react'

/* Example : State with Functional Component */
export default function StateFunctionalComp() {
    
    const [data,SetData] = useState("Anoop"); // initial value

    function abc()
    {
        SetData("Rajesh");   // on Button Click, data will get update.
    }

    return (
        <div>
        <h1>{data}</h1>

        <button onClick={abc}>Update Data</button>
        </div>
    )
}

