import React, { Component } from 'react'
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";
class HeaderComponent extends Component {
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
        GET CERTIFIED ONLINE
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
    <center>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/Home">
            Home
          </NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" exact to="/aboutus">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/guideline">
            Guidelines 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/home">
            Logout
          </NavLink>
        </li>
       
      </ul>
    </div>
    </center>
  </div>  
  </nav>

    )   
}
}
export default HeaderComponent
