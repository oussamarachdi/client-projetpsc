import React from 'react'
import '../Styles/Home.css'
import AboutUsSection from '../components/AboutUsSection'
import Banner from '../components/Banner'
import SponsorsSection from '../components/SponsorsSection'

const Home = () => {
  return (
    <div>

        <Banner />
        <AboutUsSection />
        <span className='line'></span>
        <SponsorsSection />

    </div>
  )
}

export default Home