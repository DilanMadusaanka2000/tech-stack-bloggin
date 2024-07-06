import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'


export default function Register() {
  return (
    <div>

      
     <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input type="text" placeholder='username' name='username'/>
        <input type="email" placeholder='email' name='email'/>

        <input type="password" placeholder='password' name='password' />
 
        <button> Register</button>
        <p>invalid username or password</p>
        <span>Do have account ? <Link to ="/login">Login</Link> </span>
      </form>


     </div>

    </div>
  )
}
