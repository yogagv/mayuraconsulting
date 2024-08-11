import React from 'react'
import Hero from '../Hero/Hero'
import './home.css'
import About from '../About/About'
import Jobs from '../Jobs/Jobs'
import Openings from '../Openings/Openings'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'
import Clients from '../Clients/Clients'
import Newsletter from '../Newsletter/Newsletter'



const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Jobs />
        <Openings />
        <Services />
        <Clients />
        <Testimonials />
        <Newsletter />
    </div>
  )
}

export default Home