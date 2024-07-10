import React, {useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from "axios";
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';



export default function Login() {

  const [inputs , setInputs] = useState ({
    username:"",
    password:"",
  });


  const [err , setErr] = useState(null)
  const navigate = useNavigate();
 
  //get current user 
  const {login} = useContext(AuthContext);
//we can input multiple input in one function


 const handleChnage = (e)=>{

    setInputs((prev)=>({...prev, [e.target.name]:e.target.value}));

 };


 const handleSubmit= async (e)=>{

   e.preventDefault();

   try 
   {
    
    await login(inputs)
    navigate("/")
    
   } catch (err) {

    setErr(err.response.data);
    
   }
     
 }

  return (
    <div>

     
     <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='username' name='username'onChange={handleChnage}/>
        <input type="password" placeholder='password' name='password' onChange={handleChnage}/>

        <button onClick={handleSubmit}> Login</button>
        {err &&<p>{err}</p>}
        <span>Don't have account ? <Link to ="/register">Register</Link> </span>
      </form>


     </div>


 
      
    </div>
  )
}
