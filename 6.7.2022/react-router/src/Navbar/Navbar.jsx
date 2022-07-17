import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div style={{justifyContent:"space-between" ,display:"flex"}}>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/about">About</Link></div>
        <div> <Link to="/users">Users</Link></div>
        <div> <Link to="/product">Product</Link></div>
         {/* <Link to="/product/SmartPhone">Product</Link> */}
       
    </div>
  )
}

export default Navbar