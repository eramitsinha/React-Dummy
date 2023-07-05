import React, { useState } from 'react'
import ContextAPI2 from './ContextAPI2'
import ContextAPI3 from './ContextAPI3'
export const mycontext = React.createContext()

export default function ContextAPI1() {

    const [name,setName] = useState("Aman")

    return (
        <div>
            <h1>Context API - Component 1</h1>
            <mycontext.Provider value={name} >
                <ContextAPI2 /> <ContextAPI3 />
            </mycontext.Provider>
        </div>
    )
}


