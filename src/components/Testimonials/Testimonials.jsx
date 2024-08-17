import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialone from '../../assets/images/ava-1.jpg'
import testimonialtwo from '../../assets/images/ava-2.jpg'
import testimonialthree from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 0
    }

  return (
    <div>
        <h1 className='text-center text-light mt-5'>Testimonials</h1>
        <div className="container">
            <div className="row">
            <Slider {...settings}>
            <div className="col-md-4 mt-4 pe-5 slide">
                <p className='text-light'>Mayuras' Consulting Agency provided us with invaluable insights that transformed 
                    our business strategy. Their industry-specific expertise and hands-on 
                    approach made a significant impact on our growth trajectory. We highly recommend their services</p>
                    <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-3">
                        <img src={testimonialone} alt="" className='h-75 w-100 rounded' />
                    </div>
                    <div className="col-md-9">
                        <h4 className='text-light'>- Alexandra G. </h4>
                        <p className='text-light'>CEO, Tech Innovators Inc.</p>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="col-md-4 mt-4 pe-5 slide">
            <p className='text-light'>Working with Mayuras' Consulting Agency was a game-changer. Their team helped streamline our operations and 
                improve efficiency across the board. 
                The professionalism and dedication they brought to the table were truly impressive.</p>
                    <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-3">
                        <img src={testimonialtwo} alt="" className='h-75 w-100 rounded' />
                    </div>
                    <div className="col-md-9">
                        <h4 className='text-light'> -Alicen Parker</h4>
                        <p className='text-light'>Operations Manager, Green Earth Solutions</p>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            <div className="col-md-4 mt-4 pe-5">
            <p className='text-light'>The expertise and guidance we received from Mayuras' Consulting Agency have been invaluable. 
                They helped us navigate complex challenges 
                with ease and provided the tools we needed to succeed. We couldn't have asked for a better partner.</p>
                    <div className="container">
                    <div className="col-md-12">
                        <div className="row">
                    <div className="col-md-3">
                        <img src={testimonialthree} alt="" className='h-75 w-100 rounded' />
                    </div>
                    <div className="col-md-9">
                        <h4 className='text-light'>John Deo</h4>
                        <p className='text-light'>Tech lead- Innovac india Ltd.</p>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
            </Slider>
                </div>
                </div>
    </div>
  )
}

export default Testimonials