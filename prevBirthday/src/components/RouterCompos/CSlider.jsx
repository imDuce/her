import React, { useEffect, useRef } from 'react'
import './style.css'

function Compo() {
  
    const sliderRef = useRef(null);

  useEffect(() => {
    const rotate = () => {
      const lastChild = sliderRef.current.lastElementChild.cloneNode(true);
      sliderRef.current.classList.remove('firstSlide');
      sliderRef.current.removeChild(sliderRef.current.lastElementChild);
      sliderRef.current.insertBefore(lastChild, sliderRef.current.firstChild);
      lastChild.classList.add('firstSlide');
    };

    const intervalId = setInterval(() => {
      rotate();
    }, 4000);

    return () => { 
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container ">
      <div className="slider" ref={sliderRef}>
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="box4"></div>
        <div className="box5"></div>
        <div className="box6"></div>
        <div className="box7"></div>
      </div>
    </div>
  );
  
}

export default Compo
