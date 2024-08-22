import React, { useState, useEffect } from "react";
import "../Styles/slideshow.css";

import leftArrow from "../Assets/left.png";
import rightArrow from "../Assets/right.png";
import banner from "../Assets/banner.jpeg";
import junkdrawer from "../Assets/junkdrawer.jpeg";
import posters from "../Assets/posters.png";
import vandal from "../Assets/vandal.png";
import lib from "../Assets/lib.png";
import startup from "../Assets/startup.png";

function Slideshow() {
  const images = [banner, junkdrawer, posters, vandal, lib, startup];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState({
    fade: 'fade-in'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeProp({ fade: 'fade-out' });
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeProp({ fade: 'fade-in' });
      }, 500); // Fade duration in ms
    }, 5000); // Slideshow interval (5 seconds)

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setFadeProp({ fade: 'fade-out' });
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFadeProp({ fade: 'fade-in' });
    }, 500);
  };

  const handlePrev = () => {
    setFadeProp({ fade: 'fade-out' });
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFadeProp({ fade: 'fade-in' });
    }, 500);
  };

  const handleThumbnailClick = (index) => {
    setFadeProp({ fade: 'fade-out' });
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeProp({ fade: 'fade-in' });
    }, 500);
  };

  return (
    <div className="slideshow-container">
      <img
        src={leftArrow}
        alt="Previous"
        className="arrow left-arrow"
        onClick={handlePrev}
      />
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        className={`slideshow-image ${fadeProp.fade}`}
      />
      <img
        src={rightArrow}
        alt="Next"
        className="arrow right-arrow"
        onClick={handleNext}
      />

      <div className="thumbnails-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
