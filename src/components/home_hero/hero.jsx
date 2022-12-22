import React from 'react';
import './hero.css'
import Img from '../../assets/img/Illustration.svg'

const Header = () => {
    return (
    <section className='site-section'>
        <div className='container'>
            <div className='section'>
                <div className='wrapper'>
                    <h1 className='wrapper-h1'>Building stellar websites for early startups</h1>
                    <p className='wrapper-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <button className='wrapper-btn'>View our work</button>
                </div>
                <div className='wrapper-img'>
                    <img src={Img} alt="" />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Header;
