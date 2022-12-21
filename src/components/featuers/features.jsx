import React from 'react';
import './features.css'
import icon from '../../assets/img/Icon.png'

const Features = () => {
    return (
        <div className='site-features'>
            <div className='container'>
                <div className='features'>
                    <div className='tittl'>
                        <p className='tittl_p'>Features</p>
                        <h2 className='tittl_h2'>Design that solves problems, one product at <br /> a time</h2>
                    </div>
                    <div className='full-cards'>
                        <div className='mini-card'>
                            <img className='icons' src={icon} alt="" />
                            <h3>Uses Client First</h3>
                            <p className='pide'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        <div className='mini-card'>
                            <img className='icons' src={icon} alt="" />
                            <h3>Uses Client First</h3>
                            <p className='pide'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        <div className='mini-card'>
                            <img className='icons' src={icon} alt="" />
                            <h3>Uses Client First</h3>
                            <p className='pide'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        <div className='mini-card'>
                            <img className='icons' src={icon} alt="" />
                            <h3>Uses Client First</h3>
                            <p className='pide'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        <div className='mini-card'>
                            <img className='icons' src={icon} alt="" />
                            <h3>Uses Client First</h3>
                            <p className='pide'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        <div className='mini-card'>
                            <img className='icons' src={icon} alt="" />
                            <h3>Uses Client First</h3>
                            <p className='pide'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;