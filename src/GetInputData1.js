import React from 'react'

export default function GetInputData() {
    function abc(val)
    {
        console.log(val.target.value)
    }
  return (
    <div>
      Type Something : <input type="text" onChange={abc}></input>
      (result will display on console)
    </div>
  )
}
