import React, { useDebugValue } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useParams,Link} from "react-router-dom"
import axios from "axios"



function Productdetail() {
  const {id}=useParams()
//  console.log(id)

const [data,setData]=useState([])

  // getData()
 function getData(){
  axios.get(`http://localhost:1010/product/${id}`).then((res)=>{
    setData(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}


useEffect(()=>{
  getData()
},[])

// console.log(data)
 

  return (
    <div>
     <div>
      <h1>{data.name}</h1>
      <h3>Price:{data.price}</h3>
     </div>
     <div><Link to={"/product"}>Go Back</Link></div>
    </div>
  )
}

export default Productdetail