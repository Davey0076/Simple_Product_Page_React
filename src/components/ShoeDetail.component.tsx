import React from 'react';
import './ShoeDetail.component.css'

type shoeDetailProp = {
    description: string;
    color: string;
    size: string;
}

function ShoeDetail({description, color, size}: shoeDetailProp) {
  return (
    <div className="details_wrapper">
       <p id='description-header'>Description:</p> 
       <p>{description}</p>
       <div className="color-wrapper">
       <p><span>Color:</span> {color}</p>
       <div className="color-selection-btns">
       <button id='btn-red'>Red</button>
       <button id='btn-blue'>Blue</button>
       <button id='btn-green'>Green</button>
       <button id='btn-black'>Black</button>
       </div>
    
       </div>
       <p><span>Size:</span>{size}</p>
       <button>BUY</button>
    </div>
  )
}

export default ShoeDetail