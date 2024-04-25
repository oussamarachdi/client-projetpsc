import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Banner.css'
const Banner = () => {
  return (
    <header className='banner'>
        
        <div className='hero-section'>
            <h1 className='hero-title'>Hello Dear.</h1>
            <h3 className='sub-hero-title'>Want To Donate Here?</h3>
            <NavLink to='/donate' className='Donate-btn'>Donate</NavLink>
        </div>
    </header>
  )
}

export default Banner