import "./navbar.css";
import { Link } from "react-router";

function Navbar() {
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
          <li>
            <span>00</span>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <span>01</span>
            <Link to="/destination" className="nav-link">Destination</Link>
          </li>
          <li>
            <span>02</span>
            <Link to="/crew" className="nav-link">Crew</Link>
          </li>
          <li>
            <span>03</span>
            <Link to="/technology" className="nav-link">Technology</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
