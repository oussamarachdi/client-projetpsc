import React from 'react'
import '../Styles/Home.css'
import AboutUsSection from '../components/AboutUsSection'
import Banner from '../components/Banner'
import SponsorsSection from '../components/SponsorsSection'
import TeamSection from '../components/TeamSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>

        <Banner />
        <AboutUsSection />
        <span className='line'></span>
        <SponsorsSection />
        <span className='line'></span>
        <TeamSection />
        <Footer />

    </div>
  )
}

export default Home