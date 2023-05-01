import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <nav className="flex">
        <h3>Deann Videtto</h3>
        <ul className="flex ml-auto space-x-5">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
