import React from 'react';
import './work.css'
import Card1 from '../../assets/img/pointer 1.png'

const Work = () => {
    return (
    <section id='work' className='site-sectionn'>
        <div className='container'>
            <div className='work'>
                <div className='titles'>
                    <h1 className='titles-h1'>How we work</h1>
                    <p className='titles-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='card'>
                    <div className='card-first'>
                        <img src={Card1} alt="img" />
                        <p className='paragraf'>Strategy</p>
                        <p className='papl'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                    <div className='card-first'>
                        <img src={Card1} alt="img" />
                        <p className='paragraf'>Strategy</p>
                        <p className='papl'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                    <div className='card-first'>
                        <img src={Card1} alt="img" />
                        <p className='paragraf'>Strategy</p>
                        <p className='papl'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                    <div className='card-first'>
                        <img src={Card1} alt="img" />
                        <p className='paragraf'>Strategy</p>
                        <p className='papl'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Work;
