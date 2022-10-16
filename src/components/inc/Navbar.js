import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div>
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
        <div className="container">
        <Link className="navbar-brand" to="/">Notes</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="navbar-nav navbar-right ml-auto">             
            <li className="nav-item"><Link className="nav-link" to="">Profile</Link></li>
            <li className="nav-item"><Link className="nav-link" to="">Log In</Link></li>
          </div>
          </div>
        </div>
      </nav>   
    </div>
    )
}

export default Navbar;