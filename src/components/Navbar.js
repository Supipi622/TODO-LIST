import React from 'react'
import {Link, NavLink} from "react-router-dom";
import '../style/Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <span>TODO</span>
        <span className="vine">LIST</span>
      </div>

      {/* Navigation links */}
      <ul className="nav-links">
      <li><NavLink to ="/ ">Home</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to ='/register'>Signup</NavLink></li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
