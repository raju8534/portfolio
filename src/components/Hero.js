import React from 'react'
import './css/Hero.css'
import img from '../images/banner/banner-image.png'
const Hero = () => {
    return (
        <div className="hero-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 hero-text">
                        <h3>Hey</h3>
                        <h1>I am Md. Nasir Uddin</h1>
                        <h4>Frontend Developer <span style={{ color: "#7851EA", }}>(React JS)</span></h4>
                        <button className="btn btn-outline-primary">Hire Me</button>
                    </div>
                    <div className="col-md-6 hero-img">
                        <img src={img} alt="banner" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero
