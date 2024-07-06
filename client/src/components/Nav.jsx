import React from 'react';
import { Link } from 'react-router-dom';



export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/login">Tech Stack</a>
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

            </div>
            <div className="d-flex">
            <button className="btn  me-2" style={{ textDecoration: 'none', color: 'inherit' }}>Write</button>


              <button className="btn btn-outline-primary me-2" style={{ textDecoration: 'none', color: 'inherit' }}>Register</button>
              <button className="btn btn-outline-success" style={{ textDecoration: 'none', color: 'inherit' }}>Login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
