import React, { useRef, useState } from 'react';
import { Button, Carousel } from 'antd';
import { CarouselRef } from 'antd/es/carousel';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const App: React.FC = () => {
  const slideNumber = useState(0);
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const carouselRef = useRef<CarouselRef>(null);
  const handleNext = ()=>{
    console.log(carouselRef.current)
    if(carouselRef.current){
        carouselRef.current.next();
    }
  }
  return (
    <Carousel ref={carouselRef} dots={false} autoplay={false} arrows={false}>
      <div>
        <h3 style={contentStyle}>1</h3>
        <Button type={"primary"} onClick={handleNext}>Next</Button>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    
    </Carousel>
  );
};

export default App;