import React from 'react';
import Home from '../home/Home';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';

export default function HomePage() {
    return (
        <>
            <Home />
            <About/>
            <Portfolio/>
            <Contact/>  
        </>
    )
}
