import React, { useEffect, useState } from 'react'

function Timeout() {
const [count,setCount]=useState(0)

useEffect(()=>{
    setTimeout(()=>{
        setCount((prev)=>prev+1)
    },1000)

},[count])

  return (
    <div>
    <h1>Time Out</h1>
    <h2>Count: {count}</h2>
    </div>
    
  )
}

export default Timeout