import React, { useEffect, useState } from 'react';

export default function ImageSlider({ slides }) {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const SlideStyles = {
    width: '100%',
    height: '250px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: slides.length > 0 && slides[CurrentIndex] ? `url(${slides[CurrentIndex].img})` : '',
    animation: 'fadeOut 2s'
  };

  const SliderStyle = {
    height: '100%',
  };

  const handleNext = () => {
    const isLastSlide = CurrentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : CurrentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [CurrentIndex, slides.length]);

  return (
    <div style={SliderStyle}>
      <div style={SlideStyles} className="w-1/2 rounded-lg"></div>
    </div>
  );
}
