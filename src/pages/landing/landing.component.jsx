import React from 'react'
import SignIn from '../../components/signin/signin.component';
import Logo from '../../assets/a-logo.png';
import './landing.style.scss';

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="lt-card">
                <div className="left-container">
                    <div className="hasac-logo">
                        <img src={Logo}/>
                    </div>
                    <p className="tagline">Nigeria's No 1 Agritech Solution</p>
                </div>

            </div>
            <div className="rt-card">
                <SignIn />
            </div>
        </div>
    )
}

export default Landing;