import React from 'react'

export default function UncontrolledCompJs() {
    function abc(e)
    {
        e.preventDefault();
        let n1 = document.getElementById("n1").value
        console.log(n1)
    }
    return (
        <div>
            <form onSubmit={abc}>
                <label>Name</label>
                <input type="text" id="n1" />
                <button>Submit</button>
            </form>
        </div>
    )
}

