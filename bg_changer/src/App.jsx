import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const colors = ["red", "green", "blue", "olive", "purple", "black", "pink" , "brown", "grey"]

  return (
    <>
      <div className="w-full h-screen duration-200 " style={{ backgroundColor: color }}></div>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">

          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setColor(color)}
              className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
              style={{ backgroundColor: color }}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}

        </div>
      </div>
    </>
  )
}

export default App;
