import React, { useState } from 'react'

export default function Form() {
    const [name,SetName] = useState("")
    const [city, SetCity] = useState("")
    function abc(e)
    {
        console.log(name+city)
        e.preventDefault();
        
    }
    return (
        <div>
            <form onSubmit={abc}>
                <label>Name</label>
                <input type="text" onChange={(e)=>SetName(e.target.value)} />
                <br /><br />
                <label>City</label>
                <select onChange={(e)=>SetCity(e.target.value)}>
                    <option>-- Choose --</option>
                    <option>Lucknow</option>
                    <option>Delhi</option>
                </select>
                <br /><br />
                <button>Submit</button>
            </form>`
        </div>
    )
}
