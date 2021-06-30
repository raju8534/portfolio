import React, { Component } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Services from './Services';
function MainComponent() {

    return (
        <div>
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Services />
        </div >
    )

}

export default MainComponent
