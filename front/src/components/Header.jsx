import React from "react";
import footy from "../assets/foody.png";
import { Link } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"
import {useSelector} from "react-redux"
import {cartProducts} from "../store/cart/cartSlice"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button"


const Header = () => {
const productsInCart = useSelector(cartProducts)
const cartCount = productsInCart ? productsInCart.length : 0
const navigate = useNavigate();
const [isLoggedIn, setIsLoggedIn] = useState(false);


const handleLogout = () => {
  sessionStorage.removeItem('Auth Token');
  sessionStorage.removeItem('User ID');
  window.dispatchEvent(new Event("storage"))
  navigate("/");
}

useEffect(() => {
  const checkAuthToken = () => {
      const currentToken = sessionStorage.getItem('Auth Token');
      if (currentToken) {
          setIsLoggedIn(true);
      } else {
          setIsLoggedIn(false);
      }
  }

  
  checkAuthToken();

  
  window.addEventListener('storage', checkAuthToken);

  
  return () => {
      window.removeEventListener('storage', checkAuthToken);
  }
 
}, []); 

  return (
    <nav  className="bg-black text-white">
        
<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
    <div className="logo-wrapper pl-4 flex items-center">
        <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            <img src={footy} alt="logo" className="w-40 h-40 object-cover"/>
        </Link>
    </div>
    <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
        <Link to="/" className="text-xl">Home</Link>
       <a href="#about" className="text-xl">About</a> </div>
    <div className="flex items-center justify-center space-x-4">
        <Link to="/cart" className="mr-4 relative">
        <FaShoppingCart style={{fontSize:"1.7rem"}}/>
            {cartCount > 0 ? <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-6 -right-1">{cartCount}</div> : null}
        </Link>
        {/* {
            isLoggedIn ? 
            <Button onClick={handleLogout}>Log Out</Button> : 
            (
                <>
                 <Link to="/login">Log In</Link>
                 <Link to="/register">Sign Up</Link>
                </>
            )
        } */}
    </div>
</div>
</nav>
  );
};

export default Header;



