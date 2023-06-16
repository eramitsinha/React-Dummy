import React from 'react'

export default function ClickEvent() {

    function abc()
    {
        alert("Hello");
    }
    
    return (
        <div>
        <button onClick={abc}>Show</button>
        </div>
    )
}
