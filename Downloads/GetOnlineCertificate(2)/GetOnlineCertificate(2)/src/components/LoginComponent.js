import React, { Component } from 'react'
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";
class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
       
return (
    <nav className="navbar navbar-expand-md navbar-dark bg-white">
    <div className="container">
    <Link to='/home' className='icon' >
        Get Certified Online
        {/* <i class="fas fa-user-md"></i> */}
        
      </Link>          
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <ul></ul>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/Home">
            Home
          </NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" exact to="/certificate">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/course">
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/paymentdetails">
            Register
          </NavLink>
        </li>
       
      </ul>
    </div>
    
  </div>  
  </nav>

    )   
}
}
export default LoginComponent
