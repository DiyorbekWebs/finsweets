import React from 'react';
import './login.css'
import ico from '../../assets/img/Get in touch with us.png'

const Login = () => {
    return (
        <div className='site-login'>
            <div className="container">
                <div className='login'>
                    <div className='cardd'>
                        <h6 className='cardd-h6'>Building stellar websites for early startups</h6>
                        <p className='cardd-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquam nemo aperiam accusantium mollitia, dolorem tempora sint fugiat laborum eius vel totam, iste pariatur maiores. Nisi voluptas odio eligendi asperiores.</p>
                    </div>
                    <div className='form'>
                        <div className='box'>
                            <p className='box-send'>Send inquiry</p>
                            <p className='box-lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <form className='text-form'>
                                <input type="text" placeholder='Your Name' />
                                <input type="email" placeholder='Email' />
                                <input type="text" placeholder='Paste your Figma design URL' />
                                <button className='btn-form'>Send an Inquiry</button>
                                <img className='imo' src={ico} alt="" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;