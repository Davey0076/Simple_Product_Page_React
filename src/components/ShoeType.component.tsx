import React from 'react'
import shoes from '../assets/images/nikes.jpeg'
import './ShoeType.component.css'

type shoeTypesProp = {
    shoeName: string;
}

const ShoeType = ({shoeName}: shoeTypesProp) => {
  return (
    <div className="shoe-type-wrapper">
        <img src={shoes} alt="Nike shoes" />
        <h2 id='shoe-name'>{shoeName}</h2>
      
   </div>
  )
}

export default ShoeType