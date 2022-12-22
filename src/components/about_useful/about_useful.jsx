import React from "react";
import "./../about_useful/about_useful.css";
import Icon1 from "../../assets/img/Icons.png"
import Icon2 from "../../assets/img/Icon2.png"
import Icon3 from "../../assets/img/Icon3.png"
import Ipsum1 from "../../assets/img/ipsum1.png"
import Ipsum2 from "../../assets/img/ipsum2.png"
import Ipsum3 from "../../assets/img/ipsum3.png"
import Ipsum4 from "../../assets/img/ipsum4.png"
import Ipsum5 from "../../assets/img/ipsum5.png"

const AboutUseful = () => {
  return (
    <div className="about_useful container">
      <h2 className="about_useful_title">The benefits of working with us</h2>
      <div className="about_useful_box">
        <div className="about_useful_box_text">
          <img src={Icon1} alt="" />
          <h4 className="about_useful_box_title">Customize with ease</h4>
          <p className="about_useful_box_copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
        <div className="about_useful_box_text">
          <img src={Icon2} alt="" />
          <h4 className="about_useful_box_title">Perfectly Responsive</h4>
          <p className="about_useful_box_copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
        <div className="about_useful_box_text">
          <img src={Icon3} alt="" />
          <h4 className="about_useful_box_title">Friendly Support</h4>
          <p className="about_useful_box_copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
      </div>
      <div className="about_useful_ipsum">
        <div className="about_useful_ipsum_1">
            <p className="about_useful_ipsum_1_copy">100.000+</p>
            <span className="about_useful_ipsum_1_span">Finsweet Users</span>
        </div>
        <div className="about_useful_ipsum_2">
            <img src={Ipsum1} alt="" width={161} height={32} />
            <img src={Ipsum2} alt="" width={136} height={32}/>
            <img src={Ipsum3} alt="" width={135} height={32}/>
            <img src={Ipsum4} alt="" width={153} height={32}/>
            <img src={Ipsum5} alt="" width={136} height={32}/>
        </div>
      </div>
    </div>
  );
};

export default AboutUseful;
