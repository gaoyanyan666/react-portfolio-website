import React from 'react';
import { Container, Navbar,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './navbar.css';


export default function Topbar() {
    return (
    <>
<Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='navbar navbar-dark' fixed="top">
    <Container>
        <Navbar.Brand as={Link} to="/home"  className='navbar-brand' style={{color:'crimson'}} >AGO</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" class="navbar-toggler" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" >
        
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
            <div className="me-auto"></div>
        <Nav className="navbar-nav me-1"  defaultActiveKey="/home" >
            <Nav.Item as="li">
            <Nav.Link  as={Link} to="/" eventKey="link-1">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link  as={Link} to="/aboutPage" eventKey="link-2">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link  as={Link} to="/portfolioPage" eventKey="link-3">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link  as={Link} to="/contactPage" eventKey="link-4">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
</Navbar.Collapse>
</Container>
</Navbar>
        </>
    )
}


