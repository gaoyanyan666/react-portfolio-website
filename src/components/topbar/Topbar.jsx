import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem} from 'reactstrap';
    import { NavLink } from 'react-router-dom';
import './topbar.css';



export default class Topbar extends React.Component {
    constructor(props) {
    super(props); 

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false
    };
    }
    toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }
    render() {
        return (
        <div>
            <Navbar color="dark" dark expand="md" sticky="top">
            <NavbarBrand  className="mr-auto logo" href="#home">GAO</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar >
            <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link active" href="#home" to="/home">HOME</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" href="#" to="/about">ABOUT</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" href="#" to="/portfolio">PORTFOLIO</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" href="#"  to="/contact">CONTACT</NavLink>
                </NavItem>
                </Nav>     
            </Collapse>
            </Navbar>
        </div>
    );
    }
}
