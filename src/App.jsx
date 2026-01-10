function App() {
  return (
    <>
      <nav class="nav_bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="logo"
          width="48"
          height="48"
        >
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
        <p class="nav-line"></p>
        <div class="nav-container">
          <ul class="nav-container__list">
            <li>
              <span>00</span>Home
            </li>
            <li>
              <span>01</span>Destination
            </li>
            <li>
              <span>02</span>Crew
            </li>
            <li>
              <span>03</span>Technology
            </li>
          </ul>
        </div>
      </nav>
      <section class="home">
        <p class="home-text">
          <span class="home-text__travel">so, you want to travel to</span>
          <span class="home-text__space">space</span>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
        <a href="#" class="home-explore">
          Explore
        </a>
      </section>
      {console.log("is this even working???")}
    </>
  );
}

export default App;