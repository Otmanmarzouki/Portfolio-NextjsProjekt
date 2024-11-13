import React, { useEffect, useState } from 'react';

export default function ImageSlider({ slides }) {
  const [CurrentIndex, setCurrentIndex] = useState(1);
  const SlideStyles = {
    width: '100%',
    height: '200px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: slides.length > 0 && slides[CurrentIndex] ? `url(${slides[CurrentIndex].img})` : '',
    animation: 'fadeOut 2s'
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
    <div  className="flex justify-center items-center">
      <div style={SlideStyles} className="  rounded-xl"></div>
    </div>
  );
}
