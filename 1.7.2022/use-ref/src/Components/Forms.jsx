import React, { useState } from 'react'
import { useRef } from 'react'

const Forms=()=> {
    const [show,setShow]=useState(true)
    const name=useRef(null)
    const submit=(e)=>{
     e.preventDefault()
     const realName=name.current.value
     realName===""?alert("Please fill input"):setShow(false)
    //  console.log(name)

    }
console.log(show)

  return (
    <div  ref={name}>
        <form >
            <label>Write Some Thing</label>
            <input onSubmit={submit} type="text"></input>
           <button>Submit</button>
   
        </form>
<h1>{!show?`your luckey name is ${name.current.value}`:"No Name"}</h1>
    </div>
  )
}

export default Forms