import React, { useEffect, useState } from 'react'

function Garbej() {
    const [count,setCount]=useState(0)

    useEffect(()=>{
       const id= setInterval(()=>{
        console.log(new Date())
            setCount((prev)=>prev+1)
        },1000)
        const cleanup=()=>{
            clearInterval(id)
        }
        return cleanup
    
    },[count])
    
      return (
        <div>
        <h1>Time Out</h1>
        <h2>Count: {count}</h2>
        
        </div>
        
      )
    }
export default Garbej