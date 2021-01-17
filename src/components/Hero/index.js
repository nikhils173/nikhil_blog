import React from 'react';
import Cards from '../UI/Card';
import Logo from '../Logo';
import Navbars from '../Navbar';

const Hero = (props) => {
    return (
        <Cards>
            <div style={{padding:'50px 0'}}>
                <Logo />
            </div>
            <Navbars />
        </Cards>
    )
}

export default Hero
