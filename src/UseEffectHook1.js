import React, { useEffect, useState } from 'react'

export default function UseEffectHook1() {
    const [count,setCount] = useState(0)
    
   useEffect(()=>{
        console.log("useEffect Hook is Called")
   })

    return (
        <div>
            <h1>UseEffect Example 1 - Without Condition</h1>
            <h2>Count = {count}</h2>
            <button onClick={()=>setCount(count+1)}>Update Counter</button>
        </div>
    )
}
