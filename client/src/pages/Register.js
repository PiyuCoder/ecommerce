import React, { useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate()


  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name, email, password, phone, address})

      if(res.data.success){
        toast.success(res.data.message)
        navigate('/login')
      }else{
        toast.error(res.data.message)
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
      
    }
  }
   
  return (
    <>
      <div className="login">
        <form onSubmit={submitHandler}>
          <h2>Register here</h2>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter yor name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required= 'true'
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required= 'true'
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required= 'true'
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required= 'true'
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required= 'true'
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <p>Already registered? <Link to={'/login'}>Login here</Link></p>
        </form>
      </div>
    </>
  );
}
