import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slider = () => {
  return (
    <div className="slider-container">
        <div className="row">

      <div className="arrow arrow-left ">
      <ArrowBackIosIcon/>
      </div>
      
        <div className="slide">
            <div className="img-container">
            <img src="https://i.ibb.co/47z24B4/pexels-godisable-jacob-896291.jpg" alt="pexels-godisable-jacob-896291" border="0" />
            </div>
            <div className="info-container">
                <h1>Even more than you expected!</h1>
                <p>Fashion, Premium, Sneakers, Sportswear and more.</p>
                <button className="button-1">Shop now!</button>
            </div>
        
      </div>
      <div className="arrow arrow-right">
      <ArrowForwardIosIcon/>
      </div>
    </div>
    </div>
);
}

export default Slider
