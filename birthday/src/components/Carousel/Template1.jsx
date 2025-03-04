import React, { useEffect } from "react";
import "./carousel.css";

import pic1 from "../../assets/carouselImgs/cara1.jpg";
import pic2 from "../../assets/carouselImgs/cara2.jpg";
import pic3 from "../../assets/carouselImgs/cara3.jpg";
import pic4 from "../../assets/carouselImgs/cara4.jpg";
import pic5 from "../../assets/carouselImgs/cara5.jpg";
import pic6 from "../../assets/carouselImgs/cara6.jpg";
import pic7 from "../../assets/carouselImgs/cara7.jpg";
import pic8 from "../../assets/carouselImgs/cara8.jpg";
import pic9 from "../../assets/carouselImgs/cara9.jpg";
import pic10 from "../../assets/carouselImgs/cara10.jpg";
import pic11 from "../../assets/carouselImgs/cara11.jpg";

import me1 from "../../assets/me1.png";


const Carousel = () => {
  useEffect(() => {
    let radius = 240; // Changed from const to let
    const autoRotate = true;
    const rotateSpeed = -60;
    const imgWidth = 120;
    const imgHeight = 170;
    // const bgMusicURL =
    //   "https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a";
    // const bgMusicControls = true;

    const odrag = document.getElementById("drag-container");
    const ospin = document.getElementById("spin-container");
    const aImg = ospin.getElementsByTagName("img");
    const aVid = ospin.getElementsByTagName("video");
    const aEle = [...aImg, ...aVid];

    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    const ground = document.getElementById("ground");
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime) {
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = `rotateY(${
          i * (360 / aEle.length)
        }deg) translateZ(${radius}px)`;
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay =
          delayTime || (aEle.length - i) / 4 + "s";
      }
    }

    function applyTranform(obj) {
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;
      obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    }

    function playSpin(yes) {
      ospin.style.animationPlayState = yes ? "running" : "paused";
    }

    let sX,
      sY,
      nX,
      nY,
      desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;

    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      ospin.style.animation = `${animationName} ${Math.abs(
        rotateSpeed
      )}s infinite linear`;
    }

    // if (bgMusicURL) {
    //   document.getElementById("music-container").innerHTML += `
    //     <audio src="${bgMusicURL}" ${
    //     bgMusicControls ? "controls" : ""
    //   } autoplay loop>
    //       <p>If you are reading this, it is because your browser does not support the audio element.</p>
    //     </audio>
    //   `;
    // }

    document.onpointerdown = function (e) {
      clearInterval(odrag.timer);
      e = e || window.event;
      sX = e.clientX;
      sY = e.clientY;

      this.onpointermove = function (e) {
        e = e || window.event;
        nX = e.clientX;
        nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        sX = nX;
        sY = nY;
      };

      this.onpointerup = function () {
        odrag.timer = setInterval(() => {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTranform(odrag);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);
        this.onpointermove = this.onpointerup = null;
      };

      return false;
    };

    document.onmousewheel = function (e) {
      e = e || window.event;
      const d = e.wheelDelta / 20 || -e.detail;
      radius += d; // This line should now work correctly
      init(1);
    };

    setTimeout(init, 1000);
  }, []);

  return (
    <div className="carous">
      <div id="drag-container">
        <div id="spin-container">
          <img src={pic1} alt="" />
          <img src={pic9} alt="" />
          <img src={pic3} alt="" />
          <img src={pic4} alt="" />
          <img src={pic11} alt="" />
          <img src={pic6} alt="" />
          <img src={pic10} alt="" />
          <img src={pic5} alt="" />
          <img src={pic8} alt="" />
          {/* <a
            target="_blank"
            href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg"
          >
            <img
              src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </a> */}
            <video controls loop poster={me1} onClick={() => window.open("https://drive.google.com/file/d/11PKqju--u0UOQ8VqWO2bti9ylmdxE30E/view?usp=drive_link", "_blank", "noopener,noreferrer")}>
              <source
                src='https://drive.google.com/file/d/11PKqju--u0UOQ8VqWO2bti9ylmdxE30E/view?usp=drive_link'
                type="video/mp4"
              />
            </video>
          <p className="paraOfCara" style={{  fontFamily: "Srisakdi", fontWeight: 400,fontStyle: 'normal'}}>A spinning symphony of grace and angelic delight .</p>
        </div>
        <div id="ground"></div>
        {/* <div id="music-container"></div> */}
      </div>
    </div>
  );
};

export default Carousel;

// import React, { useEffect, useRef } from 'react';
// import './Carousel.css'; // Assuming you save the CSS in a file named Carousel.css

// const Carousel = () => {
//   const dragContainerRef = useRef(null);
//   const spinContainerRef = useRef(null);
//   const groundRef = useRef(null);

//   // You can change global variables here:
//   const radius = 240; // how big of the radius
//   const autoRotate = true; // auto rotate or not
//   const rotateSpeed = -60; // unit: seconds/360 degrees
//   const imgWidth = 120; // width of images (unit: px)
//   const imgHeight = 170; // height of images (unit: px)

//   // Link of background music - set 'null' if you don't want to play background music
//   const bgMusicURL = 'https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a';
//   const bgMusicControls = true; // Show UI music control

//   useEffect(() => {
//     const odrag = dragContainerRef.current;
//     const ospin = spinContainerRef.current;
//     const aImg = ospin.getElementsByTagName('img');
//     const aVid = ospin.getElementsByTagName('video');
//     const aEle = [...aImg, ...aVid]; // combine 2 arrays

//     // Size of images
//     ospin.style.width = imgWidth + "px";
//     ospin.style.height = imgHeight + "px";

//     // Size of ground - depend on radius
//     const ground = groundRef.current;
//     ground.style.width = radius * 3 + "px";
//     ground.style.height = radius * 3 + "px";

//     function init(delayTime) {
//       for (let i = 0; i < aEle.length; i++) {
//         aEle[i].style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
//         aEle[i].style.transition = "transform 1s";
//         aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
//       }
//     }

//     function applyTransform(obj) {
//       if (tY > 180) tY = 180;
//       if (tY < 0) tY = 0;
//       obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
//     }

//     function playSpin(yes) {
//       ospin.style.animationPlayState = yes ? 'running' : 'paused';
//     }

//     let sX, sY, nX, nY, desX = 0, desY = 0, tX = 0, tY = 10;

//     if (autoRotate) {
//       const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
//       ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
//     }

//     if (bgMusicURL) {
//       document.getElementById('music-container').innerHTML += `
//         <audio src="${bgMusicURL}" ${bgMusicControls ? 'controls' : ''} autoplay loop>
//           <p>If you are reading this, it is because your browser does not support the audio element.</p>
//         </audio>
//       `;
//     }

//     document.onpointerdown = function (e) {
//       clearInterval(odrag.timer);
//       e = e || window.event;
//       sX = e.clientX;
//       sY = e.clientY;

//       document.onpointermove = function (e) {
//         e = e || window.event;
//         nX = e.clientX;
//         nY = e.clientY;
//         desX = nX - sX;
//         desY = nY - sY;
//         tX += desX * 0.1;
//         tY += desY * 0.1;
//         applyTransform(odrag);
//         sX = nX;
//         sY = nY;
//       };

//       document.onpointerup = function () {
//         odrag.timer = setInterval(function () {
//           desX *= 0.95;
//           desY *= 0.95;
//           tX += desX * 0.1;
//           tY += desY * 0.1;
//           applyTransform(odrag);
//           playSpin(false);
//           if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
//             clearInterval(odrag.timer);
//             playSpin(true);
//           }
//         }, 17);
//         document.onpointermove = document.onpointerup = null;
//       };

//       return false;
//     };

//     document.onmousewheel = function (e) {
//       e = e || window.event;
//       const d = e.wheelDelta / 20 || -e.detail;
//       radius += d;
//       init(1);
//     };

//     setTimeout(() => init(1000), 1000);
//   }, [radius, autoRotate, rotateSpeed, imgWidth, imgHeight, bgMusicURL, bgMusicControls]);

//   return (
//     <div className='outer'>
//       <div id="drag-container" ref={dragContainerRef}>
//         <div id="spin-container" ref={spinContainerRef}>
//           <img src="https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
//           <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
//           <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
//           <img src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
//           <img src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
//           <img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
//           <a target="_blank" href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg" rel="noopener noreferrer">
//             <img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
//           </a>
//           <video controls autoPlay loop>
//             <source src="https://player.vimeo.com/external/322244668.sd.mp4?s=338c48ac2dfcb1d4c0689968b5baf94eee6ca0c1&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
//           </video>
//           <p>3D Tiktok Carousel</p>
//         </div>
//         <div id="ground" ref={groundRef}></div>
//       </div>
//       <div id="music-container"></div>
//       <a href="https://github.com/HoangTran0410/3DCarousel" target="_blank" className="github-corner" aria-label="View source on GitHub" rel="noopener noreferrer">
//         <svg width="80" height="80" viewBox="0 0 250 250" style={{ fill: '#fff', color: '#000', position: 'absolute', top: 0, border: 0, right: 0 }} aria-hidden="true">
//           <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
//           <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{ transformOrigin: '130px 106px' }} className="octo-arm"></path>
//           <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
//         </svg>
//       </a>
//     </div>
//   );
// };

// export default Carousel;
