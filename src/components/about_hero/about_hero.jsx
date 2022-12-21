import React from "react";
import "./../about_hero/about_hero.css";
import aboutHero from "../../assets/img/about_img_hero.png"

const AboutHero = () => {
  return (
    <div className="aboutHero container">
      <div>
        <span className="hero_span">About us</span>
        <h1 className="hero_title">Our designs solve problems</h1>
        <p className="hero_copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div>
        <img src={aboutHero} alt="" />
      </div>
    </div>
  );
};

export default AboutHero;
