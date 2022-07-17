import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Forms from './Components/Forms'
import Weforms from './Components/Weforms'
import Focus from './Components/Focus'
import Timer from './Components/Timer'
import Scroll from './Components/Scroll'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Forms/>
     {/* <Weforms/> */}
     {/* <Focus/> */}
     {/* <Timer/> */}
     {/* <Scroll/> */}
    
    </div>
  )
}

export default App
