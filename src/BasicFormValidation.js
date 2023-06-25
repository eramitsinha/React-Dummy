import React, { useState } from 'react'

export default function BasicFormValidation() {
    const [userErr, setUserErr] = useState(false)
    const [mobErr, setMobErr] = useState(false);
    
    function abc(e)
    {
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
