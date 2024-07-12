import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

export default function Nav() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/login" style={{ textDecoration: 'none', color: 'blue' }}>Tech Stack</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto">
              <Link className="nav-link active" to="/" aria-current="page">Home</Link>
              <Link className="nav-link active" to="/?cat=science">Science</Link>
              <Link className="nav-link active" to="/?cat=tec">Technology</Link>
              <Link className="nav-link active" to="/?cat=art">Art</Link>
              <Link className="nav-link active" to="/?cat=design">Design</Link>
              <Link className="nav-link active" to="/write" style={{ textDecoration: 'none', color: '' }}>Write</Link>
            </div>
            <div className="d-flex align-items-center"> {/* Align items center to align username and buttons */}
              {currentUser && (
                <p className="nav-link active me-2" style={{ textDecoration: 'none', color: 'blue', margin: 0 }}> {currentUser?.username} </p>
              )}

              {currentUser ? (
                <button className="btn btn-outline-success" style={{ textDecoration: 'none', color: 'inherit' }} onClick={logout}>Logout</button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-outline-primary me-2" style={{ textDecoration: 'none', color: 'inherit' }}>Log in</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
