import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { sliderItems } from "../data";
import styled from 'styled-components'

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slider = () => {



  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {

    if(direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }


  return (
    <div className="slider-container">
      
        <div direction="left" className="arrow arrow-left" onClick={() => handleClick("left")}>
          <ArrowBackIosIcon />
        </div>
        <Wrapper slideIndex ={slideIndex}>
          {sliderItems.map((item) => (
            <div key={item.id} className="slide">
              <div className="img-container">
                <img
                  src={item.img}
                  alt="pexels-godisable-jacob-896291"
                  border="0"
                />
              </div>
              <div className="info-container">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button className="button-1">Shopit!</button>
              </div>
            </div>
          ))}
        </Wrapper>
        <div direction="right" className="arrow arrow-right" onClick={() => handleClick("right")}>
          <ArrowForwardIosIcon />
        </div>
      
    </div>
  );
};

export default Slider;
