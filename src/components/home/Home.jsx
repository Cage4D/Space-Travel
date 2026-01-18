import React from "react"
import "./home.css"

function Home() {
    return (
        <section className="home">
        <p className="home-text">
          <span className="home-text__travel">so, you want to travel to</span>
          <span className="home-text__space">space</span>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
        <a href="#" className="home-explore">
          Explore
        </a>
      </section>
    )
}

export default Home;