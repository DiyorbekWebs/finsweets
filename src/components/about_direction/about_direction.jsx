import React from "react";
import './../about_direction/about_direction.css'
import AboutLine from "../../assets/img/Line_Indicator.png"

const AboutDirection = ()=>{
    return(
        <div className="about_direction container">
            <h2 className="about_direction_title">The process we follow</h2>
            <div className="about_direction_direction">
                <div>
                    <div className="about_direction_desigin">
                        <span className="about_direction_radio"></span>
                        <img className="about_direction_img" src={AboutLine} alt="" />
                    </div>
                    <h4 className="abouth4">Planning</h4>
                    <p className="about_direction_next">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </p>
                </div>
                <div>
                <div className="about_direction_desigin">
                        <span className="about_direction_radio"></span>
                        <img className="about_direction_img" src={AboutLine} alt="" />
                    </div>
                    <h4 className="abouth4">Conception</h4>
                    <p className="about_direction_next">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </p>
                </div>
                <div>
                <div className="about_direction_desigin">
                        <span className="about_direction_radio"></span>
                        <img className="about_direction_img" src={AboutLine} alt="" />
                    </div>
                    <h4 className="abouth4">Design</h4>
                    <p className="about_direction_next">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </p>
                </div>
                <div>
                <div className="about_direction_desigin">
                        <span className="about_direction_radio"></span>
                        <img className="about_direction_img" src={AboutLine} alt="" />
                    </div>
                    <h4 className="abouth4">Development</h4>
                    <p className="about_direction_next">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutDirection