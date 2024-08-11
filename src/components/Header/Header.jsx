import React from 'react'
import logo from '../../assets/images/logo.png'
import './header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Navbar expand="lg " className="bg-body-dark">
          <Container>
            <Navbar.Brand>
              <Nav.Link as={Link} to="/">
                <img src={logo} alt="logo" className='logo'/>
                </Nav.Link>
                </Navbar.Brand>
                <Nav.Link as={Link} to="/">
                <h4 className='text-light text-center'>Mayuras' <span><h6>Manpower & Consulting Firm</h6></span></h4>
                </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='navmenu' />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navmenu">
                <Nav.Link as={Link} style={{color:"#85756A", fontWeight:"bold"}} to="/">
                Home
                </Nav.Link>
                <Nav.Link as={Link} style={{color:"#85756A", fontWeight:"bold"}} to="/about">
                About
                </Nav.Link>
              <NavDropdown title="Jobs" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} style={{color:"#85756A", fontWeight:"bold"}} to='/currentOpenings'>Current Openings</NavDropdown.Item>
              <NavDropdown.Item as={Link} style={{color:"#85756A", fontWeight:"bold"}} to='/recentlyClosed'>
                Recently Closed
              </NavDropdown.Item>
              </NavDropdown>
                <Nav.Link as={Link} style={{color:"#85756A", fontWeight:"bold"}} to="/services">
                Services
                </Nav.Link>
                <Nav.Link as={Link} style={{color:"#85756A", fontWeight:"bold"}} to="/testimonials">
                Testimonials
                </Nav.Link>
                <Nav.Link as={Link} style={{color:"#85756A", fontWeight:"bold"}} to="/contact">
                Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header