import React from 'react';
import { Container, Navbar,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './navbar.css';


export default function Topbar() {
    return (
    <>
<Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className='navbar navbar-dark' fixed="top">
    <Container>
        <Navbar.Brand href="/home"  className='navbar-brand' style={{color:'crimson'}} >AGO</Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <div className="me-auto"></div>
        <Nav className="navbar-nav me-2">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link} to="/aboutPage">About</Nav.Link>
            <Nav.Link  as={Link} to="/portfolioPage">Portfolio</Nav.Link>
            <Nav.Link  as={Link} to="/contactPage">Contact</Nav.Link>
        </Nav>
</Navbar.Collapse>
</Container>
</Navbar>
        </>
    )
}


