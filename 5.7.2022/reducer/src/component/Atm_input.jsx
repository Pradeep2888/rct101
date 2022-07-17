import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useReducer } from 'react'

const initialState=0
const reducr=(state,action)=>{
// console.log(state,action)
let amount=action.payload.amount
console.log(amount)
if(action.type==="inc"){
    return state+Number(amount)
}
if(action.type==="dec"){
    return state-Number(amount)
}

}




function Atminput() {
    const [state,dispatch]=useReducer(reducr,initialState)
    const handelRef=useRef(null)

    const [amount,setamount]=useState(0)

    const handelClick=()=>{
        let number=handelRef.current.value
        setamount(number)
    }
  return (
    <div>
        <div><h1>Total Amount:{state}</h1></div>
        <input ref={handelRef} type="number" />
        <button onClick={handelClick}>Set Amount</button>
        <div>
            <button onClick={()=>dispatch({type:"inc" , payload:{amount}})}>Deosit {amount}</button>
            <button onClick={()=>dispatch({type:"dec" , payload:{amount}})}>Withdraw {amount}</button>
        </div>
    </div>
  )
}

export default Atminput