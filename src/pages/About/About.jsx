import React from 'react';
import AboutHero from '../../components/about_hero/about_hero';
import AboutProcess from '../../components/about_process/about_process';
import AboutDirection from '../../components/about_direction/about_direction';
import AboutMission from '../../components/about_mission/about_mission';
import AboutUseful from '../../components/about_useful/about_useful';
import AboutTeam from '../../components/about_team/about_team';

const About = () => {
    return (
     <>
        <AboutHero />
        <AboutProcess />
        <AboutDirection />
        <AboutMission />
        <AboutUseful />
        <AboutTeam />
     </>
    );
}

export default About;