import React, { useState, useRef, useEffect } from "react";
import "./egg.css";
import "../Message/cardMsg.css";
import anime from "animejs";
import AnimatedText from "../Utilities/TextAnimation";
import AnimatedTextImproved from "../Utilities/TextAnimationImproved";
import TestAnimation6 from "../Utilities/TestAnimation6";

const Andaa = () => {
  const [showSaying, setShowSaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    //  extremely useful useEffect for loading external resources in a React component
    const links = [
      "https://d7mj4aqfscim2.cloudfront.net/s3/css/c580a7a3af1330e80dd6906a629b0047_mv_4895193a6fd7aedd7ec6c3f2563b1cad.min.css",
      "https://d7mj4aqfscim2.cloudfront.net/s3/css/837dee8ece68a65b9f87752744c7459b_mv_4895193a6fd7aedd7ec6c3f2563b1cad.min.css",
      "https://d7mj4aqfscim2.cloudfront.net/s3/css/c76dc3c0ebf6a748cc01e54492e437c6_mv_4895193a6fd7aedd7ec6c3f2563b1cad.min.css",
    ];

    const jsLinks = [
      "https://code.jquery.com/jquery-3.3.1.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js",
    ];

    const linkElements = links.map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    const jsLinkElements = jsLinks.map((href) => {
      const link = document.createElement("link");
      link.rel = "script";
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    setTimeout(() => {
      Splitting();
      ScrollOut({
        targets: "[data-splitting]",
        onShown: (el) => {
          if (!el.dataset.animated) {
            el.dataset.animated = true;
            anime.timeline({ loop: false }).add({
              targets: el.querySelectorAll(".letter"),
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
            });
          }
        },
      });

      document.querySelectorAll("p .letters").forEach((el) => {
        el.innerHTML = el.textContent.replace(
          /([^\x00-\x80]|\w)/g,
          "<span class='letter' data-letter='$&'>$&</span>"
        );
      });
    }, 100); // Delay to ensure DOM updates before animations apply

    return () => {
      // Cleanup: Remove the styles when component unmounts
      linkElements.forEach((link) => document.head.removeChild(link));
      jsLinkElements.forEach((link) => document.head.removeChild(link));
    };
  }, []);

  const toggleSaying = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // First animation step - collapse
    const scrollWrap = document.querySelector(".scroll-wrap");
    scrollWrap.style.overflow = "hidden";

    const animateCollapse = () => {
      scrollWrap.style.width = "10px";

      setTimeout(() => {
        // Toggle the content
        setShowSaying(!showSaying);

        // Second animation step - expand
        setTimeout(() => {
          scrollWrap.style.width = "420px";

          // Animation complete
          setTimeout(() => {
            scrollWrap.style.overflow = "visible";
            setIsAnimating(false);
          }, 400);
        }, 200);
      }, 400);
    };

    animateCollapse();
  };

  const replayAnimation = () => {
    if (isAnimating) return;

    document.querySelector(".scroll-wrap").style.overflow = "hidden";

    // Clone and replace technique
    if (containerRef.current) {
      const container = containerRef.current;
      const parent = container.parentNode;
      const clone = container.cloneNode(true);

      parent.insertBefore(clone, container);
      parent.removeChild(container);
      containerRef.current = clone;

      // Add event listeners to the new elements
      clone
        .querySelector(".reveal-translation")
        .addEventListener("click", toggleSaying);
      clone
        .querySelector(".replay-animation")
        .addEventListener("click", replayAnimation);
    }
  };

  return (
    <div className="andaaContainer" ref={containerRef}>
      <div className="egg-bounce-container">
        <div className="egg-right"></div>
        <div className="egg-left"></div>
        <div className="scroll-container">
          <div className="scroll-wrap">
            <div className="scroll">
              {showSaying && (
                <p className="saying translation-source scrollable " style={{ maxHeight: "300px", overflowY: "auto" }}>
                  {/* <AnimatedTextImproved
                    input={" Donec nunc ligula, vulputate quis mollis eu...      wehdliweuiuwepin;iwxlmimnweoid;inilewnfiuencjkdnliurfcjnlieufwfdjcnlajsn      edhienxieudpienwpicndfnpquncljrfiuncljabduvbjaclhbrufychdn agqiweudenxijnuoybcoqryb            wiauedonewiudcnjnoiaurfoiujdlcbuyewbfjwc UYHBRFJN CHEBOHEKJchubpHBVKSUBpbhfebkvhbfeh"}
                    className="AnimText"
                  /> */}
                  {/* <AnimatedText
                    input={" Donec nunc ligula, vulputate quis mollis eu..."}
                    className="AnimText"
                  /> */}

                  <TestAnimation6/>
                </p>
              )}
              {!showSaying && (
                <p className="translation">
                  Eat, drink and be merry (for tomorrow we die).
                </p>
              )}
              <div className="wrap wrap-left">
                <div className="shadow"></div>
              </div>
              <div className="wrap wrap-right">
                <div className="shadow"></div>
              </div>
            </div>
          </div>
          <div className="toggle-saying pt-[6.5rem]">
            {/* <span className="reveal-translation" onClick={toggleSaying}>
              {showSaying ? "Reveal translation" : "Reveal saying"}
            </span> */}
            {/* <span
              style={{ marginLeft: "20px" }}
              className="replay-animation"
              onClick={replayAnimation}
            >
              Replay animation
            </span> */}
          </div>
        </div>
        <div className="egg-falling-shadow"></div>
        <div className="egg-left-shadow"></div>
        <div className="egg-right-shadow"></div>
      </div>
    </div>
  );
};

export default Andaa;
