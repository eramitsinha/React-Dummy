import React, { useState } from 'react'

export default function FetchApiPostFunctional() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [company,setCompany] = useState("")
    const [gender,setGender] = useState("")

    function save()
    {
        const data = {
            name,
            gender,
            company,
            email
        }
        fetch('http://localhost:3000/users',{
            method : 'POST',
            body: JSON.stringify(data),
            headers:{
                "Accept" : "application/json",
                "Content-Type":"application/json",
            }  
        }).then((result)=>result.json()).then((response)=>{
            console.log(response)
        })
    }

    return (
        <div>
            <h4>Save Data using Fetch API Local - Functional Component</h4>
           
                Name :
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name"  />
                <br />
                Email :
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email"  />
                <br />
                Company :
                <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} name="company" />
                <br />
                Gender :
                <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} name="gender" />
                <br />
                <button type="button" onClick={save}>Save</button>
           
        </div>
    )
}
