import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          <i className="fas fa-check-double me-2"></i>
          TodoMaster
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active fw-bold' : ''} fs-5`} 
                aria-current="page" 
                to="/"
              >
                <i className="fas fa-home me-1"></i>
                Home
                {location.pathname === '/' && <span className="visually-hidden">(current)</span>}
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/createTask' ? 'active fw-bold' : ''} fs-5`} 
                to="/createTask"
              >
                <i className="fas fa-plus-circle me-1"></i>
                Add New Task
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/about' ? 'active fw-bold' : ''} fs-5`} 
                to="/about"
              >
                <i className="fas fa-info-circle me-1"></i>
                About
              </Link>
            </li>
          </ul>
          
          <div className="d-flex align-items-center">
            <span className="badge bg-light text-primary rounded-pill p-2 me-3">
              <i className="fas fa-tasks me-1"></i>
              Tasks: 0
            </span>
            <div className="navbar-text text-light">
              <i className="fas fa-user-circle me-1"></i>
              Welcome!
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar