import React, { useState } from 'react'

export default function FetchApiPostFunctional2() {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")

    function save()
    {
        let userId = 9
        const data = {
            userId,
            title,
            body
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method : 'POST',
            body: JSON.stringify(data),
            headers:{"content-type":"application/json; charset=UTF-8"}  
        }).then((result)=>result.json()).then((response)=>{
            console.log(response)
        })
    }

    return (
        <div>
            <h4>Save Data using Fetch API Online - Functional Component</h4>
           
                Title
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name="title"  />
                <br />
                Body :
                <input type="text" value={body} onChange={(e)=>setBody(e.target.value)} name="body" />
                <br />
                <button type="button" onClick={save}>Save</button>
           
        </div>
    )
}
