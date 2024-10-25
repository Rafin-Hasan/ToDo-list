import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navber = () => {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/todo">To Do</Link>
        <Link to="/done">Done</Link>
      </div>
    </nav>
  );
};

export default Navber;
