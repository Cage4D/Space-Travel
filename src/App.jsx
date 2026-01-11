import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar/>
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
    </>
  );
}

export default App;