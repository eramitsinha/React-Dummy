import React, { useRef } from 'react'
import ForwardRef2 from './ForwardRef2'

export default function ForwardRef1() {
    let inputRef = useRef(null)

    function updateRef()
    {
        inputRef.current.style.color = "red"
    }

    return (
        <div>
            <ForwardRef2 ref={inputRef} />
            <button onClick={updateRef}>Update</button>
        </div>
    )
}

