import React from 'react'
import './footer.css'
import logo from '../../assets/images/logo.png'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
          <div className='bg-body-dark mt-5'>
    <div className="container">
    <div className="col-md-12">
      <div className="row">
      <div className="col-md-3 tourfooter">
          <img src={logo} alt="logo" className='mt-5 h-25 w-25'/>
          <p className='lh-sm text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed maximus euismod sapien at condimentum. Donec fermentum erat laoreet est viverra, 
            ut mollis felis fringilla.</p>
            <FaGithub color='white'/> <span className='ms-1'><FaInstagram color='white' /></span> <span className='ms-1'><FaLinkedinIn color='white'/></span><span className='ms-1'> <TiSocialFacebook color='white'/></span>
            <span className='ms-1'><FaXTwitter color='white'/></span>
      </div>
      <div className="col-md-3 mt-5">
      <h4 className='text-light'>Discover</h4>
      <h6 className='mt-4'>
      <Link to="/" className='text-decoration-none fw-medium' style={{color:"#85756A"}}>Home</Link>
      </h6>
      <h6 className='mt-4'>
      <Link to="/about" className='text-decoration-none  fw-medium mt-5' style={{color:"#85756A"}}>About</Link>
      </h6>
      <h6 className='mt-4'>
      <Link to="/services" className='text-decoration-none  fw-medium mt-5' style={{color:"#85756A"}}>Services</Link>
      </h6>
      </div>
      <div className="col-md-3 mt-5">
      <h4 className='text-light'>Quick Links</h4>
      <h6 className='mt-4'>
      <Link to="/" className='text-decoration-none fw-medium' style={{color:"#85756A"}}>Current Openings</Link>
      </h6>
      <h6 className='mt-4'>
      <Link to="/signin" className='text-decoration-none  fw-medium mt-5' style={{color:"#85756A"}}>Closed Openings</Link>
      </h6>
      <h6 className='mt-4'>
      <Link to="/testimonials" className='text-decoration-none  fw-medium mt-5' style={{color:"#85756A"}}>Testimonials</Link>
      </h6>
      </div>
      <div className="col-md-3 mt-5">
      <h4 className='text-light'> Contact</h4>
      <h6 className='mt-4  text-light'>
        <span className='contact'><FaMapMarkerAlt color='white'/>  </span>   
         Address: <span className='text-light fw-medium'>Cheyyar, Tamilnadu</span>
      </h6>
      <h6 className='mt-4  text-light'>
      <span className='contact'><MdEmail color='white'/>  </span>   
         Email: <span className='text-light fw-medium'>mayurasconsulting@gmail.com</span>
      </h6>
      <h6 className='mt-4  text-light'>
      <span className='contact'><FaPhone color='white'/>  </span>   
         Contact: <span className='text-light fw-medium'> +91 8248181141</span><br/>
         <span className='text-light fw-medium mobile'> +91 8072880531</span>
      </h6>
      </div>
    </div>
    </div>
    </div>
    <div className="container">
    <div className="col-md-12 mt-5">
        <h6 className='text-center text-secondary fw-normal'>Copyright 2024, Design and developed by Yogananthan. All rights reserved.</h6>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Footer