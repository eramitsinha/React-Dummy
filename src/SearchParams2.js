import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SearchParams2() {
    const [searchParams, setSearchParams] = useSearchParams()
    const age = searchParams.get('age')

    return (
        <div>
            Age = {age} 
            <br />
            <button onClick={()=>setSearchParams({age:44})}>Set Age</button>
            {/* http://localhost:3000/searchparams1?age=44 age will be set onclick*/}
        </div>
    )
}
