import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <h3>All Rights Reserved &copy;</h3>
      <Link to={'/'}>Home</Link>|
      <Link to={'/about'}>About</Link>|
      <Link to={'/login'}>Login</Link>
    </div>
  )
}
