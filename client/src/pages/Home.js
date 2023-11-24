import React from 'react'
import { useAuth } from '../context/auth'

const Home = () => {
  const[auth,setAuth] = useAuth()
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome {JSON.stringify(auth.user?.name || "Guest",null, 4)}</p>
    </div>
  )
}

export default Home
