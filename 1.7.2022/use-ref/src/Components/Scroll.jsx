import React, { useRef } from 'react'

function Scroll() {

  const ref=useRef(null)

console.log(ref)

const handelTop=()=>{
  ref.current.scrollTop = 0;
}

const handelBottom=()=>{
  // ref.current.scrollWidth= 183;
  // ref.current.scrollLeft= 0
  // ref.current.scrollIntoView()
  ref.current.scrollTop = 1000;
}

  return (
    <div>
        
        <div ref={ref} style={{border:"1px solid red" ,height:"300px", width:"200px",margin:"auto",overflow:"scroll"}}>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
        </div>
        <div><button onClick={handelTop}>Scroll Top</button></div>
        <div><button onClick={handelBottom}>Scroll Bottom</button></div>
    </div>
  )
}

export default Scroll