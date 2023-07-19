import React, { useEffect, useState } from 'react'

export default function FetchApiGetFunctional() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/users").then((result)=>{
            result.json().then((resp)=>{
                setData(resp)
            })
        })
    },[])

    function deleteUser(id)
    {
        fetch(`http://localhost:3000/users/${id}`,{
            method : 'DELETE'
        }).then((result)=>{
            result.json()
        }).then((response)=>{
            console.log(response)
        })
    }
    return (
        <div>
            <h4>Fetch Data using GET Method - Functional Compoonent</h4>
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
                            <td>
                                <button onClick={()=>deleteUser(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                }
            </table>
        </div>
    )
}
