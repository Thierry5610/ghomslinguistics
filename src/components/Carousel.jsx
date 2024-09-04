// src/components/Carousel.js
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Styles from './styles/carousel.module.scss';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={Styles.carousel}>
      <button className={Styles.navButton} onClick={goToPrevious}>
        <FaChevronLeft />
      </button>
      <div 
        className={Styles.carouselItems}
        style={{
            transform: `translateX(-${currentIndex * 100}%)`,  
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`${Styles.carouselItem} ${index === currentIndex ? Styles.active : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <button className={Styles.navButton} onClick={goToNext}>
        <FaChevronRight />
      </button>
      <div className={Styles.dots}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`${Styles.dot} ${index === currentIndex ? Styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
