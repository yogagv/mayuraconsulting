import React from 'react'
import newsletter from '../../assets/images/hero-two.png'
import './newsletter.css'

const Newsletter = () => {
  return (
    <div>
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mt-5">
              <h3 className='text-light'>Subscribe now for <br/> Useful consulting information.</h3>
              <input type="text"  placeholder='Enter your Email' className="subscribe-input mt-3"/>
              <button className="subscribe-button">Subscribe</button>
              <p className='mt-4 text-light'>Welcome to our newsletter section! where we share the latest industry insights, trends, 
                and best practices. Our newsletter is packed with expert advice, 
                exclusive content, and updates on our services to help you navigate. </p>
          </div>
          <div className="col-md-6 mt-3">
              <img src={newsletter} alt="newsletter" className='newsletter'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter