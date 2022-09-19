import React from 'react';
import Rating from './Rating';

import './DriverCard.css'

const DriverCard = ({ name, rating, img, car}) => {

    const { model, licensePlate } = car

  return (
    <div className='driver-card'>
        <div>
            <img src={img} alt="driver" className='img-driver' />
        </div>
        <div>
            <span>{name}</span>
            <Rating>{rating}</Rating>
            <span>{model} - {licensePlate}</span>
        </div>
    </div>
  )
}

export default DriverCard