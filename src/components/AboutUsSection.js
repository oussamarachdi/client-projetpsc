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
            <h1>À propos de nous</h1>
            <p className='Description'>
            Bienvenue sur Helping-Hand : un groupe d’étudiants engagés dans l’innovation sociale et la digitalisation. Notre mission : offrir une plateforme sécurisée pour faciliter les dons aux plus démunis. Rejoignez-nous pour créer un avenir inclusif et solidaire grâce à la technologie.
            </p>
            <NavLink to="/about-us" className='btn-aboutus'>En savoir plus</NavLink>                                                                                                             
        </div>
    </div>
  )
}

export default AboutUsSection