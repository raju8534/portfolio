import React from 'react'
import { Progress } from 'reactstrap';
import './css/Skills.css'
const Skills = () => {
    return (
        <div className="skill-area">
            <h2 className="text-center">My Skills</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="skill-content">
                            <span>html</span>
                            <Progress animated color="success" value="85">85%</Progress>
                            <span>css</span>
                            <Progress animated color="info" value={70}>70%</Progress>
                            <span>javascript</span>
                            <Progress animated color="warning" value={65}>65%</Progress>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill-content">
                            <span>React JS</span>
                            <Progress animated color="info" value={60}>60%</Progress>
                            <span>Photoshop</span>
                            <Progress animated color="warning" value={80}>80%</Progress>
                            <span>Wordpress</span>
                            <Progress animated color="danger" value={50}>50%</Progress>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills
