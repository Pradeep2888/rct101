import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Userdetail() {
    const {id}=useParams()
    // console.log(param.id)
    const [data,setData]=useState([])

   function getData(){
    axios.get(`https://reqres.in/api/users/${id}`).then((res)=>{
      setData(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
   }
   console.log(data)
   useEffect(()=>{
     getData()
   },[])

  return (
    <div>
      <div>
        <img src={data.avatar} alt={data.id}/>
        <h1>{data.first_name} {data.last_name}</h1>
        <h3>{data.email}</h3>

      </div>
      <div><Link to={"/users"}>Go Back</Link></div>
      
    </div>
  )
}

export default Userdetail