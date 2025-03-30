import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert("Hey Welcome!")
  }, [])

  useEffect(() => {
    alert("Count is updated!")
  }, [count])

  return (
    <>
      <div>The Count is {count}</div>
      <button onClick={()=>{setCount(count + 1)}}>Update Count</button>
    </>
  )
}

export default App
