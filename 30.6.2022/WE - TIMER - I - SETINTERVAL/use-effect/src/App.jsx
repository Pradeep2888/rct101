import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TimerCounter from "./Components/TimerCounter"
import Timeout from './Components/Timeout'
import Garbej from './Components/Garbej'

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
     {/* <TimerCounter/> */}
     {/* <Timeout/> */}
     {show && <Garbej/> }
     <button onClick={()=>setShow(!show)}>Toggle</button>
    </div>
  )
}

export default App
