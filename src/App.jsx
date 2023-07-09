import { useState } from 'react'
import './App.css'
import Boards from './components/Boards'
import Titles from './components/Titles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titles></Titles>
      <Boards></Boards>
    </>
  )
}

export default App
