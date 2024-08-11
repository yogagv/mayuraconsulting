import React from 'react'
import './openings.css'
import { Button, Card } from 'react-bootstrap'
import amaron from '../../assets/images/1920X470_AmaronLogo.jpg'
import sunp from '../../assets/images/sun.jpg'
import swing from '../../assets/images/swing.png'
import grasim from '../../assets/images/grasim.jpg'

const Openings = () => {
  return (
    <>
    <div className="current-openings mt-5">
    <h1 className='text-center text-light'>Current Openings</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
    <Card style={{ width: '20rem', height: '25rem' }} className='mt-5'>
      <Card.Img variant="top" src={amaron} className='h-25 w-100' />
      <Card.Body style={{backgroundColor:"#000", color:"#ffff"}}>
        <Card.Title>Amaron Battries Industries Ltd.</Card.Title>
        <Card.Text>
        Deputy Manager - SAP FICO
        P-4190 <hr/>
        Amara raja energy & mobility limited | head office
        Posted On: 06 Aug 2024 <hr />
        Required Experience
        10-12 years
          <Button className='btn'>Click here!</Button>
        </Card.Text>
      </Card.Body>
    </Card>
                </div>
                <div className="col-md-3">
                <Card style={{ width: '20rem', height: '25rem' }} className='mt-5'>
      <Card.Img variant="top" src={sunp} className='h-25 w-100' />
      <Card.Body style={{backgroundColor:"#000", color:"#ffff"}}>
        <Card.Title>Sun Pharma Industries Limited</Card.Title>
        <Card.Text>
        Executive - Environment Health and Safety
        P-4190 <hr/>
        Sun Pharma Industries | Malanpur - Plant
        Posted On: 06 Aug 2024 <hr />
        Required Experience
        2-5 years
        </Card.Text>
        <Button className='btn'>Click here!</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-3">
                <Card style={{ width: '20rem', height: '25rem' }} className='mt-5'>
      <Card.Img variant="top" src={swing} className='h-25 w-100' />
      <Card.Body style={{backgroundColor:"#000", color:"#ffff"}}>
        <Card.Title>Schwing stetter</Card.Title>
        <Card.Text>
        Process Engineer - Fabrication
        P-4190 <hr/>
        Schwing stetter Industries Limited | Cheyyar, Tamil Nadu, India
        Posted On: 11 Jun 2024 <hr />
        Required Experience
        3 to 7 Years
        </Card.Text>
        <Button className='btn'>Click here!</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-3">
      <Card style={{ width: '20rem', height: '25rem' }} className='mt-5'>
      <Card.Img variant="top" src={grasim} className='h-25 w-100' />
      <Card.Body style={{backgroundColor:"#000", color:"#ffff"}}>
        <Card.Title>L&T Grasim Industries</Card.Title>
        <Card.Text>
        Process Engineer - Fabrication
        P-4190 <hr/>
        L&T Grasim Industries | Cheyyar, Tamil Nadu, India
        Posted On: 27 Jul 2024 <hr />
        Required Experience
        3 to 7 Years
        </Card.Text>
        <Button className='btn'>Click here!</Button>
      </Card.Body>
    </Card>
    </div>
    
                </div>
                </div>
            </div>   
    </>
  )
}

export default Openings