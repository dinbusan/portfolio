import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <nav className="flex relative z-30  text-2xl text-white bg-black bg-opacity-70">
        <Link to="/">
          <h1 className="text-5xl tracking-wider star-trek pl-10 pt-2 md:text-8xl">
            Deann&#x200a;Videtto
          </h1>
        </Link>
        <div className="ml-auto ">
          <ul className="space-x-0 tracking-wider flex mx-0 text-amber-400 roddenberry">
            <Link to="/">
              <li className="nav-button hover:bg-amber-400">HOME</li>
            </Link>
            <Link to="/about">
              <li className="nav-button hover:bg-sky-400">ABOUT</li>
            </Link>
            <Link to="/projects">
              <li className="nav-button hover:bg-rose-400">PROJECTS</li>
            </Link>
            <Link to="/contact">
              <li className="nav-button hover:bg-indigo-400">CONTACT</li>
            </Link>
            <Link to="/resume">
              <li className="nav-button hover:bg-amber-400">RESUMÉ</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
