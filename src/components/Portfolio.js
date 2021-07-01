import React, { useState } from 'react'
import './css/Portfolio.css'
import Gallary from './Gallary'
import Menu from './Gallary'
export const Portfolio = () => {
    const [item, setitem] = useState(Menu)
    const filterItem = (catItem) => {
        const updatedItem = Menu.filter((currentElm) => {
            return currentElm.category === catItem;
        })
        setitem(updatedItem);
    }
    return (
        <div className="portfolio-area">
            <div className="container-fluid">
                <h2>Recently Done Project<br /> Quality Work</h2>
                <div className="row">
                    <div className="col-md-7">
                        <div className="button-group">
                            <button className="btn first" onClick={() => setitem(Menu)}>all</button>
                            <button className="btn" onClick={() => filterItem('popular')}>popular</button>
                            <button className="btn" onClick={() => filterItem('latest')}>latest</button>
                            <button className="btn" onClick={() => filterItem('following')}>following</button>
                            <button className="btn" onClick={() => filterItem('upcoming')}>upcoming</button>
                        </div>
                    </div>
                </div>
                <div className="row portfolio-content">
                    <div className="menu-content">
                        {
                            item.map((e) => {
                                return (
                                    <div className="content" key={e.id}>
                                        <img className="content-img" src={e.image} alt="image1" />
                                        <h4>{e.name}</h4>
                                        <p>{e.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;