import React, { useState } from 'react'
const intData={
    name:"",
    email:"",
    phone:"",
    gender:"",
    sector:""
}

function Weforms() {
    const [text,setText]=useState(intData)
    const [data,setData]=useState([])
 
    const handelChange=(e)=>{
        const {name,value,checked,type}=e.target;
        var variable=type==="checkbox"?checked:value       
        // variable===true?variable="male":variable="female"
        // if (variable===true){
        //   console.log(true)
        // }
        setText({...text,[name]:variable})
        
    }
   
   const handelClick=()=>{
    document.getElementById('myform').reset();
   }

   const handelSubmit=(e)=>{
    e.preventDefault()
  
    console.log(text)
   setData([...data,text])
   }

    console.log(data)
  return (
    <div>
       <h1> write your data</h1>
        <form id='myform' action="">
        <input onChange={handelChange} placeholder='Name' type="text" name='name'  ></input>
        <br />
        <input onChange={handelChange} placeholder='Email' type="text" name='email' ></input>
        <br />
        <input onChange={handelChange} placeholder='Phone Number' type="number" name='phone' ></input>
        <br />
        <h3>Select Gender</h3>
        <label >Male</label>
        <input onChange={handelChange} id="male" name='gender'  type="checkbox" />
       
        <br />
        <select onChange={handelChange} name="sector" id="">
          <option >Select</option>
          <option value="IT">IT</option>
          <option value="CS">CS</option>
          <option value="CMA">CMA</option>
          <option value="CA">CA</option>
        </select>
        <br />
        <button onClick={handelSubmit}>Submit</button>
        <button onClick={handelClick}>Clear</button>
        </form>
    </div>
  )
}

export default Weforms