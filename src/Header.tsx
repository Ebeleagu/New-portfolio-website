import React, { useState, useRef, useEffect } from "react";
import Pic from "/zavid.jpg";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  console.log("Current URL:", location.pathname);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileOverlay, setMobileOverlay] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       setDropdownOpen(false);
  //       setMobileOverlay(false);
  //     }
  //   };

  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (event.key === "Escape") {
  //       setDropdownOpen(false);
  //       setMobileOverlay(false);
  //     }
  //   };

  //   if (isDropdownOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //     document.addEventListener("keydown", handleKeyDown);
  //   }
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [isDropdownOpen, isMobileOverlay]);

  return (
    <header className="h-[12vh] bg-gray-900 text-white flex justify-center relative z-50 shadow-md shadow-gray">
      <div className="flex justify-around items-center h-full w-full max-w-7xl px-4">
        <div className="flex items-center">
          <img
            src={Pic}
            alt="Profile picture of David Ben"
            className="object-cover h-[70px] w-[70px] rounded-full"
          />
          <span className="text-4xl px-4 font-mono ml-2 tracking-wide">
            David Ben
          </span>
        </div>
        {/* <Link to="/about">About</Link> */}
        <div className="relative flex items-center" ref={dropdownRef}>
          <button
            aria-label="Menu"
            aria-haspopup="true"
            // aria-expanded={isDropdownOpen}
            aria-controls="dropdown-menu"
            className="focus:outline-none rounded-sm transition-transform transform hover:scale-115 duration-200"
            onClick={toggleDropdown}
          >
            <IoMenuOutline style={{ fontSize: "2.5rem" }} />
          </button>
        </div>
      </div>

      {!isMobileOverlay && isDropdownOpen && (
        <div
          id="dropdown-menu"
          className="  
            absolute  
            right-4  
            top-[12vh]  
            md:top-auto  
            md:right-4  
            md:mt-3  
            md:w-64  
            w-64  
            font-mono  
            bg-transparent  
            rounded-xl  
            shadow-xl  
            border  
            border-gray-300  
            transition-all  
            duration-300  
            opacity-100  
            scale-100  
            z-50  
          "
        >
          <div className="flex flex-col items-center p-4 border-b border-gray-200 bg-gray-100 rounded-t-xl shadow-sm">
            <img
              src={Pic}
              alt="Profile picture of David Ben"
              className="object-cover h-20 w-20 rounded-full border-2 border-gray-300 mb-2"
            />
            <span className="font-semibold text-lg text-gray-800">
              David Ben
            </span>
          </div>

          <nav className="flex flex-col px-4 py-2 bg-gray-100 rounded-b-xl space-y-2 font-mono text-gray-800">
            <Link
              to="/"
              className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 hover:text-white transition-all duration-200"
              onClick={() => setDropdownOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 hover:text-white transition-all duration-200"
              onClick={() => setDropdownOpen(false)}
            >
              About
            </Link>

            <Link
              to="/services"
              className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 hover:text-white transition-all duration-200"
              onClick={() => setDropdownOpen(false)}
            >
              Services
            </Link>

            <Link
              to="/projects"
              className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 hover:text-white transition-all duration-200"
              onClick={() => setDropdownOpen(false)}
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 hover:text-white transition-all duration-200"
              onClick={() => setDropdownOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      {isMobileOverlay && isDropdownOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-start p-4 font-mono">
          <div className="w-full flex justify-end mb-4">
            <button
              aria-label="Close menu"
              className="text-white text-3xl"
              onClick={() => {
                setDropdownOpen(false);
                setMobileOverlay(false);
              }}
            >
              &times;
            </button>
          </div>

          <div className="flex flex-col items-center mb-6">
            <img
              src={Pic}
              alt="Profile picture of David Ben"
              className="h-24 w-24 rounded-full border-2 border-gray-300 mb-4 object-cover"
            />
          </div>

          <nav className="flex flex-col w-full items-center space-y-4 text-2xl">
            <Link
              to="/"
              className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 hover:text-white transition-all duration-200"
              onClick={() => {
                setDropdownOpen(false);
                setMobileOverlay(false);
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 hover:text-white transition-all duration-200"
              onClick={() => {
                setDropdownOpen(false);
                setMobileOverlay(false);
              }}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 hover:text-white transition-all duration-200"
              onClick={() => {
                setDropdownOpen(false);
                setMobileOverlay(false);
              }}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 hover:text-white transition-all duration-200"
              onClick={() => {
                setDropdownOpen(false);
                setMobileOverlay(false);
              }}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 rounded-lg hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 hover:text-white transition-all duration-200"
              onClick={() => {
                setDropdownOpen(false);
                setMobileOverlay(false);
              }}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}

      <style>
        {`  
          html {  
            scroll-behavior: smooth;  
          }  
        `}
      </style>
    </header>
  );
};

export default Header;
