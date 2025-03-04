import React, { useEffect, useState } from "react";
import MousePointer from "./MousePointer/MousePointer";
import "./HomeScreen/HomeScreen.css";
import "./HomeScreen/HomePage.scss";
import "font-awesome/css/font-awesome.min.css";
import Baloons2 from "./SphereBalloons/Balloons2";
import BalloonCanvas from "./SphereBalloons/FlyingBalloons";

const Home = () => {
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 100);

    setTimeout(() => {
      setDelay(false);
    }, 3000);
  }, []);

  return (
    <>
      {/* {delay && <Baloons2/>} */}
      <div className="home-container">
        <MousePointer className="mouse-pointer-overlay" />

        <div className="birthday">
          <div className="current">
            <span>2</span>
            <span>4</span>
          </div>
          <span className="plus">&</span>
          <div className="frontend">
            <span className="frontend-text">..</span>
            <span className="frontend-text-alt"></span>
          </div>
          <div className="final">
            Happy<span>Birthday</span>Sharvari
          </div>
          <span className="fa fa-birthday-cake"></span>
        </div>
        {/* <Baloons2 /> */}
        {/* <BalloonCanvas/> */}
      </div>
    </>
  );
};

export default Home;
