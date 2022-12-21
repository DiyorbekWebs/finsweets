import React from "react";
import "./../about_mission/about_mission.css";
import Missoin1 from "../../assets/img/mission.png";
import Mission2 from "../../assets/img/mission2.png"

const AboutMission = () => {
  return (
    <div className="mission">
      <div className="about_mission container">
        <div className="about_mission_text">
          <div className="about_mission_text_1">
            <span className="about_mission_span">Our Mission </span>
            <h3 className="about_mission_title">Inspire, Innovate, Share</h3>
            <p className="about_mission_copy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="about_mission_text_2">
            <img src={Missoin1} alt="" />
          </div>
        </div>
        <div className="about_mission_text_3">
            <div className="about_mission_text_2">
              <img src={Mission2} alt="" />
            </div>
          <div className="about_mission_text_1">
            <span className="about_mission_span">Our Vision</span>
            <h3 className="about_mission_title">Laser focus</h3>
            <p className="about_mission_copy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
