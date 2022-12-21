import React from 'react';
import './project.css'
import card_img from '../../assets/img/Card.png'
import second  from '../../assets/img/Content.png'
import card from '../../assets/img/Hover Overlay.png'
import big_card from '../../assets/img/Card_big.png'

const Project = () => {
    return (
        <div className='site-project'>
            <div className="container">
                <div className='projects'>
                    <h1 className='projects-title'>View our projects</h1>
                    <div className='cards'>
                        <div className='cards-img'>
                            <img src= {card_img} alt="" />
                            <img className='second' src={second} alt="" />
                        </div>
                        <div className='cards-card'>
                            <img src={card} alt="" />
                            <img className='bid' src={big_card} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default Project;