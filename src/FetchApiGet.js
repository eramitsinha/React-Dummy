import React, { useEffect, useState } from 'react'

export default function FetchApiGet() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3001/users").then((result)=>{
            result.json().then((resp)=>{
                setData(resp)
            })
        })
    },[])
    return (
        <div>
            <table border="2" cellpadding="10">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Company</th>
                    <th>Email</th>
                </tr>
                {
                    data.map((item)=>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.gender}</td>
                            <td>{item.company}</td>
                            <td>{item.email}</td>
                        </tr>
                    )
                }
            </table>
        </div>
    )
}
