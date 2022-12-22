import React from 'react';
import './clyents.css'
import women from  '../../assets/img/Mask Group (6).png'
// import { FaChevronLeft } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";

const Clyents = () => {
    return (
        <div className='site-clyents'>
            <div className="container">
                <div className='big-wrapper'>
                    <div className='clyents-title'>
                        <h4 className='title-h4'>What our clients say about us</h4>
                        <p className='title-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </div>
                    <div className='about-us'>
                        <h5 className='about-h5'>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h5>
                        <div className='mini-flex'>
                            <img src={women} alt="img" />
                            <div className='mini-titlle'>
                                <p className='noname'>Jenny Wilson</p>
                                <p className='falsee'>Vice President</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Clyents ;