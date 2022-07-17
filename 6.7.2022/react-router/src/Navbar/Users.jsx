import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Userdetail from '../User/Userdetail'
import {Link, useParams} from "react-router-dom"

function Users() {
  const [user ,setUser]=useState([])
  const {id}=useParams()
  const [page,setPage]=useState(1)

function getData(){
  axios.get(`https://reqres.in/api/users?page=${page}`).then((res)=>{
    setUser(res.data.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}
// console.log(user)
const handelPage=()=>{
  if(page==1){
    setPage(2)
  }
  else if(page==2){
    setPage(1)
  }
}
//  console.log(page)
useEffect(()=>{
  getData()
},[handelPage])
  return (
    <div>
      <h1>User Single Page</h1>

       <div>
        <button disabled={page==1}  onClick={handelPage} >Page:1</button>
        <button disabled={page==2}  onClick={handelPage} >Page:2</button>
       </div>

      <div>{user.map((item)=>(<div key={item.id}>
        <h3>{item.first_name}</h3><img src={item.avatar} alt={item.first_name}/>
        <div> <Link to={`/users/${item.id}`} element={<Userdetail/>}>Show more details</Link></div>
        
        </div>))}</div>
       
     
    </div>
  )
}

export default Users