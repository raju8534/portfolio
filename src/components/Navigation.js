import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';
import './css/Navigation.css';
class Navigation extends Component {

    changebackground = () => {
        console.log(window.scrollY);
    }
    render() {
        return (
            <div className="nav-area sticky-top">
                <div>
                    <Navbar className="container" expand="lg">
                        <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link className="active" href="#home">Home</Nav.Link>
                                <Nav.Link href="#service">Services</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div >
        )
    }
}

export default Navigation
