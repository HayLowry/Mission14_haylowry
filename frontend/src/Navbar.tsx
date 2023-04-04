import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-logo navbar-brand">
        Joel's Movie Site
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-menu navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/podcasts" className="nav-link">
              Podcasts
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movies" className="nav-link">
              Movie List
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
