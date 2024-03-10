import React from 'react'
import Heroimg from "../images/hero_bg.jpg"
import '../layout/Header.css'

const Home = () => {
    return (
        <div>
            <img className='img' src={Heroimg} alt="" />
            <div className='texts'>
                <h2><span className='we'>We Fight</span> For</h2>
                <h2>Your Right</h2>
                <p>Another cool free template by the fine folks</p>
                <p>at <a href="" className='colorlib'>Colorlib.</a></p>
                <button className='free'>FREE CONSULTATION</button>
            </div>
        </div>
    )
}

export default Home