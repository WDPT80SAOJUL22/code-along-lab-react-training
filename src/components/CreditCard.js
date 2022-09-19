import React from 'react';
import visa from "../assets/images/visa.png";
// import masterCard from '../assets/images/master-card.svg';

import './CreditCard.css'

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {

    let cardCompany = visa; 

    // if(type === 'Master Card'){
    //     cardCompany = masterCard;
    // }

    if(expirationMonth < 10){
        expirationMonth = '0' + expirationMonth
    }

  return (
    <div style={{backgroundColor: bgColor, color:color}} className='cardStyle'>
      <div>
        <img src={cardCompany} alt="card company" />
      </div>
      <div>
        **** **** **** {number.slice(-4)}
      </div>
      <div>
        <p>Expires {expirationMonth}/{expirationYear.toString().slice(-2)}</p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
