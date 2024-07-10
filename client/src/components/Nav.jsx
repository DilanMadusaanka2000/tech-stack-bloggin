import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';



export default function Nav() {
  const {currentUser, logout} = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/login" style = {{ textDecoration:'none', color: 'blue' }}>Tech Stack</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto">
              <p className="nav-link active" aria-current="page" href="/">Home</p>
              <p className="nav-link" href="/?cat=web">web Dev</p>
              <p className="nav-link" href="/?cat=mobile">mobile Dev</p>
              <p className="nav-link" href="/?cat=ai">AI</p>
              <p className="nav-link" href="/?cat=cloud">Cloud Computing</p>
              <Link to ={'/write'}>
               <p className="nav-link" style = {{ textDecoration:'none', color: 'black' }} >Write  </p>

              </Link>

             {currentUser && <p className="nav-link" > {currentUser?.username} </p>} 



            </div>
            <div className="d-flex"> 
            

              <button className="btn btn-outline-primary me-2" style={{ textDecoration: 'none', color: 'inherit' }}>Log in</button>
              <button className="btn btn-outline-success" style={{ textDecoration: 'none', color: 'inherit' }}>Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
