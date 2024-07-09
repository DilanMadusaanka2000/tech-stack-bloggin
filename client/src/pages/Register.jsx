import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import axios from "axios";


export default function Register() {

  const [inputs , setInputs] = useState ({
    username:"",
    emial:"",
    password:"",
  })

  const [err , setErr] = useState(null)
  const navigate = useNavigate()
//we can input multiple input in one function
 const handleChnage = e=>{

    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))

 }


 const handleSubmit= async (e)=>{

   e.preventDefault();

   try 
   {
    await axios.post("auth/register",inputs)
    navigate("/login")
    
   } catch (err) {

    setErr(err.response.data);
    
   }
     
 }

  return (
    <div>

      
     <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input type="text" placeholder='username' name='username' onChange={handleChnage}/>
        <input type="email" placeholder='email' name='email' onChange={handleChnage} />

        <input type="password" placeholder='password' name='password'onChange={handleChnage} />
 
        <button onClick={handleSubmit}> Register</button>

        {err &&<p>{err}</p>}
        <span>Do have account ? <Link to ="/login">Login</Link> </span>
      </form>


     </div>

    </div>
  )
}
