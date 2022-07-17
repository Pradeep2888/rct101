import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Atm from './component/REDUCER.JS'
import Atminput from './component/Atm_input'

function App() {


  return (
    <div className="App">
     {/* <Atm/> */}
      <Atminput/>
    </div>
  )
}

export default App
