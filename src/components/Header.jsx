import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="">
      <nav className="flex relative z-30 text-2xl text-white bg-black bg-opacity-70">
        <Link to="/">
          <h1 className="text-5xl tracking-wider star-trek pl-10 pt-2 md:text-8xl">
            Deann&#x200a;Videtto
          </h1>
        </Link>
        <div className="ml-auto mr-5 mt-3 md:mt-0 md:ml-auto ">
          <ul className="hidden md:flex space-x-0 tracking-wider flex mx-0 text-amber-400 roddenberry">
            <Link to="/">
              <li className="nav-button hover:bg-amber-400">HOME</li>
            </Link>
            <Link to="/about">
              <li className="nav-button hover:bg-sky-400">ABOUT</li>
            </Link>
            <Link to="/skills">
              <li className="nav-button hover:bg-rose-400">SKILLS</li>
            </Link>
            <Link to="/projects">
              <li className="nav-button hover:bg-indigo-400">PROJECTS</li>
            </Link>
            <Link to="/contact">
              <li className="nav-button hover:bg-amber-400">CONTACT</li>
            </Link>
          </ul>
          {/*hamburger*/}
          <div
            onClick={handleClick}
            className="md:hidden z-10"
            style={{ fontSize: "2rem" }}
          >
            {!nav ? <FaBars /> : <FaTimes />}
          </div>
          {/*mobile menu*/}
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-black roddenberry flex flex-col justify-center items-center"
            }
          >
            <li className="py-6 text-4xl">
              <Link onClick={handleClick} to="/" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="py-6 text-4xl">
              {" "}
              <Link
                onClick={handleClick}
                to="/about"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="py-6 text-4xl">
              {" "}
              <Link
                onClick={handleClick}
                to="/skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="py-6 text-4xl">
              {" "}
              <Link
                onClick={handleClick}
                to="/projects"
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="py-6 text-4xl">
              {" "}
              <Link
                onClick={handleClick}
                to="/contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
