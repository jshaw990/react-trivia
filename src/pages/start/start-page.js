import React from 'react';

import { Link } from 'react-router-dom'

import mainImage from '../../assets/main-img.png'

function Start(props) {
    return (
        <div className='start-page'>
            <div className='content'>
                <img className='animated bounceInUp' src={mainImage} alt='Sports Fans' />
                <p className='animated bounceInLeft'>Think You're a Hardcore Sports Fan?<br />Test your knowledge. <br /> 10 Questions, 60 Seconds</p>
                <Link to='/quiz' className="animated bounceInRight start-button">Lets Go!</Link>
            </div>
        </div>
    );
}

export default Start;