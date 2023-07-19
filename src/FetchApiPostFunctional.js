import React, { useState } from 'react'

export default function FetchApiPostFunctional() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [company,setCompany] = useState("")
    const [gender,setGender] = useState("")

    function save(e)
    {
        e.preventDefault()

        fetch('http://localhost:3001/users',{
            method : 'POST',
            body: JSON.stringify({
                name : name,
                gender : gender,
                company : company,
                email : email
            }),
            headers:{"content-type":"application/json; charset=UTF-8"}  
        }).then((result)=>result.json()).then((response)=>{
            console.log(response)
        })
        
        
    }

    return (
        <div>
            <h4>Save Data using Fetch API - Functional Component</h4>
            <form  onSubmit={save}>
                Name :
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
                <br />
                Email :
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                <br />
                Company :
                <input type="text" onChange={(e)=>setCompany(e.target.value)} value={company} />
                <br />
                Gender :
                <input type="text" onChange={(e)=>setGender(e.target.value)} value={gender} />
                <br />
                <button>Save</button>
            </form>
        </div>
    )
}
