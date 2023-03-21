import React from 'react'
import {imgbg} from '../assets/index'
import Products from './Products'

export default function Home() {
    return (
        <div className='hero'>
            <div className="card text-white bg-dark border-0">
                <img src={imgbg} className="card-img" alt="background" 
                height="547px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}

