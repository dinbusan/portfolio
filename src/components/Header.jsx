import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="">
      <nav className="flex relative z-30 text-2xl text-white bg-black bg-opacity-70">
        <Link to="/">
          <h1 className="text-5xl tracking-wider star-trek pl-10 pt-2 md:text-6xl lg:text-8xl">
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
                : "absolute top-0 left-0 w-full h-screen bg-black object-cover roddenberry flex flex-col justify-center items-center"
            }
          >
            <li className="py-6 text-4xl">
              <Link onClick={handleClick} to="/">
                Home
              </Link>
            </li>
            <li className="py-6 text-4xl">
              {" "}
              <Link onClick={handleClick} to="/about">
                About
              </Link>
            </li>
            <li className="py-6 text-4xl">
              {" "}
              <Link onClick={handleClick} to="/skills">
                Skills
              </Link>
            </li>
            <li className="py-6 text-4xl">
              {" "}
              <Link onClick={handleClick} to="/projects">
                Projects
              </Link>
            </li>
            <li className="py-6 text-4xl">
              {" "}
              <Link onClick={handleClick} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          {/* social icons*/}
          <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul className="">
              <li className="w-[160px] h-[60px] pl-3 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-amber-500">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://www.linkedin.com/in/deann-videtto-8481a166/"
                >
                  Linkedin <FaLinkedin size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] pl-3 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-indigo-500">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="https://www.github.com/dinbusan/"
                >
                  Github <FaGithub size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] pl-3 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-rose-500">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="mailto:deann.videtto@gmail.com"
                >
                  Email <HiOutlineMail size={30} />
                </a>
              </li>
              <li className="w-[160px] h-[60px] pl-3 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-500">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="assets/deann_videtto_cv.docx"
                  download="deann_videtto_cv.docx"
                >
                  Resume <BsFillPersonLinesFill size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;