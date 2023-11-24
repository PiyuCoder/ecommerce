import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header.js'
import Footer from './Footer.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div>
    <header>
    <Header/>
    </header>
   
      <Outlet/>
      <ToastContainer/>
      <footer>
      <Footer/>
      </footer>
      
    </div>
  )
}

export default Layout
