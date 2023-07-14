import React from 'react'
import { useRef } from 'react'

export default function UseRef() {
    let inputRef = useRef(null)

    function abc()
    {
        inputRef.current.style.color = 'red'
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <br />
            <button onClick={abc}>Submit</button>
        </div>
    )
}
