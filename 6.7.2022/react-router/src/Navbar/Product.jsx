import React from 'react'
import { Link } from 'react-router-dom'
import smartphone from '../Product/Product-detail'


const product=[
  {
      name : "SmartPhone",
      price: 30,
      id : 0
  },
  {
      name : "Watch",
      price : 20,
      id : 1
  },
  {
      name : "Shirt",
      price : 50,
      id : 2
  },
  {
      name : "Pants",
      price : 100,
      id : 3
  }
]

function Product() {

  return (
    <div>
    {
      product.map((item)=>(
        <div><Link key={item.id} to={`/product/${item.id}`}>{item.name}</Link></div>
        
      ))
    }
    </div>
  )
}

export default Product