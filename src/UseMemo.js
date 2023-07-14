import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [count,setCount] = useState(0)
    const [data,setData] = useState(0)
    
    const multiCountMemo = useMemo(
    function multiCount()
    {
        console.log("multiCount")
        return count*5
    },[count])



    return (
    <div>
        Counter = {count} | Data = {data} | {multiCountMemo}
        <br />
        <button onClick={()=>setCount(count+1)}>Update Counter</button>
        <button onClick={()=>setData(data+1)}>Update Data</button>
    </div>
  )
}
