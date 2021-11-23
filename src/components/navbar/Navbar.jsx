import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from "react-router-dom";
import './navbar.css';

class Topbar extends React.Component{

    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state={
            isNavOpen:false
        };
    }
    toggleNav=()=>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    render() {
        return (
            <React.Fragment>
            <Navbar expand="md" dark full fixed="top" className='navbar navbar-dark'>
                <div  className="container">
                <NavbarBrand href="/home" style={{color:'crimson'}} className='navbar-brand'>AGO</NavbarBrand>
                <NavbarToggler className="navbar-toggler" onClick ={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar className="navbar-collapse">
                <Nav navbar className="ml-auto navbar-nav">
                <NavItem className="nav-item active">
                    <NavLink className="nav-link" to="/home">Home</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink className="nav-link" to="/aboutPage">About</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink className="nav-link" to="/portfolioPage">Portfolio</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink className="nav-link" to="/contactPage">Contact</NavLink>
                </NavItem>
                </Nav>
                </Collapse>
                </div>
            </Navbar>
            </React.Fragment>
            
            
            
                )
    }

}
export default Topbar;