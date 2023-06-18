/*
Example - Using Variables (without state)
*/
import React from 'react'

export default function WithoutState() {
    let data = "Anoop";
    function abc()
    {
        data = "Rajesh";
        alert(data);
    }

    return (
        <div>
        <h1>{data}</h1>
        <button onClick={abc}>Update</button>
        </div>
    )
}
