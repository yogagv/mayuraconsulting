import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import amaron from '../../assets/images/1920X470_AmaronLogo.jpg'
import sun from '../../assets/images/sun.jpg';
import swing from '../../assets/images/swing.png'
import grasim from '../../assets/images/grasim.jpg'
import arabindo from '../../assets/images/arabindo.png'
import llyod from '../../assets/images/lloyd-logo.png' 
import './client.css'
import { Card } from "react-bootstrap";

const Clients = () => {

  const settings = {

    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"

  }

  return (
    <>
        <h1 className='text-center text-light mt-5'>Our Esteemed Partners</h1>
        <div className="slider-container mt-5">
      <Slider {...settings}>
        <div>
        <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={amaron} />
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sun} />
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={swing} />
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={grasim} />
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem', height: '6rem' }}>
      <Card.Img variant="top" src={arabindo} />
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={llyod} />
    </Card>
        </div>
      </Slider>
    </div>
    </>
  )
}

export default Clients