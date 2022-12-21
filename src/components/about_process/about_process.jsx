import React from "react";
import "./../about_process/about_process.css";
import AboutStartImg from "../../assets/img/about_start.png"

const AboutProcess = () => {
  return (
    <div className="about_process container">
      <div className="about_process_text">
        <div>
          <span className="about_process_span">Who we are</span>
          <h2 className="about_process_title">Goal focussed</h2>
          <p className="about_process_copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div>
          <h2 className="about_process_title2">Continuous improvement</h2>
          <p className="about_process_copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="about_process_start_img">
        <img src={AboutStartImg} alt="" />
      </div>
    </div>
  );
};

export default AboutProcess