import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <div className='logo-links'>
                <div className='logo'>
                    <a className='justice' href="">
                        Justice
                        <span className='noqte'>.</span>
                    </a>
                </div>
                <nav className='headernav'>
                    <Link className='links' to='/'>Home</Link>
                    <Link className='links' to='/practiceareas'>Practice Areas</Link>
                    <Link className='links' to='/services'>Services</Link>
                    <Link className='links' to='/attorneys'>Attorneys</Link>
                    <Link className='links' to='/about'>About</Link>
                    <Link className='links' to='/contactus'>Contact Us</Link>
                </nav>
            </div>
           
        </div>
    )
}

export default Header