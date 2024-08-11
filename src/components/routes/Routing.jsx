import React from 'react'
import { Routes, Route } from 'react-router-dom'

import CurrentOpenings from '../CurrentOpenings/CurrentOpenings'
import ClosedOPenings from '../ClosedOpenings/ClosedOPenings'
import Home from '../Home/Home'
import About from '../About/About'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'


const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='testimonials' element={<Testimonials />}/>
            <Route path='/currentOpenings' element={< CurrentOpenings/>}/>
            <Route path='/recentlyClosed' element={< ClosedOPenings/>}/>
        </Routes>
    </div>
  )
}

export default Routing