import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './services.css'

const Services = () => {
  return (
    <>
        <h1 className='text-center text-light mt-5'>Our Services</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-3 mt-5">
                <Card style={{ width: '18rem', height: '15rem' }}>
      <Card.Body className='card_one'>
        <Card.Title className='text-center mt-5 text-light fw-bold text'>Recruitment and Staffing Services</Card.Title>
      <Button className='btn'>Click here!</Button>
      </Card.Body>
    </Card>
                </div>
                <div className="col-md-3 mt-5">
                <Card style={{ width: '18rem', height: '15rem' }}>
      <Card.Body className='card_two'>
      <Card.Title className='text-center mt-5 text-light fw-bold text'>Consulting Services</Card.Title>
      <Button className='btn'>Click here!</Button>
      </Card.Body>
    </Card>
                </div>
                <div className="col-md-3 mt-5">
                <Card style={{ width: '18rem', height: '15rem' }}>
      <Card.Body className='card_three'>
      <Card.Title className='text-center mt-5 text-light fw-bold text'>Strategic Consulting</Card.Title>
      <Button className='btn'>Click here!</Button>
      </Card.Body>
    </Card>
                </div>
                <div className="col-md-3 mt-5">
                <Card style={{ width: '18rem', height: '15rem' }}>
      <Card.Body className='card_four'>
        <Card.Title className='text-center mt-5 text-light fw-bold text'>Industry-Specific Consulting</Card.Title>
        <Button className='btn'>Click here!</Button>
      </Card.Body>
    </Card>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services