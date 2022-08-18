import React from "react";
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";

const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const[email,setEmail] =useState("")
  const[password,setPassword] =useState("")
  const location =useLocation();

  const comingFrom=location.state?.from?.pathname || "/";
  
  const handleSubmit=(e)=>{
  e.preventDefault();
  if(email&& password)
  {
      dispatch(login({email,password}))
      .then((r)=>{
          if(r.type===LOGIN_SUCCESS)
          {
              navigate(comingFrom,{replace:true});
          }
      })
  }
  
  };
  return (
    <div>
      <h2>LOGIN</h2>
      <form  onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="enter email" />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password"  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter password" />
        </div>
        <button type="submit" data-testid="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
