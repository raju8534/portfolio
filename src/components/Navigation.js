import React,{useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';
import './css/Navigation.css';
function Navigation() {
    const[nav_area,setbackground]=useState(false);
    let changeBackground=()=>{
        if(window.scrollY>=80){
            setbackground(true);
            console.log(window.scrollY);
        }  
        else
        setbackground(false);
    }
    window.addEventListener('scroll',changeBackground)
    return (
        <div className={nav_area? 'nav_area activated':'nav_area'}>
            <Navbar className="container" bg="tranparent" expand="lg">
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
        </div >
    )
}

export default Navigation
