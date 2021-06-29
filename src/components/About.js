import React from 'react'
import img from '../images/about-us.png'
import './css/About.css'

export const About = () => {
    return (
        <div className="about-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img className="about-img" src={img} alt="about" />
                    </div>
                    <div className="col-md-6">
                        <div className="about-text pt-5">
                            <h1> <span>Let Me </span>
                                <span>Introduce</span>
                                <span>My Self</span>
                            </h1>
                            <div className="paragraph py-4 w-75">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum iure obcaecati vel possimus officia maiores perferendis ut! Quos, perspiciatis.</p>
                                <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
                            </div>
                            <button className="btn btn-primary">Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About