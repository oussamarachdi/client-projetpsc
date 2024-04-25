import React from 'react'
import '../Styles/FlipCardSponsor.css'

const FlipCardSponsor = ({imageSrc, name}) => {

  return (
    <div className='card'>
       <div className='card-container'>
        <div className='card-front'>
            <img src={imageSrc}/>
        </div> 
        <div className='card-back'>
            {name}
            </div>
        </div> 
        

    </div>
  )
}

export default FlipCardSponsor