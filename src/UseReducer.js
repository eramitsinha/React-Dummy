import React, { useReducer } from 'react'

export default function UseReducer() {
    const initialState = 0

    const [state,dispatch] = useReducer(reducer,initialState)

    function reducer(state, action)
    {
        if(action.type==="INC")
        {
            return state+1
        }
        if(action.type==="DEC")
        {
            return state-1
        }
    }

    return (
        <div>
            <p>{state}</p>
            <button onClick={()=>dispatch({type:"INC"})}>
                Increase
            </button>
            <button onClick={()=>dispatch({type:"DEC"})}>
                Decrease
            </button>
        </div>
    )
}
