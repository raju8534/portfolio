import React from 'react'
import img from '../images/services/s1.png'
import img2 from '../images/services/s2.png'
import img3 from '../images/services/s3.png'
import img4 from '../images/services/s4.png'
import './css/Services.css';
export const Services = (props) => {
    return (
        <div className="service-area text-center container-fluid">
            <h2>Services</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
            <div className="container">
                <div className="row services">
                    <div className="col-md-3 content">
                        <img src={img} alt="service-img1" />
                        <h5>wp developer</h5>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="col-md-3 content active">
                        <img src={img2} alt="service-img2" />
                        <h5>wp developer</h5>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="col-md-3 content">
                        <img src={img3} alt="service-img3" />
                        <h5>wp developer</h5>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="col-md-3 content">
                        <img src={img4} alt="service-img4" />
                        <h5>wp developer</h5>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services
