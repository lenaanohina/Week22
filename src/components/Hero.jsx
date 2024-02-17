import React from "react";
import "./Hero.css";

const Hero = ({
  name,
  universe,
  alterego,
  occupation,
  friends,
  superpowers,
  url,
  info,
}) => {
  return (
    <div className="hero-card">
      <h2>{name}</h2>
      <div className="hero-info">
        <p>
          <b>Вселенная:</b> {universe}
        </p>
        <p>
          <b>Альтер эго:</b> {alterego}
        </p>
        <p>
          <b>Род деятельности:</b> {occupation}
        </p>
        <p>
          <b>Друзья:</b> {friends}
        </p>
        <p>
          <b>Суперсилы:</b> {superpowers}
        </p>
      </div>
      <img className="hero-img" src={url} alt={name} />
      <h3>Информация о персонаже</h3>
      <p>{info}</p>
    </div>
  );
};

export default Hero;
