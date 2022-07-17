import React, { useEffect, useRef, useState } from 'react'

function Timer() {
    

    const [count,setCount]=useState(0)
    const handelRef=useRef(null)

    const handelStart=()=>{
        if(handelRef.current===null) { 
        return handelRef.current= setInterval(() => {
                setCount((count)=>count+1)
            }, 1000);
        }
    //    console.log(handelRef.current .value)
    }
    const handelStop=()=>{
    clearInterval(handelRef.current)
    handelRef.current=null
    }

    const handelReset=()=>{
        handelStop()
        setCount(0)
    }

    // useEffect(() => {
    //     // cleanup
    //     return handelStop;
    //   }, []);
console.log(count)
  return (
    <div>
        <div>
            <h1>Timer :{count}</h1>
        </div>
        <div>
            <button onClick={handelStart}>Start</button>
            <button onClick={handelStop}>Stop</button>
            <button onClick={handelReset}>Reset</button>
        </div>
    </div>
  )
}

export default Timer