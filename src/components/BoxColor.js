import React from 'react'
import './BoxColor.css'

const BoxColor = ({ r, g, b}) => {
    let colorText = 'white';

    if (r + g + b > 255){
        colorText = 'black';
    }

    const RGBtoHex = (r,g,b) => { 

        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);

        if (r.length === 1){
          r = "0" + r;
        }
        if (g.length === 1){
          g = "0" + g;
        }
        if (b.length === 1){
          b = "0" + b;
        }
      
        return `#${r}${g}${b}`;
      }

  return (
    <div className='box-color'style={{backgroundColor: `rgb(${r}, ${g}, ${b})`, color: colorText}}>
        <p>rgb({r}, {g}, {b})</p>
        {RGBtoHex(r,g,b)}
    </div>
  )
}

export default BoxColor