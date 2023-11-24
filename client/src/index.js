import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import { AuthProvider } from "./context/auth";
import Dashboard from "./pages/Dashboard.js";
import Private from "./components/Private.js";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
  
      <Route path="dashboard" element={<Private/>}>
       <Route path="" element={<Dashboard/>}/>
      </Route>
  
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
  </Route>
))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
  <RouterProvider router={router}/>
  </AuthProvider>




 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
