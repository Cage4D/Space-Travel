import React from "react";
import "./destination.css";
import { contents } from "./exports";

function Destination() {
  const [planet, setPlanet] = React.useState(contents[0]);
  return (
    <div className="destination-container">
      <section className="destination-contents">
        <p className="destination-text">
          <span>01</span>pick your destination
        </p>
        <div className="img-container">
          <picture>
            <source srcSet={planet.webp} type="image/webp" />
            <img
              src={planet.png}
              alt="An image of the moon"
              width={375}
              height={375}
            />
          </picture>
        </div>
        <div className="destination-contents__info">
          <div className="planetary-body-names-group">
            {contents.map((item) => (
              <button
                key={item.name}
                type="button"
                className = {item.name === planet.name ? "dest-active" : ""}
                onClick={() => setPlanet(item)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <h3 className="planetary-body-name">{planet.name.toUpperCase()}</h3>
          <p className="planetary-body-desc">{planet.description}</p>
          <div className="divisor"></div>
          <div className="planetary-body-info-container">
            <div className="info-1">
              <p>avg. distance</p>
              <h4>{planet.avgDistance}</h4>
            </div>
            <div className="info-2">
              <p>Est. travel time</p>
              <h4>{planet.travelTime}</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destination;
