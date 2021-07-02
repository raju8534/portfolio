import React, { Component } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Portfolio from './Portfolio';
import Subscription from './Subscription';
import Footer from './Footer';
function MainComponent() {

    return (
        <div>
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Services />
            <Portfolio />
            <Subscription />
            <Footer />

        </div >
    )

}

export default MainComponent
