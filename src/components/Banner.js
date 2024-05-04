import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Banner.css'
const Banner = () => {
  return (
    <header className='banner'>
        
        <div className='hero-section'>
            <h1 className='hero-title'>Bonjour à tous !</h1>
            <h3 className='sub-hero-title'>Vous voulez faire un don ici ?</h3>
            <NavLink to='/donate' className='Donate-btn'>Faire un don</NavLink>
        </div>
    </header>
  )
}

export default Banner