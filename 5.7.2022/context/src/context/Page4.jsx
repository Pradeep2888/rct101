import React from 'react'
import { useContext } from 'react'
import {BioData} from "./AppContext"

function Page4() {
    const PageName=useContext(BioData)
  return (
    <div><h1>Hellow i Am {PageName}</h1></div>
  )
}

export default Page4