import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AppContext from "./context/AppContext"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AppContext/>
    </div>
  )
}

export default App
