import React from "react";
import footy from "../assets/foody.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav id="header" className="bg-black text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="logo-wrapper pl-4 flex items-center">
        <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            <img src={footy} alt="logo" className="w-40 h-40 object-cover" />
        </Link>
          </div>
        <div className="nam-menu-wrapper flex items-center justify-between space-x-10 ">
          <Link className="text-xl" to="/">
            <p>Home</p>
          </Link>
          <Link className="text-xl" to="#about">
            <p>About</p>
          </Link>
        </div>
        <div className="flex items-cener justify-center space-x-5">
          <Link to="/cart" className="text-xl">
            <p >CART ICON</p>
          </Link>
          <Link to="/login" className="text-xl">
            <p >Log In</p>
          </Link>
          <Link to="/signup">
            <p>Sign Up</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
