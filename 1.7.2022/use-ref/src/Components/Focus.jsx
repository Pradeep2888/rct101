import React, { useRef, useState } from 'react'

function Focus() {
   const handelRef=useRef(null)
   const [text,setText]=useState("")

   const handelSubmit=(e)=>{
    e.preventDefault()
    let name=handelRef.current.value
    name===""?alert("please fill text"):setText(name)
    
   }


  return (
    <div>
      <h1>Input Focus</h1>
      <form onSubmit={handelSubmit}>
      <input type="text" ref={handelRef} />
      <input type="submit" />
      </form>
       <h3>Text is:{text}</h3>
    </div>
  )
}

export default Focus