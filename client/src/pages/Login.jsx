import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'


export default function Login() {
  return (
    <div>

     
     <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='username' name='username'/>
        <input type="password" placeholder='password' name='password' />

        <button> Login</button>
        <p>invalid username or password</p>
        <span>Don't have account ? <Link to ="/register">Register</Link> </span>
      </form>


     </div>


 
      
    </div>
  )
}
