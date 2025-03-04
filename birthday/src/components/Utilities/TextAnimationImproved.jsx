import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";
import "./stylingForUtils.css"; // Make sure to include CSS for styling

const AnimatedTextImproved = ({ input }) => {
  const text = input;
  const textRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Splitting text into individual spans
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Mark as animated to prevent re-running
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (hasAnimated) {
      anime
        .timeline({ loop: false }) // Run only once per visibility
        .add({
          targets: ".letter",
          scale: [0, 1],
          translateY: [() => anime.random(-360, 360), 0],
          translateX: [() => anime.random(-360, 0), 0],
          opacity: [0, 1],
          filter: ["blur(15px)", "blur(0px)"],
          duration: 750,
          elasticity: 300,
          delay: (el, i) => 35 * (i + 1),
        });
    }
  }, [hasAnimated]);

  return (
    // <div className="animDiv">
      <h1 ref={textRef} className="animH1">
        <span className="text-wrapper">{splitText}</span>
      </h1>
    // </div>
  );
};

export default AnimatedTextImproved;
