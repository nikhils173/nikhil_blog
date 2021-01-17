import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css';

const Header = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    <Nav.Link href="#link">Contact Us</Nav.Link>
                </Nav>
                <div>
                    Social media link
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
