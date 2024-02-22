import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import img from '../assets/img/img-onboarding.png';

function Onboarding() {
    return (
        <>
            <div className="onboarding gap-4">
                <div className="d-flex flex-column align-items-center gap-2">
                    <h3 className="onboarding-title">Quran App</h3>
                    <p className="onboarding-description">Learn Quran and Recite once everyday</p>
                </div>
                <div className="d-flex flex-column align-items-center relative">
                    <img src={img} alt="onboarding" className='onboarding-image' />
                    <Link to='/quran' className="btn btn-secondary btn-absolute">Get Started</Link>
                </div>
            </div>
        </>
    );
}

export default Onboarding;