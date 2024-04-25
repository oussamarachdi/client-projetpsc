import React from 'react'
import sponsor1 from '../images/sp1.jpg'
import sponsor2 from '../images/sp2.png'
import FlipCardSponsor from './FlipCardSponsor'
import '../Styles/SponsorsSection.css'

const SponsorsSection = () => {
  return (
    <div className='sponsor'>
        <h2 className='title'>Our Sponsors</h2>
        <section className='cards-section'>
            <FlipCardSponsor imageSrc={sponsor1} name={'الكشافة التونسية جهة سوسة'}/>
            <FlipCardSponsor imageSrc={sponsor2} name={'Ecole Polytechnique Sousse'}/>
        </section>
    </div>
  )
}

export default SponsorsSection
