import React from "react";
import "./technology.css";
import { contents } from "./exports";

function Technology() {
  const [spaceItem, setSpaceItem] = React.useState(contents[0]);
  return (
    <div className="technology-container">
      <section className="technology-contents">
        <p className="technology-text">
          <span>03</span>Space launch 101
        </p>
        <div className="technology-button-group">
          {contents.map((item, index) => (
            <button
              key={item}
              className={spaceItem.header === item.header ? "tech-btn active-tech-btn" : "tech-btn"}
              onClick={() => setSpaceItem(item)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="technology-info">
          <p className="mini-header">THE TERMINOLOGY…</p>
          <h3 className="header-text">{spaceItem.header}</h3>
          <p className="technology-about">{spaceItem.about}</p>
        </div>
        <div className="tech-img-container">
          <picture>
            <source media="(max-width: 1024px)" srcSet={spaceItem.landscapeImg} />
            <img src={spaceItem.portraitImg} alt={spaceItem.header} />
          </picture>
        </div>
      </section>
    </div>
  );
}

export default Technology;
