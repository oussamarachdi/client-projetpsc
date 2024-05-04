import React from 'react'
import '../Styles/FlipCardSponsor.css'

const FlipCardTeam = ({imageSrc, name, desc}) => {

  return (
    <div className='card'>
       <div className='card-container'>
        <div className='card-front'>
            <img src={imageSrc}/>
        </div> 
        <div className='card-back'>
            <p>{name}</p>
            
            <span>{desc}</span>
            </div>
        </div> 
        

    </div>
  )
}

export default FlipCardTeam