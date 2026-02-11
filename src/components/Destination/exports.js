import moonPng from "../../assets/destination/image-moon.png";
import moonWebp from "../../assets/destination/image-moon.webp";

import europaPng from "../../assets/destination/image-europa.png";
import europaWebp from "../../assets/destination/image-europa.webp";

import marsPng from "../../assets/destination/image-mars.png";
import marsWebp from "../../assets/destination/image-mars.webp";

import titanPng from "../../assets/destination/image-titan.png";
import titanWebp from "../../assets/destination/image-titan.webp";


const moonDescription = `See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.`;

const marsDescription = `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`;

const europaDescription = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`;

const titanDescription = `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`;

export const contents = [
  {
    name: "Moon",
    webp: moonWebp,
    png: moonPng,
    description: moonDescription,
    avgDistance: "384,400 km",
    travelTime: "3 days",
  },
  {
    name: "Mars",
    webp: marsWebp,
    png: marsPng,
    description: marsDescription,
    avgDistance: "225 MIL. km",
    travelTime: "9 months",
  },
  {
    name: "Europa",
    webp: europaWebp,
    png: europaPng,
    description: europaDescription,
    avgDistance: "3 years",
    travelTime: "628 MIL. km",
  },
  {
    name: "Titan",
    webp: titanWebp,
    png: titanPng,
    description: titanDescription,
    avgDistance: "50,000",
    travelTime: "2",
  },
];
