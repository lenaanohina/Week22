import React from "react";
import Hero from "./Hero";
import heroesData from "../heroesData.json";
import "./HeroesPage.css";

const HeroesPage = () => {
  return (
    <div className="heroes-container">
      {heroesData.map((hero, index) => (
        <Hero
          key={index}
          name={hero.name}
          universe={hero.universe}
          alterego={hero.alterego}
          occupation={hero.occupation}
          friends={hero.friends}
          superpowers={hero.superpowers}
          url={hero.url}
          info={hero.info}
        />
      ))}
    </div>
  );
};

export default HeroesPage;
