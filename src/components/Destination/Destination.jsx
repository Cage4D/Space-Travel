import "./destination.css";
import {
  moonPng,
  moonWebp,
  europaPng,
  europaWebp,
  marsPng,
  marsWebp,
  titanPng,
  titanWebp,
} from "./exports";

function Destination() {
  return (
    <div className="destination-container">
      <section className="destination-contents">
        <p className="destination-text">
          <span>01</span>pick your destination
        </p>
        <div className="img-container">
          <picture>
            <source srcSet={moonWebp} type="image/webp" />
            <img src={moonPng} alt="An image of the moon" />
          </picture>
        </div>
        <div className="destination-contents__info">
          <div className="planetary-body-names-group">
            <button type="button">Moon</button>
            <button type="button">Mars</button>
            <button type="button">Europa</button>
            <button type="button">Titan</button>
          </div>
          <h3 className="planetary-body-name">MOON</h3>
          <p className="planetary-body-desc">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="divisor"></div>
          <div className="planetary-body-info-container">
            <div className="info-1">
              <p>avg. distance</p>
              <h4>50,000 KM</h4>
            </div>
            <div className="info-2">
              <p>Est. travel time</p>
              <h4>2 DAYS</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destination;
