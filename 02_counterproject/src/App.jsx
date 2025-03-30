import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [value, setValue] = useState(0)

  const addValue = ()=>{
    if(value == 20){
      setValue(value = 20)
    }
    else{
      setValue(value + 1)
    }
  }
  const removeValue = ()=>{
    if(value > 0){
      setValue(value - 1)
    }
    else{
      setValue(value = 0)
    }
  }

  // let [counter, setCounter] = useState(15)
  
  // // let counter = 5
  // const addValue = ()=>{
  //   // console.log("added", Math.random());
  //   // console.log("added", counter);

  //   // counter = counter + 1
  //   setCounter(counter + 1)
  // }

  // const removeValue = () =>{
  //   setCounter(counter - 1)
  // }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value : {value}</h2>

     <button onClick={addValue}>Add value</button> <br/>
     <button onClick={removeValue}>Remove value </button>

     <p>Footer</p>

    </>
  )
}

export default App
