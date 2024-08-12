import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroone from '../../assets/images/hero-one.png';
import './hero.css'

const Hero = () => {

   

  return (
    <>
        <div className="hero">
        <div className="container">
            <div className="row">
                <div className="image-container mt-5">
                    <img src={heroone}
                      className="hero-one mt-3" alt="" />
                <h1 className='overlay-text'>Empowering Your Workforce Needs Connecting Talent with Opportunity
            </h1>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero