import React, { useRef } from 'react'

export default function UnControlledCompRef() {
    let ref1 = useRef(null)
    function abc(e)
    {
        e.preventDefault();
        console.log(ref1.current.value)
    }
    return (
    <div>
        <form onSubmit={abc}>
            <label>City</label>
            <input type="text" ref={ref1} />
            <button>Submit</button>
        </form>
    </div>
    )
}
