import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./NavBar.css";

function NavBar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
 
  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  const handleLogin = () => {
    // Simulating login success
    // Replace this with your actual login logic
    setLoggedIn(true);
    setShowLogout(true);
    setSearchVisible(false); 
    navigate("/");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setShowLogout(false);
    setSearchVisible(false);
    navigate("/login");
  };

  return (
    <nav id="navbar">
      <div className="nav-wrapper">
        <NavLink exact to="/" className="logo">
          Vector <i className="cart-icon"><FaCartArrowDown /></i>
        </NavLink>
      
        
        <ul className={`nav-links ${searchVisible ? "search-visible" : ""}`}>
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-link"
            >
              Home
            </NavLink>
          </li>
          {!loggedIn ? (
            <li>
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-link"
                onClick={handleLogin}
              >
                Login
              </NavLink>
            </li>
          ) : showLogout && (
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-link"
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              exact
              to="/YourCart"
              activeClassName="active"
              className="nav-link"
            >
              Your Cart
              <i className="your-cart-icon">
                <AiOutlineShoppingCart />
              </i>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
