import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/auth'
import { toast } from 'react-toastify';

export default function Header() {
  const[auth, setAuth] = useAuth()

  const logoutHandler = () =>{
    setAuth({
      ...auth,user:null,token:""
    })

    localStorage.removeItem('auth')
    toast.success("Logged out successfully!")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink className="navbar-brand" to="#">Ecommerce App</NavLink>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
      {!auth.user? (
        <>  <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li></>
      ) : (<>
        <li className="nav-item">
          <NavLink onClick= {logoutHandler} className="nav-link" to="/login">Logout</NavLink>
        </li>
      </>) }
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
