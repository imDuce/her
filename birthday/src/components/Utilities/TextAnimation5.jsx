import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const [displayedChars, setDisplayedChars] = useState([]);
  const TYPING_SPEED = 50;

  const messages = [
    "Like a wheel in constant motion,",
    "You've pedaled through a quarter century",
    "With the wind of ambition at your back and ",
    "adventure woven into your spirit.",
    "Hands that create beauty from simple threads,",
    "Crocheting moments into memories, crafting your ",
    "path forward — One stitch, one mile, one triumph",
    "at a time. On the field of life, playing",
    "with passion, chasing goals with unwavering,",
    "determination building a treasury of experiences,",
    "more valuable than any currency.",
    "Today marks not just another year, but a celebration of",
    "the remarkable tapestry. This new revolution around the sun is",
    "destined to bring trails yet unexplored, prospects yet unimagined,",
    "and the richness of a life lived beautifully. ",
  ];
  

  useEffect(() => {
    let allChars = [];
    let totalDelay = 0;

    // Process each message
    messages.forEach((message, messageIndex) => {
      const chars = message.split("");

      // Process each character
      chars.forEach((char, charIndex) => {
        totalDelay += TYPING_SPEED;
        if (char === " ") totalDelay += TYPING_SPEED * 2;

        setTimeout(() => {
          setDisplayedChars((prev) => [
            ...prev,
            { char, messageIndex, charIndex },
          ]);
        }, totalDelay);
      });

      // Add extra delay after each message
      totalDelay += TYPING_SPEED * 4;
    });

    return () => {
      // Cleanup any timeouts if component unmounts
      setDisplayedChars([]);
    };
  }, []);

  return (
    <div className="anim5Div max-w-[50px] overflow-auto">
      <div className="flex justify-center items-center absolute w-full h-full ">
        <div className="w-full max-w-[70%] p-8 border-4 border-white rounded ">
          {messages.map((message, messageIndex) => (
            <p
              key={messageIndex}
              className="inline text-pink-400 font-mono text-sm leading-4"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              {message.split("").map((char, charIndex) => (
                <span
                  key={`${messageIndex}-${charIndex}`}
                  style={{
                    display: displayedChars.some(
                      (c) =>
                        c.messageIndex === messageIndex &&
                        c.charIndex === charIndex
                    )
                      ? "inline-block"
                      : "none",
                    minWidth: "0.5em",
                  }}
                >
                  {char}
                </span>
              ))}
              {messageIndex < messages.length - 1 && " "}
            </p>
          ))}
          <p className="inline-block w-[3px] h-[1em] bg-white animate-cursor"></p>
        </div>

        <style jsx>{`
          @keyframes flash {
            0% {
              opacity: 0;
            }
            49% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 1;
            }
          }

          body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background-color: black;
          }

          .animate-cursor {
            animation: flash 0.8s infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default TypingEffect;
