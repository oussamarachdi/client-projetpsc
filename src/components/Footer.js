import React from 'react'
import '../Styles/Footer.css'
import logo from '../images/logo.jpg'
import { NavLink } from 'react-router-dom'

const Footer = () => {

  return (
    <div className='footer'>

        <section className='site-map'>
            <h1>Plan du site</h1>
            <p>Toutes nos pages ci-dessous</p>
           <ul>
                <li><NavLink to='/' className='footer-link'>Acceuil</NavLink></li>
                <li><NavLink to='/about-us' className='footer-link'>À propos de nous</NavLink></li>
                <li><NavLink to='/donate' className='footer-link'>Faites un don</NavLink></li>
            </ul>
        </section>
        <section className='info'>
            <img src={logo}/>
            <p><span style={{'fontWeight':'bold', 'color':'white'}}>Numéro de Téléphone :</span> +216 99 275 200</p>
            <p><span style={{'fontWeight':'bold', 'color':'white'}}>Address e-mail : </span>helpinghand.psc@gmail.com</p>
        </section>
    </div>
  )
}

export default Footer