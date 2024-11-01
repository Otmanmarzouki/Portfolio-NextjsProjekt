import { useEffect,useState } from 'react';
import React from 'react';

export default function ImageSlider({ slides }) {
    const [CurrentIndex, setCurrentIndex] = useState(1);
   
    const SlideStyles ={
      width:'100%',
      height:'250px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage:`url(${slides[CurrentIndex].img})`,
      animation:'fadeOut 2s'
    }
    const SliderStyle ={
      height:'100%',

     
    }
    const handleNext = () => {
       const isLastSlide= CurrentIndex=== slides.length - 1 
       const newIndex = isLastSlide ? 0 : CurrentIndex + 1 
       setCurrentIndex(newIndex)
    };
   
    useEffect(() => {
      let interval = setInterval(() => {
          handleNext();
      }, 2000);
      return () => clearInterval(interval);
    });
    return ( 
       <>
         
            <div style={SliderStyle} >
              <div style={SlideStyles} className='rounded-xl'>
              </div>
            </div>
         

</>
       
  
        
      
    );
  };
