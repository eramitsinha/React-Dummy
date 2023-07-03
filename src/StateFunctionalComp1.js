import React, { useState } from 'react'

export default function StateFunctionalComp1() {
  
    const [name,setname] = useState("Rajesh") 

    const [count,setcount] = useState(1000)
 
   
     return (
         <div>
 
             <h1>{name}</h1>
 
             <h2>{count}</h2>
         
         </div>
     )
}
