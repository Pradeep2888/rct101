import React from 'react'
import { createContext } from 'react'
import Page4 from './Page4'


const BioData=createContext()
function AppContext() {
  return (
    <BioData.Provider value={"Page 4"}>
        <Page4/>
    </BioData.Provider>
  )
}

export default AppContext
export {BioData}