import React from 'react'
import '../Styles/AboutUsSection.css'
import aboutus from '../images/about-us.jpg'
import { NavLink } from 'react-router-dom'
const AboutUsSection = () => {
  return (
    <div className='about-us'>
        <div className='image-aboutus'>
            <img src={aboutus} alt="About Us" />
        </div>
        <div className='Description'>
            <h1>About Us Example</h1>
            <h3>About Us Sub-title Description</h3>
            <p className='Description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante dolor, scelerisque id feugiat eu, consequat quis dui. Etiam at mattis ante.
            </p>
            <NavLink to="/about-us" className='btn-aboutus'>Read More</NavLink>                                                                                                             
        </div>
    </div>
  )
}

export default AboutUsSection