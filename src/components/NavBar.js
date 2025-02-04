import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/userform">UserForm</Link></li>
        <li><Link to="/editor">Text Editor</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        {/* <li><Link to="/login">Login</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
