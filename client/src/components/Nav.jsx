import React from 'react';

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/login">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto">
              <a className="nav-link active" aria-current="page" href="/login">Home</a>
              <a className="nav-link" href="/login">web Dev</a>
              <a className="nav-link" href="/login">mobile Dev</a>
              <a className="nav-link" href="/login">AI</a>
              <a className="nav-link" href="/login">Cloud Computing</a>

            </div>
            <div className="d-flex">
              <button className="btn btn-outline-primary me-2" style={{ textDecoration: 'none', color: 'inherit' }}>Register</button>
              <button className="btn btn-outline-success" style={{ textDecoration: 'none', color: 'inherit' }}>Login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
