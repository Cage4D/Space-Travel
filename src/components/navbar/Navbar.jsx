import "./navbar.css"

function Navbar() {
  return (
    <nav className="nav_bar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="logo"
        width="48"
        height="48"
      >
        <g fill="none" fillRule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
      <p className="nav-line"></p>
      <div className="nav-container">
        <ul className="nav-container__list">
          <li>
            <span>00</span>
            <a href="#">Home</a>
          </li>
          <li>
            <span>01</span>
            <a href="#Destination">Destination</a>
          </li>
          <li>
            <span>02</span>
            <a href="#Crew">Crew</a>
          </li>
          <li>
            <span>03</span>
            <a href="#Technology">Technology</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;