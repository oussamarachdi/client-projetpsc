import React, {useEffect, useState} from 'react'
import '../Styles/Footer.css'
import logo from '../images/logo.jpg'

const Footer = () => {
  const [footerPosition, setFooterPosition] = useState('absolute');

  useEffect(() => {
    const handleFooterPosition = () => {
      const footer = document.querySelector('.footer');
      const bodyHeight = document.body.clientHeight;
      const windowHeight = window.innerHeight;

      if (bodyHeight < windowHeight) {
        setFooterPosition('fixed');
      } else {
        setFooterPosition('absolute');
      }
    };

    handleFooterPosition();

    window.addEventListener('resize', handleFooterPosition);

    return () => {
      window.removeEventListener('resize', handleFooterPosition);
    };
  }, []);
  return (
    <div className='footer'>

        <section className='site-map'>
            <h1>Site Map</h1>
            <p>All our pages Below</p>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About Us</a></li>
                <li><a href='/'>Contact Us</a></li>
                <li><a href='/'>Feature</a></li>
            </ul>
        </section>
        <section className='info'>
            <img src={logo}/>
            <p><span style={{'fontWeight':'bold', 'color':'white'}}>phone number :</span> +216 99 275 200</p>
            <p><span style={{'fontWeight':'bold', 'color':'white'}}>email address : </span>rachdioussama33@gmail.com</p>
        </section>
    </div>
  )
}

export default Footer