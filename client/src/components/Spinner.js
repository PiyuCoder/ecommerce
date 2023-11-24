import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Spinner() {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevState) => --prevState);
    }, 1000);
    count === 0 && navigate("/login", {state: location.pathname});
    return () => clearInterval(interval);
  }, [count, navigate, location]);
  return (
    <>
      <div class="d-flex justify-content-center align-items-center flex-column"
      style={{height: '80vh'}}>
        <h1>Redirecting page in {count}</h1>
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}
