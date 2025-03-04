import React, { useEffect } from "react";
import anime from "animejs";
import "./stylingForUtils.css"; // Make sure to include CSS for styling

const AnimatedText = ({ input }) => {
  //   const text = 'You never fail until you stop trying';
  const text = input;

  // Splitting each letter into a span
  const splitText = text.split("").map((char, index) =>
    char === " " ? (
      " " // Keeping spaces intact
    ) : (
      <span key={index} className="letter" data-letter={char}>
        {char}
      </span>
    )
  );

  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: ".letter",
        scale: {
          value: [0, 1],
          duration: 950,
        },
        translateY: [() => anime.random(-360, 360), 0],
        translateX: [() => anime.random(-360, 0), 0],
        opacity: [0, 1],
        filter: {
          value: ["blur(15px)", "blur(0px)"],
          duration: 800,
        },
        duration: 750,
        elasticity: 300,
        delay: (el, i) => 35 * (i + 1),
        begin: (anim) => {
          console.log(anim.began);
        },
      })
      .add({
        targets: "h1",
        opacity: 0,
        duration: 250,
        easing: "easeOutExpo",
        delay: 250,
      });
  }, []);

  return (
    <div className="animDiv">
      <h1 className="animH1">
        <span className="text-wrapper">{splitText}</span>
      </h1>
    </div>
  );
};

export default AnimatedText;
