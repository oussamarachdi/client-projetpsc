import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/Navbar.css'
import Logo from '../images/logo.jpg'
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
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to='/about-us'>About Us</NavLink></li>
                <li><NavLink to='/donate'>Donate</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar