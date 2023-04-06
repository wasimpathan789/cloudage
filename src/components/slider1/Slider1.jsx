import React from "react";
import "./slider1.css";
import { useState, useEffect } from "react";
import Arrows from "./Arrows";
import Dots from "./Dots";
import SliderContent from "./SliderContent";

const Slider1 = ({ image1, image2, image3, image4 , image5 ,image6, image7, image8, image9 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderImage = [
    { urls: `${image1}` },
    { urls: `${image2}` },
    { urls: `${image3}` },
    { urls: `${image4}` },
    { urls: `${image5}` },
    { urls: `${image6}` },
    { urls: `${image7}` },
    { urls: `${image8}` },
    { urls: `${image9}` }
  ];
  const length = sliderImage.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? length : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider1;
