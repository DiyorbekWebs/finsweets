import React from "react";
import "./../about_team/about_team.css"
import John from "../../assets/img/john.png"
import Simon from "../../assets/img/simon.png"
import Paul from "../../assets/img/paul.png"
import Sara from "../../assets/img/sara.png"

const AboutTeam = ()=>{
    return(
        <div className="team">
            <div className="about_team container">
                <h2 className="about_team_title">Meet our team</h2>
                <div className="about_team_card">
                <div className="about_team_card_box">
                    <img src={John} alt="" />
                    <p className="about_team_card_copy">John Smith</p>
                    <span className="about_team_span">CEO</span>
                </div>
                <div className="about_team_card_box">
                    <img src={Simon} alt="" />
                    <p className="about_team_card_copy">Simon Adams</p>
                    <span className="about_team_span">CTO</span>
                </div>
                <div className="about_team_card_box">
                    <img src={Paul} alt="" />
                    <p className="about_team_card_copy">Paul Jones</p>
                    <span className="about_team_span">Design Lead</span>
                </div>
                <div className="about_team_card_box">
                    <img src={Sara} alt="" />
                    <p className="about_team_card_copy">Sara Hardin</p>
                    <span className="about_team_span">Project Manager</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTeam