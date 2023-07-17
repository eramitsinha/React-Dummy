import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SearchParams1() {
    const [searchParams, setSearchParams] = useSearchParams()
    const age = searchParams.get('age')

    return (
        <div>
            Age = {age} 
            {/* http://localhost:3000/searchparams1?age=22 */}
        </div>
    )
}
