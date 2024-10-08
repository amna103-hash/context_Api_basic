
import React from 'react'
import './index.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
 const router=createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/profile",
    element:<Profile/>
  }
 ])

  return (
    // <UserContextProvider>
    //  <Login/>
    // <Profile/>
    //  </UserContextProvider>
    <UserContextProvider>
    <RouterProvider router={router}/>
    </UserContextProvider>
  )
}

export default App
