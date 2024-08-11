import React from 'react'
import empneeds from '../../assets/images/empneeds.png';
import talentsearch from '../../assets/images/talentsearch.png';
import support from '../../assets/images/support.png';
import './about.css'

const About = () => {
  return (
    <div className="aboutus">
    <div className="container">
        <div className="col-md-12">
        <h1 className='text-center'>Why Mayuras'</h1>
        <p className='text-light mt-3 text-center'> We specialize in matching top talent with the right opportunities.</p>
             <p className='ms-5 text-light'>Our expertise in manpower solutions ensures that both employers 
              and job seekers find the perfect fit, driving success for everyone involved.
              Our expertise lies in carefully matching top-tier professionals with organizations that value and utilize their skills. 
                Whether you're a business looking to elevate your team or a professional seeking a new challenge, our tailored manpower solutions ensure that every placement is a step towards mutual success. 
                Trust us to be your partner in achieving excellence in workforce management and career development.</p>
        </div>
        <div className="container mt-5">
        <div className="row">
        <div className="col-md-3 mt-5">
                <div className="container">
                    <h3 className='work text-light'>How We Work!</h3>
                </div>
            </div>
            <div className="col-md-3 workone mt-5">
                <div className="container">
                    <div className="circle">
                        <img src={empneeds} className='circle-img' alt="" />
                        <h6 className='text-light fw-bold mt-3'> Understanding Your Needs</h6>
                    </div>
                    <p className='text-light mt-3'>
                    We begin by thoroughly understanding the specific manpower requirements of your manufacturing unit. 
                    This includes assessing the skills, experience, and expertise needed for various roles within your organization. 
                    </p>
                </div>
            </div>
            <div className="col-md-3 workone mt-5">
                <div className="container">
                <div className="circle">
                        <img src={talentsearch} className='circle-img' alt="" />
                        <h6 className='text-light fw-bold mt-3'>Talent Sourcing and Screening</h6>
                    </div>
                    <p className='text-light'>
                    Leveraging our extensive network and industry expertise, we source and screen candidates who meet your criteria. 
                    Our rigorous selection process ensures that only the most qualified and capable professionals are presented to you. 
                    </p>
                </div>
            </div>
            <div className="col-md-3 workone mt-5">
                <div className="container">
                <div className="circle">
                        <img src={support} className='circle-img' alt="" />
                        <h6 className='text-light fw-bold mt-3'>Seamless Integration & Support</h6>
                    </div>
                    <p className='text-light'>
                    Once the right candidates are selected, we assist with their smooth integration into your workforce. 
                    We provide ongoing support to ensure that they adapt well and contribute effectively to your manufacturing processes.
                    </p>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default About