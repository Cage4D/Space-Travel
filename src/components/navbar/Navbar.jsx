import React from "react"
import "./navbar.css";
import { NavLink } from "react-router";

function Navbar() {
  const paths = ["Home", "Destination", "Crew", "Technology"]
  return (
    <nav className="nav_bar">
      <div className="logo-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="logo"
          viewBox="0 0 48 48"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <p className="nav-line"></p>
      <input type="checkbox" className="menu-toggle" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="nav-container">
        <ul className="nav-container__list">
          {paths.map((item, index) => (
            <li
            key={item}>
              <span>0{index}</span>
              <NavLink 
              to={item === "Home" ? "/" : item.toLowerCase()}
              className={({isActive}) => `nav-link ${isActive ? "nav-active": ""}`}>{item}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
