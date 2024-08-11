import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import heroone from '../../assets/images/hero_one.png'
import herotwo from '../../assets/images/hero_two.png'
import herothree from '../../assets/images/hero_three.png'
import './hero.css'

const Hero = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 100,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };

  return (
    <>
        <div className="hero">
        <div className="container">
            <div className="row">
            <Slider {...settings}>
                <div className="image-container">
                    <img src={heroone}
                      className="hero-img" alt="" />
                <h1 className='overlay-text'>Empowering Your Workforce Needs Connecting Talent with Opportunity
            </h1>
                </div>
                <div className="image-container">
                    <img src={herotwo}
                      className="hero-img" alt="" />
                      <p className='overlay-text-two'>At Mayuras', we bridge the gap between Blue collar professionals and companies in need. Whether you're seeking the perfect candidate or 
                        looking for your next career move, we're here to guide you every step of the way. Let’s build your future together.
                      </p>
                </div>
                <div className="image-container">
                    <img src={herothree}
                      className="hero-img" alt="" />
                       <h1 className='overlay-text-three'>Your Partner in Workforce Excellence</h1>
                </div>
                </Slider>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero