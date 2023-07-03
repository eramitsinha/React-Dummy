import React, { useEffect, useState } from 'react'

export default function UseEffectHook2() {
    const [count,setCount] = useState(0)
    const [data,setData] = useState(0)
    
   useEffect(()=>{
        console.log("useEffect Hook is Called")
   },[data])

    return (
        <div>
            <h1>UseEffect Example 2 - With Condition</h1>
            <h2>Count = {count} | Data = {data}</h2>
            <button onClick={()=>setCount(count+1)}>Update Counter</button>
            <button onClick={()=>setData(data+1)}>Update Data</button>
        </div>
    )
}
