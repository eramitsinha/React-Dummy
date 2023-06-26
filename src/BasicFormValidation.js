import React, { useState } from 'react'

export default function BasicFormValidation() {
    const [userErr, setUserErr] = useState(false)
    const [mobErr, setMobErr] = useState(false)

    const[user,setUser] = useState("")
    const [mobile,setPass] = useState("")
    
    function abc(e)
    {
        if(user.length<3 || mobile.length<3)
        {
            alert("Validation Failed");
        }
        else
        {
            alert("Ok");
        }
        e.preventDefault();
    }

    function getUser(e)
    {
        let k = e.target.value;
        if(k.length<3)
        {
            setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(k)
    }

    function getMobile(e)
    {
        let k = e.target.value;
        if(k.length!=10)
        {
            setMobErr(true)
        }
        else
        {
            setMobErr(false)
        }
        setPass(k)
    }

    return (
        <div>
            <h2>Basic Form Validation</h2>
            <form onSubmit={abc}>
                <label>Username</label>
                <input type='text' onChange={getUser} />
                {
                    userErr? <span>Invalid UserName</span>:""
                }
                <br />
                <label>Mobile No.</label>
                <input type='txt' onChange={getMobile} />
                {
                    mobErr? <span>Invalid Mobile</span>:""
                }
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}
