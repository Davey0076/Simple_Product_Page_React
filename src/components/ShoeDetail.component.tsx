import React, { useState } from 'react';
import './ShoeDetail.component.css';

type shoeDetailProp = {
  description: string;
  color: string;
  size: string;
}

function ShoeDetail({ description, color, size }: shoeDetailProp) {
  // State to hold the dynamic color style
  const [currentColor, setCurrentColor] = useState(color);

  // Handler to change color state
  const changeColor = (newColor: string) => {
    setCurrentColor(newColor);
  }

  return (
    <div className="details_wrapper">
      <p id='description-header'>Description:</p> 
      <p>{description}</p>
      <div className="color-wrapper">
        <p>
          <span>Color:</span> 
          <span style={{ color: currentColor }}> {currentColor}</span> {/* Display color with dynamic style */}
        </p>
        <div className="color-selection-btns">
          <button id='btn-red' onClick={() => changeColor('Red')}>Red</button>
          <button id='btn-blue' onClick={() => changeColor('Blue')}>Blue</button>
          <button id='btn-green' onClick={() => changeColor('Green')}>Green</button>
          <button id='btn-black' onClick={() => changeColor('Black')}>Black</button>
        </div>
      </div>
      <p><span>Size:</span> {size}</p>
      <button>BUY</button>
    </div>
  );
}

export default ShoeDetail;
