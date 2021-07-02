import React, { useState } from 'react'
import './css/Subscription.css'

const Subscription = () => {
    const [email, setemail] = useState('');
    function validate(event){
        event.preventDefault();
        setemail(email)
    }
    return (
        <div className="container-fluid subscription-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="subscription-content">
                            <h2>Get Update from anywhere</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, consequuntur.</p>
                            <div className="subscription-form">
                                <form onSubmit={validate}>
                                    <input type="email" value={email} onChange={((e) => { setemail(e.target.value) })} />
                                    <button type="submit">Subscription</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription
