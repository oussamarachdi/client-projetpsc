import React from 'react'
import '../Styles/Home.css'
import AboutUsSection from '../components/AboutUsSection'
import Banner from '../components/Banner'
import SponsorsSection from '../components/SponsorsSection'
import TeamSection from '../components/TeamSection'

const Home = () => {
  return (
    <div>

        <Banner />
        <AboutUsSection />
        <span className='line'></span>
        <SponsorsSection />
        <span className='line'></span>
        <TeamSection />

    </div>
  )
}

export default Home