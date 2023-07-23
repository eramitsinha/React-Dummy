import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AxiosGet() {
    const [mydata,setmydata] = useState([])
    function getApi()
    {
        axios.get("http://localhost:3001/users").then((r)=>{
            setmydata(r.data)
        })
    }

    function deleteUser(id)
    {
        
        axios.delete(`http://localhost:3001/users/${id}`).then((r)=>console.log("Deleted"))
    }

    useEffect(()=>{
        getApi()
    },[])
    return (
        <div>
            {
                mydata.map((item)=>
                    <p>
                        Name : {item.name}
                        <br />
                        Company : {item.company}
                        <br />
                        <button onClick={()=>deleteUser(item.id)}>
                            Delete
                        </button>
                    </p>
                )
            }
        </div>
    )
}
