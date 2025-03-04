import React from 'react';
import './memories.css'; 

import img1 from '../../assets/us/cakeAfterCycle.jpg'
import img2 from '../../assets/us/ajeeb01.jpg'
import img11 from '../../assets/us/unk01.jpg'
import img4 from '../../assets/us/unk02.jpg'
import img10 from '../../assets/us/unk03.jpg'
import img6 from '../../assets/us/unk04.jpg'
import img7 from '../../assets/us/afterSkywalker.jpg'
import img8 from '../../assets/us/skyWalker.jpg'
import img9 from '../../assets/us/prePlane.jpg'
import img5 from '../../assets/us/plane01.jpg'
import img3 from '../../assets/us/plane02.jpg'
import img12 from '../../assets/us/plane03.jpg'
import img13 from '../../assets/us/badminton.jpg'

function RotatingCube() {
  return (
    <div className="cube-container">
      <div className="title">
      The best memories are the ones we create together ...
      </div>
      <div className="cube">
        <div className="outer-cube">
          <div className="outer-top">
            <img src={img10} alt="Love" />
          </div>
          <div className="outer-bottom">
            <img src={img2} alt="Love" />
          </div>
          <div className="outer-front">
            <img src={img7} alt="Love" />
          </div>
          <div className="outer-back">
            <img src={img4} alt="Love" />
          </div>
          <div className="outer-left">
            <img src={img12} alt="Love" />
          </div>
          <div className="outer-right">
            <img src={img5} alt="Love" />
          </div>
        </div>
        {/* Inner cube */}
        <div className="inner-cube">
          <div className="inner-top">
            <img src={img6} alt="Love" />
          </div>
          <div className="inner-bottom">
            <img src={img3} alt="Love" />
          </div>
          <div className="inner-front">
            <img src={img8} alt="Love" />
          </div>
          <div className="inner-back">
            <img src={img9} alt="Love" />
          </div>
          <div className="inner-left">
            <img src={img1} alt="Love" />
          </div>
          <div className="inner-right">
            <img src={img11} alt="Love" />
          </div>
        </div>
      </div>
      <div>
        <div className="message">
          <div className="tip">
            {/* Tip text can be added here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RotatingCube;