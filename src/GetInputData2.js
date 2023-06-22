import React, { useState } from 'react'

export default function GetInputData2() {
    const [data,setData] = useState(null); // initial value is NULL
    function abc(val)
    {
        setData(val.target.value)
    }
    return (
        <div>
            <h1>{data}</h1>
        Type Something : <input type="text" onChange={abc}></input>
        </div>
    )
}
