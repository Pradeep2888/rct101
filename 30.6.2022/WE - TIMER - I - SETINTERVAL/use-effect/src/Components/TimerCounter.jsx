import React, { useEffect, useState } from 'react'

function timer() {
const [time,setTime]=useState(0)

const startTimer=()=>{
setInterval(()=>{
    // console.log(time)
    setTime((prev) => prev + 2)
},1000)
}


useEffect(()=>{
    startTimer()
},[])

  return (
    <div>
        <h1>Set Interval</h1>
        <h2>Time: {time}</h2>

        
    </div>
   
  )
}

export default timer