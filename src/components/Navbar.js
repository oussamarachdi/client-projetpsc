import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Navbar.css'
import Logo from '../images/logo.png'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='navbar'>
        <div className='logo'><img src={Logo} alt='logo'/></div>
        <div className='mobile-menu' onClick={() => {
          setMenuOpen(!menuOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="/">Acceuil</NavLink></li>
                <li><NavLink to='/about-us'>À propos de nous</NavLink></li>
                <li><NavLink to='/donate'>Faire un don</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar