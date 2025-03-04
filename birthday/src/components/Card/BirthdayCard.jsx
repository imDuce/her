import React, { useEffect } from "react";
import "./cardStyles.css";
// import Splitting from "splitting";
// import ScrollOut from "scroll-out";

// import anime from "animejs";
// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";

import img1 from "../../assets/usables/img1_1.png";
import img1Nobg from "../../assets/usables/img1_nobg.png";
import img6Nobg from "../../assets/usables/img6_nobg.png";

import img13Nobg from "../../assets/usables/img13_1.png";
import CardMessage from "../Message/CardMessage";

// import "../Message/cardMsg.css";
// import "../Message/cardMsgS.scss";
import TextAnimation4 from "../Utilities/TextAnimation4";
import TypingEffect from "../Utilities/TextAnimation5";
import TestAnimation6 from "../Utilities/TestAnimation6";

const BirthdayCard = () => {
  // useEffect(() => {
  //   // setTimeout(() => {
  //   //   Splitting();
  //   //   ScrollOut({
  //   //     targets: "[data-splitting]",
  //   //     onShown: (el) => {
  //   //       if (!el.dataset.animated) {
  //   //         el.dataset.animated = true;
  //   //         anime.timeline({ loop: false }).add({
  //   //           targets: el.querySelectorAll(".letter"),
  //   //           scale: {
  //   //             value: [0, 1],
  //   //             duration: 950,
  //   //           },
  //   //           translateY: [() => anime.random(-360, 360), 0],
  //   //           translateX: [() => anime.random(-360, 0), 0],
  //   //           opacity: [0, 1],
  //   //           filter: {
  //   //             value: ["blur(15px)", "blur(0px)"],
  //   //             duration: 800,
  //   //           },
  //   //           duration: 750,
  //   //           elasticity: 300,
  //   //           delay: (el, i) => 35 * (i + 1),
  //   //         });
  //   //       }
  //   //     },
  //   //   });
  //   //   document.querySelectorAll("p .letters").forEach((el) => {
  //   //     el.innerHTML = el.textContent.replace(
  //   //       /([^\x00-\x80]|\w)/g,
  //   //       "<span class='letter' data-letter='$&'>$&</span>"
  //   //     );
  //   //   });
  //   // }, 100); // Delay to ensure DOM updates before animations apply
  // }, []);

  return (
    <div className="BDcardOuter">
      <div className="leftImgDiv">
        <img src={img1Nobg} alt="" className="leftImg" />
      </div>
      <div className="hover-fold">
        {/* <h3>A note from my soul</h3> */}
        {/* <TextAnimation4 input={"A note from my Soul ..."} /> */}
        <div className="top">
          <div className="front face">
            <img src={img13Nobg} alt="" />
          </div>
          <div className="back face">
            <div className="absolute top-[-60%] left-[10%]">
            <h3>Happy Silver Jubliee !</h3>
            </div>
            {/* <p className="peee ech1" data-splotting>
              <span className="text-wrapper">
                <span className="letters">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </span>
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              reiciendis laboriosam quo officia ex eaque accusantium inventore
              quia nisi veniam. Quasi culpa accusamus facilis amet odit
              adipisci, non consectetur, similique placeat possimus impedit enim
              sapiente porro dolorum voluptatem accusantium voluptate dolore ad
              mollitia quos expedita ipsa repudiandae? Recusandae distinctio
              eligendi, eveniet ex porro accusamus reprehenderit quos,
              praesentium tempora amet corrupti. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illum reiciendis laboriosam quo
              officia ex eaque accusantium inventore quia nisi veniam. Quasi
              culpa accusamus facilis amet odit adipisci, non consectetur,
              similique placeat possimus impedit enim sapiente porro dolorum
              voluptatem accusantium voluptate dolore ad mollitia quos expedita
              ipsa repudiandae? Recusandae distinctio eligendi, eveniet ex porro
              accusamus reprehenderit quos, praesentium tempora amet corrupti.
            </p> */}
            <p className="absolute top-0 left-0 ">
              {/* <div className="absolute top-0 left-0 max-h-[50px] typing-container ">
                <TestAnimation6 />
              </div> */}
              <div>
              Today marks not just another year, but a celebration of the
              remarkable tapestry. 
              <div className="py-1"> </div>
              </div>
              <div>
              This new revolution around the sun is
              destined to bring trails yet unexplored, prospects yet unimagined,
              </div>
              along with the richness of a beautiful life ahead.
            </p>
          </div>
        </div>
        <div className="bottom">{/* <img src={img1} alt="" /> */}</div>
      </div>
      <div className="rightImgDiv">
        <img src={img6Nobg} alt="" className="rightImg" />
      </div>
    </div>
  );
};

export default BirthdayCard;
