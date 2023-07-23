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
                    </p>
                )
            }
        </div>
    )
}
