import React,{useState} from 'react';
import './style.css';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';

const Navbars = (props) => {
        const [search, setSearch] = useState(false)
        const submitSearch = (e) => {
            e.preventDefault();
            alert("searched");
        }
        const openSearch = () =>{
            setSearch(true);
        }
        const searchClass=search?'searchInput active': 'searchInput';

    return (
        
        <Navbar bg="light" expand="lg">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about-us">About Us</Nav.Link>
                    <Nav.Link href="/post">Posts</Nav.Link>
                    <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                </Nav>
                <Form inline >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 " className={searchClass} />
                    <Button onClick={submitSearch} variant="success" className={openSearch} >Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbars