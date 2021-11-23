import React from 'react';
import { Container, Navbar,Nav } from 'react-bootstrap';

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
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link  href="/aboutPage">About</Nav.Link>
            <Nav.Link  href="/portfolioPage">Portfolio</Nav.Link>
            <Nav.Link  href="/contactPage">Contact</Nav.Link>
        </Nav>
</Navbar.Collapse>
</Container>
</Navbar>
        </>
    )
}


