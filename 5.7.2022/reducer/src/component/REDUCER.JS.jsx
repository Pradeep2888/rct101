import React from 'react'
import { useReducer } from 'react'

const initialState=0
const reducr=(state,action)=>{
console.log(state,action)
if(action.type==="inc"){
    return state+action.payload
}
if(action.type==="dec"){
    return state-action.payload
}

}

function Atm() {
    const [state,dispatch]=useReducer(reducr,initialState)
  return (
    <div>
        <div><h1>Total Amount:{state}</h1></div>
        <div>
            <button onClick={()=>dispatch({type:"inc" , payload:500})}>Deosit 500</button>
            <button onClick={()=>dispatch({type:"dec" , payload:500})}>Withdraw 500</button>
        </div>
    </div>
  )
}

export default Atm