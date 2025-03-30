
import './App.css'
import About from './Component/About'
import Home from './Component/Home'
import Login from './Component/Login'
import Navbar from './Component/Navbar'
import { createBrowserRoute, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRoute([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/about',
      element: <About/>
    },
  
    {
      path: '/login',
      element: <Login/>
    },
  ])


  return (
    <>
     <h1>Hello </h1>
     <Navbar/>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
