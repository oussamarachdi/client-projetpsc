import React from 'react'
import Ala from '../images/ala.jpg'
import Salem from '../images/salem.jpg'
import Amine from '../images/amine.jpg'
import Oussama from '../images/oussama.jpg'
import Hamdi from '../images/hamdi.jpg'
import FlipCardTeam from './FlipCardTeam'
import '../Styles/SponsorsSection.css'

const TeamSection = () => {
  return (
    <div className='sponsor'>
        <h2 className='title'>Notre Équipe</h2>
        <section className='cards-section'>
            <FlipCardTeam imageSrc={Oussama} name={'Oussama Rachdi'} desc={"Web Developer"}/>
            <FlipCardTeam imageSrc={Salem} name={'Salem Daldoul'} desc={"Sponsor Team"}/>
            <FlipCardTeam imageSrc={Ala} name={'Ala Edine Salmouna'} desc={"Sponsor Team"}/>
            <FlipCardTeam imageSrc={Hamdi} name={'Hamdi Abdeloui'} desc={'Digital Marketing'}/>
            <FlipCardTeam imageSrc={Amine} name={'Amine Hamdi'} desc={'Sponsor Team'}/>
        </section>
    </div>
  )
}

export default TeamSection


