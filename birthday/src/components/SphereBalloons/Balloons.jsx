import React, { useEffect, useRef } from 'react';
import Spheres2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.8/build/backgrounds/spheres2.cdn.min.js';
import './spheres.css';

const Balloons = () => {
    const canvasRef = useRef(null);
    const bgRef = useRef(null);
  
    useEffect(() => {
      if (canvasRef.current) {
        bgRef.current = Spheres2Background(canvasRef.current, {
          count: 200,
          colors: [0xff0000, 0x0, 0xffffff],
          minSize: 0.5,
          maxSize: 1,
        });
      }
  
      const handleBodyClick = (ev) => {
        if (ev.target.id !== 'colors-btn') {
          bgRef.current?.togglePause();
        }
      };
  
      document.body.addEventListener('click', handleBodyClick);
      return () => document.body.removeEventListener('click', handleBodyClick);
    }, []);
  
    const changeColors = () => {
      if (bgRef.current) {
        bgRef.current.spheres.setColors([
          0xffffff * Math.random(),
          0xffffff * Math.random(),
          0xffffff * Math.random(),
        ]);
        bgRef.current.spheres.light1.color.set(0xffffff * Math.random());
      }
    };
  
    return (
      <div id="app">
        <div className="hero">
          <h1>Sphere</h1>
          <h2>Packing</h2>
        </div>
        <div className="buttons">
          <button type="button" id="colors-btn" onClick={changeColors}>
            Random colors
          </button>
        </div>
        <canvas id="webgl-canvas" ref={canvasRef}></canvas>
      </div>
    );
  };

export default Balloons